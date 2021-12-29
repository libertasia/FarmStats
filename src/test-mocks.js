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

export const mockMonthlyStats = [
  {
    "farm_id": "1",
    "sensor_type": "temperature",
    "stats": [
      {
        "month": 12,
        "year": 2019,
        "average": -5.3416,
        "median": -5.8,
        "standard_deviation": 5.0244
      },
      {
        "month": 1,
        "year": 2021,
        "average": -6.228,
        "median": -6,
        "standard_deviation": 4.9634
      },
      {
        "month": 9,
        "year": 2019,
        "average": 21.366,
        "median": 22.5,
        "standard_deviation": 4.5688
      },
    ]
  },
  {
    "farm_id": "2",
    "sensor_type": "temperature",
    "stats": [
      {
        "month": 12,
        "year": 2019,
        "average": -5.3416,
        "median": -5.8,
        "standard_deviation": 5.0244
      },
      {
        "month": 1,
        "year": 2021,
        "average": -6.228,
        "median": -6,
        "standard_deviation": 4.9634
      },
      {
        "month": 9,
        "year": 2019,
        "average": 21.366,
        "median": 22.5,
        "standard_deviation": 4.5688
      },
    ]
  },
  {
    "farm_id": "3",
    "sensor_type": "temperature",
    "stats": [
      {
        "month": 12,
        "year": 2019,
        "average": -5.3416,
        "median": -5.8,
        "standard_deviation": 5.0244
      },
      {
        "month": 1,
        "year": 2021,
        "average": -6.228,
        "median": -6,
        "standard_deviation": 4.9634
      },
      {
        "month": 9,
        "year": 2019,
        "average": 21.366,
        "median": 22.5,
        "standard_deviation": 4.5688
      },
    ]
  },
  {
    "farm_id": "4",
    "sensor_type": "temperature",
    "stats": [
      {
        "month": 12,
        "year": 2019,
        "average": -5.3416,
        "median": -5.8,
        "standard_deviation": 5.0244
      },
      {
        "month": 1,
        "year": 2021,
        "average": -6.228,
        "median": -6,
        "standard_deviation": 4.9634
      },
      {
        "month": 9,
        "year": 2019,
        "average": 21.366,
        "median": 22.5,
        "standard_deviation": 4.5688
      },
    ]
  },
];
