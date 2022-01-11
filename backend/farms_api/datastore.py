from datetime import datetime
from typing import Dict, Optional

SENSOR_NAME_TEMP = "temperature"
SENSOR_NAME_RAINFALL = "rainFall"
SENSOR_NAME_PH = "pH"
VALID_SENSORS = [SENSOR_NAME_TEMP, SENSOR_NAME_RAINFALL, SENSOR_NAME_PH]

class Measurement:
    def __init__(self, farm_name: str, measure_date: datetime, sensor_type: str, value: float) -> None:
        self.farm_name = farm_name
        self.date = measure_date
        self.sensor_type = sensor_type
        self.value = value

class DataStore:
    """
    Generic DataStore class, child classes must implement specific methods by themselves.
    """
    def __init__(self) -> None:
        self.stats = []
        self.farms = []

    def parse_raw_data(self, data: Dict[str, str]) -> Optional[Measurement]:
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


class InMemoryDataStore(DataStore):
    """
    DataStore which keeps all the data in memory.
    """
    def add_stat_data(self, data: Dict[str, str]) -> None:
        print(f"parsing {data}")
        parsed_data = self.parse_raw_data(data)
        if parsed_data:
            print("done")
            self.stats.append(parsed_data)

    def add_farm_info(self, data: Dict[str, str]) -> None:
        self.farms.append(data)
