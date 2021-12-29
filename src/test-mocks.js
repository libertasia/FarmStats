import {MetricType} from "./const";

export const mockStats = [
  {
    "location": "Noora's farm",
    "datetime": "2018-12-31T22:00:00.000Z",
    "value": 5.88,
    "farm_id": "3",
    "sensor_type": "ph"
  },
  {
    "location": "Friman Metsola collective",
    "datetime": "2018-12-31T22:00:00.000Z",
    "value": 5.88,
    "farm_id": "3",
    "sensor_type": "ph"
  },
  {
    "location": "PartialTech Research Farm",
    "datetime": "2018-12-31T22:00:00.000Z",
    "value": 5.88,
    "farm_id": "3",
    "sensor_type": "ph"
  },
  {
    "location": "Organic Ossi's Impact That Lasts plantase",
    "datetime": "2018-12-31T22:00:00.000Z",
    "value": 5.88,
    "farm_id": "3",
    "sensor_type": "ph"
  },
];

export const mockLocations = [
  {
    "farm_id": "1",
    "name": "Noora's farm",
    "isSelected": true,
  },
  {
    "farm_id": "2",
    "name": "Friman Metsola collective",
    "isSelected": true,
  },
  {
    "farm_id": "3",
    "name": "PartialTech Research Farm",
    "isSelected": true,
  },
  {
    "farm_id": "4",
    "name": "Organic Ossi's Impact That Lasts plantase",
    "isSelected": true,
  }
];

export const mockMetrics = [
  {
    type: MetricType.PH,
    isSelected: true,
  },
  {
    type: MetricType.RAINFALL,
    isSelected: true,
  },
  {
    type: MetricType.TEMPERATURE,
    isSelected: true,
  }
];
