import React from "react";
import {Provider} from "react-redux";
import {render} from "@testing-library/react";
import configureStore from "redux-mock-store";
import {mockStats} from "../../test-mocks";
import DataTable from "./data-table";

const mockStore = configureStore({});
const store = {
  DATA: {
    farmsStats: mockStats,
  },
};

it(`DataTable renders correctly`, () => {
  const {container} = render(
      <Provider store={mockStore(store)}>
        <DataTable
          data={mockStats}
        />
      </Provider>
  );

  expect(container).toMatchSnapshot();
});
