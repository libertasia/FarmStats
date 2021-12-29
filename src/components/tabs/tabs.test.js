import React from "react";
import {Provider} from "react-redux";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import configureStore from "redux-mock-store";
import {TabType} from "../../const";
import {Tabs} from "./tabs";

const mockStore = configureStore({});
const store = {
  VIEW: {
    activeTab: TabType.TABLE,
  }
};

it(`Click on Tab works`, () => {
  let activeTab = TabType.TABLE;
  const activeTabClickHandler = jest.fn();
  activeTabClickHandler.mockImplementation(
      () => (activeTab = TabType.GRAPHS)
  );
  render(
    <Provider store={mockStore(store)}>
      <Tabs
        activeTab={TabType.TABLE}
        onSetActiveTab={activeTabClickHandler}
      />
    </Provider>
  );

  userEvent.click(screen.getByText(TabType.GRAPHS));
  expect(activeTabClickHandler).toBeCalled();
  expect(activeTab).toBe(TabType.GRAPHS);
});
