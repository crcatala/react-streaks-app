import React, { Component } from "react";
import HabitList from "../components/HabitList";
import AppTheme from "../components/AppTheme";
import Navigation from "../components/Navigation";
import SettingsControls from "../components/SettingsControls";
import TransitionFromLeft from "../components/transitions/TransitionFromLeft";
import ThemeControls from "../components/ThemeControls";
import { rootStore } from "../store";
import { observer } from "mobx-react";

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

  openSettings() {
    console.log("openSettings");
    rootStore.settingsControlsToggle();
  }

  closeSettings() {
    rootStore.settingsControlsToggle();
  }

  render() {
    return (
      <div className="App">
        <div onClick={this.openSettings}>testttinnggggg</div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <HabitList list={this.state.habits} />
        </div>
        <Navigation onSettingsClicked={this.openSettings.bind(this)} />
        <TransitionFromLeft in={rootStore.settingsControlsVisible}>
          <SettingsControls onClose={this.closeSettings.bind(this)} />
        </TransitionFromLeft>
        {rootStore.themeControlsVisible && <ThemeControls />}
        <AppTheme />
      </div>
    );
  }
}

export default observer(App);
