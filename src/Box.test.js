import React from "react";
import { render, fireEvent } from '@testing-library/react';
import Box from './Box';



it("renders a box without crashing", () => {
  render(<Box
    height="100"
    width="100"
    color="#000000"
    id="1"
    deleteBox={() => null}
  />
  );
});

it("matches the box snapshot", () => {
  const { asFragment } = render(<Box
    height="100"
    width="100"
    color="#000000"
    id="1"
    deleteBox={() => null}
  />
  );
  expect(asFragment()).toMatchSnapshot();
});


