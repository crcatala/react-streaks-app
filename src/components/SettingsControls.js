import React, { PureComponent } from "react";
import styles from "./SettingsControls.module.scss";
import { ReactComponent as Cross } from "../assets/icons/Cross.svg";
import { setTheme } from "./AppTheme";
import ThemeControls from "./ThemeControls";

const ORANGE_THEME = {
  "--bg-primary": "red"
};

const ORANGE_LIGHT_THEME = {
  "--bg-primary": "#fefefe",
  "--bg-secondary": "#fd7152",
  "--text-primary": "#fefefe",
  "--text-secondary": "#C9C9C9"
};

// const ORANGE_DARK_THEME = {
//   "--bg-primary": "#fd7152",
//   "--bg-secondary": "#fefefe",
//   "--text-primary": "#fefefe",
//   "--text-secondary": "#C9C9C9"
// };

export default class SettingsControls extends PureComponent {
  render() {
    return (
      <div className={styles.SettingsControls}>
        <Cross onClick={this.props.onClose} className={styles.close} />
        <ThemeControls />
      </div>
    );
  }

  componentDidMount() {
    // setTheme(ORANGE_THEME);
    setTheme(ORANGE_LIGHT_THEME);
  }
}
