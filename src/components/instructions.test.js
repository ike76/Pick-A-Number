import React from "react";
import { shallow, mount } from "enzyme";
import Instructions from "./instructions";

describe("<Instructions />", () => {
  it("shalt mount without crashing", () => {
    shallow(<Instructions />);
  });
  it("should render button if finished", () => {
    const wrapper = shallow(<Instructions finished={true} />);
    expect(wrapper.find("button").html()).toMatch("Try Again");
  });
  it("should render instructions if still playing", () => {
    const message = "hey whats up";
    const wrapper = shallow(
      <Instructions finished={false} message={message} />
    );
    expect(wrapper.find("h2").html()).toMatch(message);
  });
});
