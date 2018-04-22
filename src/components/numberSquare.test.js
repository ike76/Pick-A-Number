import React from "react";
import { shallow } from "enzyme";
import NumberSquare from "./numberSquare";

describe("<NumberSquare />", () => {
  it("shall mount without crashing", () => {
    shallow(<NumberSquare />);
  });
  it("should display the number", () => {
    const number = "42";
    const wrapper = shallow(<NumberSquare number={number} />);
    expect(wrapper.find("div").html()).toMatch(number);
  });
});
