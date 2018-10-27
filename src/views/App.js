import React, { Component } from "react";
import HabitList from "../components/HabitList";
import AppTheme from "../components/AppTheme";
import Navigation from "../components/Navigation";
import SettingsControls from "../components/SettingsControls";
import TransitionFromLeft from "../components/transitions/TransitionFromLeft";
import { rootStore } from "../store";
import { observer } from "mobx-react";

class App extends Component {
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
        <div style={{ display: "flex", justifyContent: "center" }}>
          <HabitList
            list={rootStore.habits}
            editing={rootStore.settingsControlsVisible}
          />
        </div>
        <Navigation onSettingsClicked={this.openSettings.bind(this)} />
        <TransitionFromLeft in={rootStore.settingsControlsVisible}>
          <SettingsControls onClose={this.closeSettings.bind(this)} />
        </TransitionFromLeft>
        <AppTheme />
      </div>
    );
  }
}

export default observer(App);
