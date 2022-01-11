from datetime import datetime
from typing import Dict, List, Optional
from statistics import median

SENSOR_NAME_TEMP = "temperature"
SENSOR_NAME_RAINFALL = "rainFall"
SENSOR_NAME_PH = "pH"
VALID_SENSORS = [SENSOR_NAME_TEMP, SENSOR_NAME_RAINFALL, SENSOR_NAME_PH]

class Farm:
    def __init__(self, name: str, location: str, established: datetime, id: Optional[str] = None) -> None:
        self.id = id
        self.name = name
        self.location = location
        self.established = established

class Measurement:
    def __init__(self, farm_name: str, measure_date: datetime, sensor_type: str, value: float) -> None:
        self.farm_name = farm_name
        self.date = measure_date
        self.sensor_type = sensor_type
        self.value = value

class MonthlyAggregation:
    def __init__(self, month: int, year: int, average: float, median: float, stddev: float) -> None:
        self.month = month
        self.year = year
        self.average = average
        self.median = median
        self.stddev = stddev

class DataStore:
    """
    Generic DataStore class, child classes must implement specific methods by themselves.
    """

    def parse_raw_farm_data(self, data: Dict[str, str]) -> Optional[Farm]:
        name = data.get("name")
        location = data.get("location")
        established = data.get("established")
        established = datetime.strptime(established, "%Y-%m-%dT%H:%M:%S.%f%z")
        return Farm(name, location, established)

    def parse_raw_stats_data(self, data: Dict[str, str]) -> Optional[Measurement]:
        """
        Parses raw string data and returns a Measurement object.
        If the data doesn't pass validation, returns None.
        """
        farm_name = data.get("location")
        measure_date = data.get("datetime")
        measure_date = datetime.strptime(measure_date, "%Y-%m-%dT%H:%M:%S.%f%z")
        sensor_type = data.get("sensorType")
        if sensor_type not in VALID_SENSORS:
            return None
        value = data.get("value")
        if not value or value == 'NULL':
            return None
        value = float(value)
        if sensor_type == SENSOR_NAME_TEMP:
            if value < -50 or value > 100:
                return None
        if sensor_type == SENSOR_NAME_RAINFALL:
            if value < 0 or value > 500:
                return None
        if sensor_type == SENSOR_NAME_PH:
            if value < 0 or value > 14:
                return None
        return Measurement(farm_name, measure_date, sensor_type, value)

    def add_stat_data(self, data: Dict[str, str]) -> None:
        raise NotImplementedError

    def add_farm_info(self, data: Dict[str, str]) -> None:
        raise NotImplementedError

    def get_farms(self) -> List[Farm]:
        raise NotImplementedError

    def get_farm_by_id(self, farm_id: int) -> Farm:
        raise NotImplementedError

    def get_farm_stats(self, farm_id: int) -> List[Measurement]:
        raise NotImplementedError

    def get_monthly_stats(self, farm_id: int, sensor_type: str) -> List[MonthlyAggregation]:
        raise NotImplementedError

class InMemoryDataStore(DataStore):
    """
    DataStore which keeps all the data in memory.
    """
    stats: List[Measurement]
    farms: List[Farm]

    def __init__(self) -> None:
        self.stats = []
        self.farms = []

    def add_stat_data(self, data: Dict[str, str]) -> None:
        parsed_data = self.parse_raw_stats_data(data)
        if parsed_data:
            self.stats.append(parsed_data)

    def add_farm_info(self, data: Dict[str, str]) -> None:
        parsed_data = self.parse_raw_farm_data(data)
        if parsed_data:
            if not parsed_data.id:
                existing_ids = [int(x.id) for x in self.farms]
                if len(existing_ids) > 0:
                    new_id = max(existing_ids) + 1
                else:
                    new_id = 1
                parsed_data.id = new_id
            self.farms.append(parsed_data)

    def get_farms(self) -> List[Farm]:
        return self.farms

    def get_farm_by_id(self, farm_id) -> Farm:
        for farm in self.farms:
            if farm.id == farm_id:
                return farm
        return None

    def get_farm_stats(self, farm_id) -> List[Measurement]:
        res = []
        farm = self.get_farm_by_id(farm_id)
        print(farm.name)
        if not farm:
            return res
        for measurement in self.stats:
            if measurement.farm_name == farm.name:
                res.append(measurement)
        return res

    def get_monthly_stats(self, farm_id: int, sensor_type: str) -> List[MonthlyAggregation]:
        res = []
        farm = self.get_farm_by_id(farm_id)
        if not farm:
            return res
        farm_measurements = [m for m in self.stats if m.farm_name == farm.name]
        # this dictionary will have yyyy-mm as keys and measurements as values
        monthly_data = {}
        for measurement in farm_measurements:
            key = f"{measurement.date.year}-{measurement.date.month}"
            if not key in monthly_data:
                monthly_data[key] = {
                    "month": measurement.date.month,
                    "year": measurement.date.year,
                    "values": []
                }
            monthly_data[key]["values"].append(measurement.value)
        print(monthly_data)
        for key, value in monthly_data.items():
            res.append(MonthlyAggregation(
                value["month"],
                value["year"],
                sum(value["values"]) / len(value["values"]),
                0,
                0
            ))
        return res
