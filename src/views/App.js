import React, { Component } from "react";
import HabitList from "../components/HabitList";
import HoldableActionButton from "../components/HoldableActionButton";
import AppTheme from "../components/AppTheme";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      habits: [
        { id: 1, name: "Gratitude" },
        { id: 2, name: "Meditate" },
        { id: 3, name: "Vision Board" }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <HabitList list={this.state.habits} />
        <HoldableActionButton titleSlot={<div>Title</div>} />
        <HoldableActionButton />
        <AppTheme />
      </div>
    );
  }
}

export default App;
