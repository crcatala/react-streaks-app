import React, { PureComponent } from "react";
import styles from "./ThemeControls.module.scss";
import ThemeItem from "./ThemItem";

export default class ThemeControls extends PureComponent {
  //
  render() {
    return (
      <div className={styles.ThemeControls}>
        <div className={styles.item}>
          <ThemeItem />
        </div>
        <div className={styles.item}>
          <ThemeItem primaryColor="#C0D27F" />
        </div>
        <div className={styles.item}>
          <ThemeItem primaryColor="#49ADE1" />
        </div>
        <div className={styles.item}>
          <ThemeItem primaryColor="#CC4D4F" />
        </div>
        <div className={styles.item}>
          <ThemeItem primaryColor="#D27AB8" />
        </div>
      </div>
    );
  }
}
