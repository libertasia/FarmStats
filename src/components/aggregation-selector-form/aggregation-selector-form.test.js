import React from "react";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {AggregationType} from "../../const";
import {AggregationSelectorForm} from "./aggregation-selector-form";

const mockStore = configureStore({});
const store = {
  VIEW: {
    activeAggregation: AggregationType.AVERAGE,
  }
};

describe(`Aggregation Selector Form`, () => {
  it(`renders correctly`, () => {
    render(
        <Provider store={mockStore(store)}>
          <AggregationSelectorForm
            activeAggregation={AggregationType.AVERAGE}
            onAggregationTypeClick={jest.fn()}
          />
        </Provider>
    );

    expect(screen.getByText(/Select an aggregation option:/i)).toBeInTheDocument();
    expect(screen.getByTestId(AggregationType.AVERAGE)).toBeInTheDocument();
    expect(screen.getByTestId(AggregationType.MEDIAN)).toBeInTheDocument();
    expect(screen.getByTestId(AggregationType.DEVIATION)).toBeInTheDocument();
  });
  it(`works correctly when radio button is clicked`, () => {
    let activeAggregation = AggregationType.AVERAGE;
    const aggregationTypeBtnClickHandler = jest.fn();
    aggregationTypeBtnClickHandler.mockImplementation(
        () => (activeAggregation = AggregationType.MEDIAN)
    );

    render(
        <Provider store={mockStore(store)}>
          <AggregationSelectorForm
            activeAggregation={AggregationType.AVERAGE}
            onAggregationTypeClick={aggregationTypeBtnClickHandler}
          />
        </Provider>
    );

    userEvent.click(screen.getByTestId(AggregationType.MEDIAN));
    expect(aggregationTypeBtnClickHandler).toBeCalled();
    expect(activeAggregation).toBe(AggregationType.MEDIAN);
  });
});
