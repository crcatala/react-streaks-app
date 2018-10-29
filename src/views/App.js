import React, { Component } from "react";
import styles from "./App.module.scss";
import HabitList from "../components/HabitList";
import Navigation from "../components/Navigation";
import SettingsControls from "../components/SettingsControls";
import TransitionFromLeft from "../components/transitions/TransitionFromLeft";
import { rootStore } from "../store";
import { observer } from "mobx-react";

class App extends Component {
  openSettings = () => {
    rootStore.settingsControlsToggle();
  };

  closeSettings = () => {
    rootStore.settingsControlsToggle();
  };

  render() {
    return (
      <div className="App">
        <div className={styles.listWrapper}>
          <HabitList
            list={rootStore.habits}
            editing={rootStore.settingsControlsVisible}
          />
        </div>
        <Navigation onSettingsClicked={this.openSettings} />
        <TransitionFromLeft in={rootStore.settingsControlsVisible}>
          <SettingsControls
            onClose={this.closeSettings}
            themes={rootStore.themeCollections}
          />
        </TransitionFromLeft>
        <div id="modal-root" />
      </div>
    );
  }
}

export default observer(App);
