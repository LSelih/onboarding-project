import React from "react";
import {
  fireEvent,
  getAllByTestId,
  getByTestId,
  render,
  screen,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import DropdownButton from "../DropdownButton/DropdownButton";
import ActionLink from "./ActionLink";
import InputSelect from "../InputSelect/InputSelect";
import LanguageSelectDropdown from "../../molecules/LanguageSelectDropdown/LanguageSelectDropdown";

describe("ActionLink", () => {
  const text = "Reset options";
  it("renders successfully", () => {
    render(<ActionLink linkText={text} />);
  });

  //   it("Resets the language selections back to default (En - English)", (done) => {
  //     render(<LanguageSelectDropdown defaultLanguage />);
  //     fireEvent.click(screen.getByTestId("dropdownbtn"));
  //     fireEvent.change(screen.getByRole("select"), {
  //       target: { value: { code: "AA", name: "Afar" } },
  //     });
  //     fireEvent.click(screen.getByTestId("reset", { hidden: true }));
  //     expect(screen.getByText("English")).toBeInTheDocument();
  //   });
});
