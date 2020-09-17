import React from 'react';
import App from "./App";
import EnzymeAdapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import * as enzyme from "enzyme";
import { render, fireEvent, screen } from "@testing-library/react";

enzyme.configure({ adapter: new EnzymeAdapter() });

it('renders without crashing: Enzyme', () => {
  const wrapper = enzyme.mount(
    <App items={[{ name: "one" }]} />,
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});


test("Given CanEdit is false then edit button is not shown", () => {
  const { container, unmount } = render(<App items={[{ name: "one" }]} />);
  expect(container).toMatchSnapshot();
  unmount();
});

// use either enzyme or react testing library

describe('Question 4', () => {
  it('clicking on the button updates the message tag with the buttonValue', () => {
    const buttonValue = 'button value';

    render(<App items={[{ name: buttonValue }]} />);
    
    expect(screen.getByTestId('message').textContent).toBe('none');

    fireEvent.click(screen.getByText(buttonValue));

    expect(screen.getByTestId('message').textContent).toBe(buttonValue);
  });
});