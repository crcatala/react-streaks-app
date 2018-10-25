import PropTypes from "prop-types";
import React from "react";
import Habit from "./Habit";
import styles from "./HabitList.module.scss";

const HabitList = ({ list = [] }) => {
  return (
    <div className={styles.list}>
      {list.map(x => {
        return (
          <div className={styles.item} key={x.id}>
            <Habit name={x.name} />
          </div>
        );
      })}
    </div>
  );
};

HabitList.propTypes = {
  message: PropTypes.string
};

export default HabitList;
