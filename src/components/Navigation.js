import React, { PureComponent } from "react";
import styles from "./Navigation.module.scss";
import { ReactComponent as Settings } from "../assets/icons/Settings.svg";

export default class Navigation extends PureComponent {
  settingsClicked() {
    // console.log("settingsClicked");
    // rootStore.settingsControlsToggle();
    this.props.onSettingsClicked();
  }

  render() {
    return (
      <div className={styles.Navigation}>
        <Settings
          onClick={this.settingsClicked.bind(this)}
          className={styles.settings}
        />
      </div>
    );
  }
}
