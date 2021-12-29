import React from "react";
import {render, screen} from "@testing-library/react";
import Header from "./header";

it(`Header renders correctly`, () => {
  render(
    <Header />
  );
  const headerElement = screen.getByText(`Solita Farms Statistics`);

  expect(headerElement).toBeInTheDocument();
});
