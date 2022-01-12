import csv
import glob
from os import stat
from fastapi import FastAPI
from farms_api.datastore import InMemoryDataStore, MongoDataStore

#storage = InMemoryDataStore()
storage = MongoDataStore(
    "mongodb://localhost:27017",
    "solita-farms"
)

app = FastAPI(
    title="Solita Dev Academy Farms API",
    description="Made by Anastasiia Erokhina"
)

@app.post("/init")
async def init_api():
    """
    Loads data from CSV files into datastore. Also adds some additional info about the farms.
    """
    data_directory = "./csv_data"
    csv_files = glob.glob(f"{data_directory}/*.csv")
    for file_path in csv_files:
        with open(file_path) as csv_file:
            csv_reader = csv.DictReader(csv_file)
            for line in csv_reader:
                storage.add_stat_data(line)
    # add some info about the farms
    storage.add_farm_info({
        "name": "Friman Metsola collective",
        "location": "Metsola",
        "established": "2017-11-08T01:48:57.669Z"
    })
    storage.add_farm_info({
        "name": "PartialTech Research Farm",
        "location": "Viikki",
        "established": "2016-11-08T01:48:57.669Z"
    })
    storage.add_farm_info({
        "name": "Noora's farm",
        "location": "Helsinki",
        "established": "2018-11-08T01:48:57.669Z"
    })
    storage.add_farm_info({
        "name": "Organic Ossi's Impact That Lasts plantase",
        "location": "Helsinki",
        "established": "2021-11-08T01:48:57.669Z"
    })
    return {}

@app.get("/v1/farms")
async def get_all_farms():
    """
    Returns info about all farms.
    """
    farms = storage.get_farms()
    res = []
    for farm in farms:
        res.append({
            "id": farm.id,
            "name": farm.name,
            "location": farm.location
        })
    return res

@app.get("/v1/farms/{farm_id}")
async def get_farm_details(farm_id: str):
    """
    Returns info about a specific farm.
    """
    farm = storage.get_farm_by_id(farm_id)
    if not farm:
        return {}
    else:
        return {
            "id": farm.id,
            "name": farm.name,
            "location": farm.location,
            "established": farm.established
        }

@app.get("/v1/farms/{farm_id}/stats")
async def get_all_farm_stats(farm_id: str):
    """
    Returns all stats for a farm.
    """
    stats = storage.get_farm_stats(farm_id)
    return {
        "measurements": stats
    }

@app.get("/v1/farms/{farm_id}/stats/{sensor_type}/monthly")
async def get_monthly_stats(farm_id: str, sensor_type: str):
    """
    Returns stats for a given sensor, for a given farm, aggregated monthly.
    """
    stats = storage.get_monthly_stats(farm_id, sensor_type)
    stat_list = []
    for stat in stats:
        stat_list.append({
            "month": stat.month,
            "year": stat.year,
            "average": stat.average,
            "median": stat.median,
            "standard_deviation": stat.stddev
        })
    return {
        "farm_id": farm_id,
        "sensor_type": sensor_type,
        "stats": stat_list
    }
