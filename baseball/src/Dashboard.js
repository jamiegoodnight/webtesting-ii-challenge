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
  strike = e => {
    if (this.state.strikes < 3) {
      this.setState({
        ...state,
        strikes: this.state.strikes + 1
      });
    } else {
      this.setState({
        ...state,
        strikes: 0,
        balls: 0
      });
    }
  };
  ball = e => {
    if (this.state.balls < 4) {
      this.setState({
        ...state,
        balls: this.state.balls + 1
      });
    } else {
      this.setState({
        ...state,
        strikes: 0,
        balls: 0
      });
    }
  };
  foul = e => {
    if (this.state.strikes === 0 || 1) {
      this.setState({
        ...state,
        strikes: this.state.strikes + 1,
        fouls: this.state.fouls + 1
      });
    } else {
      this.setState({
        ...state,
        fouls: this.state.fouls + 1
      });
    }
  };
  hit = e => {
    this.setState({
      ...state,
      hits: this.state.hits + 1
    });
  };
}

export default Dashboard;
