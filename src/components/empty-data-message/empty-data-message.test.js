import React from "react";
import {render, screen} from "@testing-library/react";
import EmptyDataMessage from "./empty-data-message";

it(`EmptyDataMessage renders correctly`, () => {
  render(
    <EmptyDataMessage />
  );
  const textElement = screen.getByText(`No data found for selected filters. Try changing your selection.`);

  expect(textElement).toBeInTheDocument();
});
