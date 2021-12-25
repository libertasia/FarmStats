export const generateFilteredData = (allData, locations, metrics) => {
  const selectedLocations = locations.filter((item) => item.isSelected);
  const selectedLocationIds = selectedLocations.map((loc) => loc.farm_id);
  const selectedMetrics = metrics.filter((item) => item.isSelected);
  const selectedMetricsNames = selectedMetrics.map((metric) => metric.type);
  return allData.filter((element) => selectedLocationIds.indexOf(element.farm_id) >= 0 && selectedMetricsNames.indexOf(element.sensor_type) >= 0);
};
