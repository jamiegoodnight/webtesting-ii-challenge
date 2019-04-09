import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Dashboard from "./Dashboard";
import Display from "./Display";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

describe("<App />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders!", () => {
    render(<App />);
  });
  it("renders 'BASEBALL'", () => {
    const { getByText } = render(<App />);
    getByText(/BASEBALL/);
  });
});

describe("<Dashboard />", () => {
  it("renders!", () => {
    render(<Dashboard />);
  });
  it("renders 'STRIKE'", () => {
    const { getByText } = render(<App />);
    getByText(/STRIKE/);
  });
  it("fires hit function", () => {
    const { getByText } = render(<Dashboard />);
    const button = getByText(/HIT/);
    fireEvent.click(button);
  });
  it("fires hit function", () => {
    const { getByText } = render(<Dashboard />);
    const button = getByText(/HIT/);
    fireEvent.click(button);
  });
  it("fires hit function", () => {
    const { state, getByText } = render(<Dashboard />);
    const hits = this.state.hits;
    const button = getByText(/HIT/);
    fireEvent.click(button);
    expect(hits).toBe(1);
  });
});

describe("<Display />", () => {
  it("renders!", () => {
    render(<Display />);
  });
  it("renders the number of hits", () => {
    const { getByText } = render(<App />);
    getByText(/Hits: 0/);
  });
  it("renders the number of fouls", () => {
    const { getByText } = render(<App />);
    getByText(/Fouls: 0/);
  });
});
