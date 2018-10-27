import React, { PureComponent } from "react";
import styles from "./SettingsControls.module.scss";
import { ReactComponent as Cross } from "../assets/icons/Cross.svg";
import ThemeControls from "./ThemeControls";

export default class SettingsControls extends PureComponent {
  render() {
    return (
      <div className={styles.SettingsControls}>
        <Cross onClick={this.props.onClose} className={styles.close} />
        <ThemeControls />
      </div>
    );
  }
}
