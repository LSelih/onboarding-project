import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import DropdownButton from "../DropdownButton/DropdownButton";

describe("DropdownButton", () => {
  const text = "EN";
  it("renders successfully", () => {
    render(<DropdownButton btnText={text} />);
  });

  it("displays the dropdown menu", (done) => {
    const handleClick = () => {
      done();
    };
    render(<DropdownButton btnText={text} handleClick={handleClick} />);

    fireEvent.click(screen.getByTestId("dropdownbtn"), () => {
      let dropdown = findByTestId("dropdown");
      expect(dropdown).toBeInTheDocument();
    });
  });

  it("hides the dropdown menu", (done) => {
    const handleClick = () => {
      done();
    };

    render(<DropdownButton btnText={text} handleClick={handleClick} />);

    fireEvent.click(screen.getByTestId("dropdownbtn"), () => {
      expect(queryByTestId("dropdown")).not.toBeInTheDocument();
    });
  });
});
