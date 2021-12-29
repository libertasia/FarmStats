import React from "react";
import {Provider} from "react-redux";
import {render, screen} from "@testing-library/react";
import configureStore from "redux-mock-store";
import {mockLocations, mockMetrics, mockMonthlyStats} from "../../test-mocks";
import {DataGraphs} from "./data-graphs";
import {AggregationType} from "../../const";

const mockStore = configureStore({});
const store = {
  DATA: {
    monthlyStats: mockMonthlyStats,
  },
  VIEW: {
    activeAggregation: AggregationType.AVERAGE,
    locations: mockLocations,
    metrics: mockMetrics,
  }
};

it(`DataGraphs renders correctly`, () => {
  render(
      <Provider store={mockStore(store)}>
        <DataGraphs
          monthlyStats={mockMonthlyStats}
          activeAggregation={AggregationType.AVERAGE}
          selectedLocations={mockLocations}
          selectedMetrics={mockMetrics}
        />
      </Provider>
  );

  const headerElement = screen.getByText(`Select an aggregation option:`);

  expect(headerElement).toBeInTheDocument();
});
