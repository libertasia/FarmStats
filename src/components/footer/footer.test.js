import React from "react";
import {render, screen} from "@testing-library/react";
import Footer from "./footer";

it(`Footer renders correctly`, () => {
  render(
    <Footer />
  );
  const textElement = screen.getByText(`Copyright © 2021 Anastasiia Erokhina. All rights reserved.`);

  expect(textElement).toBeInTheDocument();
});
