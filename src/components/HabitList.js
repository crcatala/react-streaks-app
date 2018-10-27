import PropTypes from "prop-types";
import React from "react";
import Habit from "./Habit";
import styles from "./HabitList.module.scss";
import { rootStore } from "../store";
import { observer } from "mobx-react";

const HabitList = ({ list = [] }) => {
  return (
    <div className={styles.list}>
      {list.map(x => {
        return (
          <div className={styles.item} key={x.id}>
            <Habit name={x.name} editing={rootStore.settingsControlsVisible} />
          </div>
        );
      })}
    </div>
  );
};

HabitList.propTypes = {
  message: PropTypes.string
};

export default observer(HabitList);
