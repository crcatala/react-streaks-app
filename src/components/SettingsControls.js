import React, { PureComponent } from "react";

import styles from "./SettingsControls.module.scss";

export default class SettingsControls extends PureComponent {
  render() {
    return (
      <div className={styles.SettingsControls} onClick={this.props.onClick}>
        <div>
          SettingsControls
          <span onClick={this.props.onClose}>X</span>
        </div>
      </div>
    );
  }
}
