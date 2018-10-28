import React, { PureComponent } from "react";
import styles from "./ThemeControls.module.scss";
import ThemeItem from "./ThemItem";

export default class ThemeControls extends PureComponent {
  static defaultProps = {
    themes: [], // { primaryColor, selected }
    onSelect: function() {}
  };
  render() {
    const { themes } = this.props;

    return (
      <div className={styles.ThemeControls}>
        {themes.map(theme => {
          return (
            <div className={styles.item} key={theme.name}>
              <ThemeItem
                primaryColor={theme.primaryColor}
                selected={theme.selected}
                onClick={() => this.props.onSelect(theme)}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
