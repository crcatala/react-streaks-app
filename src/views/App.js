import React, { Component } from "react";
import "./App.css";
import HabitList from "../components/HabitList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      habits: [{ id: 1, name: "sup" }]
    };
  }

  render() {
    return (
      <div className="App">
        <div>Hello</div>
        <HabitList list={this.state.habits} />
      </div>
    );
  }
}

export default App;
