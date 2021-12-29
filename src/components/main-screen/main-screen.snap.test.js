import React from "react";
import {Provider} from "react-redux";
import {render} from "@testing-library/react";
import configureStore from "redux-mock-store";
import {TabType} from "../../const";
import {MainScreen} from "./main-screen";
import {mockLocations, mockMetrics, mockStats} from "../../test-mocks";

const mockStore = configureStore({});
const store = {
  DATA: {
    farmsStats: mockStats,
  },
  VIEW: {
    activeTab: TabType.TABLE,
    locations: mockLocations,
    metrics: mockMetrics,
  }
};

it(`MainScreen renders correctly`, () => {
  const {container} = render(
      <Provider store={mockStore(store)}>
        <MainScreen
          activeTab={TabType.TABLE}
          isAllFarmsStatsLoaded={true}
          isAllFarmsLoaded={true}
          loadFarmsStats={jest.fn()}
          filteredStats={mockStats}
        />
      </Provider>
  );

  expect(container).toMatchSnapshot();
});
