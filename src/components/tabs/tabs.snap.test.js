import React from "react";
import {Provider} from "react-redux";
import {render} from "@testing-library/react";
import configureStore from "redux-mock-store";
import {TabType} from "../../const";
import {Tabs} from "./tabs";

const mockStore = configureStore({});
const store = {
  VIEW: {
    activeTab: TabType.TABLE,
  }
};

it(`Tabs list renders correctly`, () => {
  const {container} = render(
      <Provider store={mockStore(store)}>
        <Tabs
          activeTab={TabType.TABLE}
          onSetActiveTab={jest.fn()}
        />
      </Provider>
  );

  expect(container).toMatchSnapshot();
});
