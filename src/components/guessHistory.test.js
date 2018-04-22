import React from "react";
import { shallow, mount } from "enzyme";
import GuessHistory from "./guessHistory";

describe("<GuessHistory />", () => {
  it("should mount without crashing", () => {
    shallow(<GuessHistory history={[]} />);
  });
});
