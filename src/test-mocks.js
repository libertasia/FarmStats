import {MetricType} from "./const";

export const mockStats = [
  {
    "location": "farm 1",
    "datetime": "2018-12-31T22:00:00.000Z",
    "value": 5.88,
    "farm_id": "1",
    "sensor_type": "ph"
  },
  {
    "location": "farm 2",
    "datetime": "2018-12-31T22:00:00.000Z",
    "value": 5.88,
    "farm_id": "2",
    "sensor_type": "rainfall"
  },
  {
    "location": "farm 3",
    "datetime": "2018-12-31T22:00:00.000Z",
    "value": 5.88,
    "farm_id": "3",
    "sensor_type": "rainfall"
  },
  {
    "location": "farm 4",
    "datetime": "2018-12-31T22:00:00.000Z",
    "value": 5.88,
    "farm_id": "4",
    "sensor_type": "rainfall"
  },
];

export const mockLocations = [
  {
    "farm_id": "1",
    "name": "farm 1",
    "isSelected": true,
  },
  {
    "farm_id": "2",
    "name": "farm 2",
    "isSelected": true,
  },
  {
    "farm_id": "3",
    "name": "farm 3",
    "isSelected": true,
  },
  {
    "farm_id": "4",
    "name": "farm 4",
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

export const mockFarms = [
  {
    "farm_id": "1",
    "name": "farm 1",
    "location": "Metsola"
  },
  {
    "farm_id": "2",
    "name": "farm 2",
    "location": "Viikki"
  },
  {
    "farm_id": "3",
    "name": "farm 3",
    "location": "Tampere"
  },
  {
    "farm_id": "4",
    "name": "farm 4",
    "location": "Eteläesplanadi"
  },
];
