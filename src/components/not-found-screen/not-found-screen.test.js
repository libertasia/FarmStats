import React from "react";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";
import {render, screen} from "@testing-library/react";
import NotFoundScreen from "./not-found-screen";

it(`NotFoundScreen renders correctly`, () => {
  const history = createMemoryHistory();
  render(
    <Router navigator={history} location={history.location}>
      <NotFoundScreen />
    </Router>
  );
  const headerElement = screen.getByText(`404 Page Not Found`);
  const linkElement = screen.getByText(`We couldn't find the content. Please return to Main Page`);

  expect(headerElement).toBeInTheDocument();
  expect(linkElement).toBeInTheDocument();
});
