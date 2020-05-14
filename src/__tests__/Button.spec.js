import React from "react";
import { create } from "react-test-renderer";
// import TestRenderer from "react-test-renderer";

function Button(props) {
    return <button>Nothing to do for now</button>;
  }
  
describe("Button component", () => {
  test("Matches the snapshot", () => {
    const button = create(<Button />);
    // const button = TestRenderer.create(<Button />);
    expect(button.toJSON()).toMatchSnapshot();
  });
});