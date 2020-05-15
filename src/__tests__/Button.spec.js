import React from "react";
import { create } from "react-test-renderer";

// function Button(props) {
//     return <button>Nothing to do for now</button>;
//   }

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(() => {
      return { text: "PROCEED TO CHECKOUT" };
    });
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.text || this.props.text}
      </button>
    );
  }
}

describe("Button component", () => {
  // test("Matches the snapshot", () => {
  //   const button = create(<Button />);
  //   expect(button.toJSON()).toMatchSnapshot();
  // });

  test("it shows the expected text when clicked (testing the wrong way!)", () => {
    const component = create(<Button text="SUBSCRIBE TO BASIC" />);
    const instance = component.getInstance();
    expect(instance.state.text).toBe("");
    instance.handleClick();
    expect(instance.state.text).toBe("PROCEED TO CHECKOUT");
  });

  test("it shows the expected text when clicked (testing the right way!)", () => {
    const component = create(<Button text="SUBSCRIBE TO BASIC" />);
    const instance = component.root;
    const button = instance.findByType("button");
    button.props.onClick();
    expect(button.props.children).toBe("PROCEED TO CHECKOUT");
  });
});