import React, { Component } from "react";
import Display from "./Display";

class Dashboard extends Component {
  state = {
    strikes: 0,
    balls: 0,
    fouls: 0,
    hits: 0
  };
  render() {
    return (
      <div className="Dashboard">
        <button onClick={this.strike} />
        <button onClick={this.ball} />
        <button onClick={this.foul} />
        <button onClick={this.hit} />
        <Display state={this.state} />
      </div>
    );
  }
  strike = e => {};
  ball = e => {};
  foul = e => {};
  hit = e => {};
}

export default Dashboard;
