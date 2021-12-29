import React from "react";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Filter} from "./filter";
import {mockLocations, mockMetrics} from "../../test-mocks";
import {MetricType} from "../../const";

const mockStore = configureStore({});
const store = {
  VIEW: {
    locations: mockLocations,
    metrics: mockMetrics,
  }
};

describe(`Filter`, () => {
  it(`renders correctly`, () => {
    render(
        <Provider store={mockStore(store)}>
          <Filter
            metricTypes={mockMetrics}
            locations={mockLocations}
            onMetricFilterClick={jest.fn()}
            onLocationFilterClick={jest.fn()}
          />
        </Provider>
    );

    expect(screen.getByText(/Filter options/i)).toBeInTheDocument();
    expect(screen.getByText(/Location/i)).toBeInTheDocument();
    expect(screen.getByText(/Metric/i)).toBeInTheDocument();
  });
  it(`works correctly when clicked`, () => {
    const metricTypeCheckboxClickHandler = jest.fn();
    const locationCheckboxClickHandler = jest.fn();
    metricTypeCheckboxClickHandler.mockImplementation(
        () => (mockMetrics[0].isSelected = false)
    );
    locationCheckboxClickHandler.mockImplementation(
      () => (mockLocations[0].isSelected = false)
  );

    render(
        <Provider store={mockStore(store)}>
          <Filter
            metricTypes={mockMetrics}
            locations={mockLocations}
            onMetricFilterClick={metricTypeCheckboxClickHandler}
            onLocationFilterClick={locationCheckboxClickHandler}
          />
        </Provider>
    );

    userEvent.click(screen.getByText(`Noora's farm`));
    userEvent.click(screen.getByText(MetricType.PH));
    expect(metricTypeCheckboxClickHandler).toBeCalled();
    expect(locationCheckboxClickHandler).toBeCalled();
    expect(mockMetrics[0].isSelected).toBe(false);
    expect(mockLocations[0].isSelected).toBe(false);
  });
});
