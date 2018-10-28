import React, { Component } from "react";
import styles from "./SettingsControls.module.scss";
import { ReactComponent as Cross } from "../assets/icons/Cross.svg";
import ThemeControls from "./ThemeControls";
import { rootStore } from "../store";

class SettingsControls extends Component {
  static defaultProps = {
    themes: [] // { primaryColor, selected }
  };

  onSelect = theme => {
    console.log("onSelect", theme);
    rootStore.selectNextTheme({ collection: theme.name });
  };

  render() {
    const { themes } = this.props;

    return (
      <div className={styles.SettingsControls}>
        <Cross onClick={this.props.onClose} className={styles.close} />
        <ThemeControls themes={themes} onSelect={this.onSelect} />
      </div>
    );
  }

  componentDidMount() {
    // setTheme(ORANGE_THEME);
    // setTheme(ORANGE_LIGHT_THEME);
  }
}

export default SettingsControls;
