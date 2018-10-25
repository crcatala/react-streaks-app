import React, { Component } from "react";
import HabitList from "../components/HabitList";
import AppTheme from "../components/AppTheme";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      habits: [
        { id: 1, name: "Gratitude" },
        { id: 2, name: "Meditate" },
        { id: 3, name: "Vision Board" },
        { id: 4, name: "Brew Coffee" },
        { id: 5, name: "Walk" }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <HabitList list={this.state.habits} />
        </div>
        <AppTheme />
      </div>
    );
  }
}

export default App;
