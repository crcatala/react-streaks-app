import PropTypes from "prop-types";
import React from "react";
import Habit from "./Habit";
import AddHabit from "./AddHabit";
import styles from "./HabitList.module.scss";
import { observer } from "mobx-react";

function addHabitPrompt() {
  console.log("addHabitPrompt");
}
const HabitList = ({ list = [], editing = false }) => {
  return (
    <div className={styles.list}>
      {list.map(x => {
        return (
          <div className={styles.item} key={x.id}>
            <Habit name={x.name} editing={editing} />
          </div>
        );
      })}
      {editing ? (
        <div className={styles.item}>
          <AddHabit onComplete={addHabitPrompt} />
        </div>
      ) : null}
    </div>
  );
};

HabitList.propTypes = {
  message: PropTypes.string
};

export default observer(HabitList);
