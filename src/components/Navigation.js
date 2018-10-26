import React, { PureComponent } from "react";
import styles from "./Navigation.module.scss";
// import { rootStore } from "../store";

export default class Navigation extends PureComponent {
  settingsClicked() {
    // console.log("settingsClicked");
    // rootStore.settingsControlsToggle();
    this.props.onSettingsClicked();
  }

  render() {
    return (
      <div className={styles.Navigation}>
        <div onClick={this.settingsClicked.bind(this)}>Settings</div>
        <div>TimeOfDayToggle</div>
        <div>Stats</div>
      </div>
    );
  }
}
