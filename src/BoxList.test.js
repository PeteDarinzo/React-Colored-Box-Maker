import React from "react";
import { render, fireEvent, getByLabelText } from '@testing-library/react';
import BoxList from './BoxList';


it("renders a box list without crashing", () => {
  render(<BoxList />);
});

it("matches the box list snapshot", () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("should add a new box", () => {
  const { queryByText, getByLabelText, getByTestId } = render(<BoxList />);

  const heightInput = getByLabelText("Height (pixels)");
  const widthInput = getByLabelText("Width (pixels)");
  const colorInput = getByLabelText("Color");
  const btn = queryByText("Add Box");

  fireEvent.change(heightInput, { target: { value: 100 } });
  fireEvent.change(widthInput, { target: { value: 100 } });
  fireEvent.change(colorInput, { target: { value: "#0000ff" } });
  fireEvent.click(btn);

  const removeBtn = queryByText('X');

  // select the remove button for the blue box
  const blueBox = getByTestId("#0000ff");
  expect(blueBox).toBeInTheDocument();

  // test that box is removed
  fireEvent.click(removeBtn);
  expect(blueBox).not.toBeInTheDocument();

  // test that boxes of differing size and color can be added
  fireEvent.change(heightInput, { target: { value: 200 } });
  fireEvent.change(widthInput, { target: { value: 200 } });
  fireEvent.change(colorInput, { target: { value: "#00ff00" } });
  fireEvent.click(btn);

  const greenBox = getByTestId("#00ff00");
  expect(greenBox).toBeInTheDocument();

  fireEvent.change(heightInput, { target: { value: 50 } });
  fireEvent.change(widthInput, { target: { value: 50 } });
  fireEvent.change(colorInput, { target: { value: "#ff0000" } });
  fireEvent.click(btn);

  const redBox = getByTestId("#ff0000");
  expect(redBox).toBeInTheDocument();

});