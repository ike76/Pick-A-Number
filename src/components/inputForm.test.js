import React from "react";
import { shallow, mount } from "enzyme";
import InputForm from "./inputForm";

describe("<InputForm />", () => {
  it("should mount without crashing", () => {
    shallow(<InputForm />);
  });
});
