from fastapi import FastAPI

app = FastAPI(
    title="Solita Dev Academy Farms API",
    description="Made by Anastasiia Erokhina"
)


@app.get("/v1/farms")
async def get_all_farms():
    """
    Returns info about all farms.
    """
    return {}

@app.get("/v1/farms/{farm_id}")
async def get_farm_details():
    """
    Returns info about a specific farm.
    """
    return {}

@app.get("/v1/farms/{farm_id}/stats")
async def get_all_farm_stats():
    """
    Returns all stats for a farm.
    """
    return {}

@app.get("/v1/farms/{farm_id}/stats/{sensor_type}/monthly")
async def get_monthly_stats_by_farm_sensor():
    """
    Returns stats for a given sensor, for a given farm, aggregated monthly.
    """
    return {}
