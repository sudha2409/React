import { render,screen } from "@testing-library/react";
import Contact from "../ContactUs";
import "@testing-library/jest-dom";

test('should load Contact Us component', () => {

    render(<Contact/>)

    const heading = screen.getAllByRole("heading");

    //Assertion
    
});
