import PropTypes from "prop-types";
import React from "react";
import Habit from "./Habit";

const HabitList = ({ list = [] }) => {
  return list.map(x => <Habit name={x.name} key={x.id} />);
};

HabitList.propTypes = {
  message: PropTypes.string
};

export default HabitList;
