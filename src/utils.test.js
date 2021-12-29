import {mockStats} from "./test-mocks";
import {generateFilteredData} from "./utils";
import {MetricType} from "./const";


it(`Function generateFilteredData works correctly`, () => {
  const allData = mockStats;
  const locations = [
    {
      "farm_id": "1",
      "isSelected": true,
    },
    {
      "farm_id": "2",
      "isSelected": false,
    },
    {
      "farm_id": "3",
      "isSelected": false,
    },
    {
      "farm_id": "4",
      "isSelected": false,
    }
  ];
  const metrics = [
    {
      type: MetricType.PH,
      isSelected: true,
    },
    {
      type: MetricType.RAINFALL,
      isSelected: false,
    },
    {
      type: MetricType.TEMPERATURE,
      isSelected: false,
    }
  ];
  const expectedResult = [mockStats[0]];

  expect(generateFilteredData(allData, locations, metrics)).toEqual(expectedResult);
});
