import React from "react";
import { render, fireEvent } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';



it("renders a new box form without crashing", () => {
  render(<NewBoxForm
    addBox={() => null}
  />
  );
});

it("matches the new box form snapshot", () => {
  const { asFragment } = render(<NewBoxForm
    addBox={() => null}
  />
  );
  expect(asFragment()).toMatchSnapshot();
});


