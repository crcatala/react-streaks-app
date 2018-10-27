import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import Habit from "./Habit";
import AddHabit from "./AddHabit";
import Modal from "./Modal";
import styles from "./HabitList.module.scss";
import { observer } from "mobx-react";

class HabitList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      addHabitModalOpen: false
    };
  }

  static defaultProps = {
    list: [],
    editing: false
  };

  openAddHabitModal = () => {
    this.setState({
      addHabitModalOpen: true
    });
  };

  closeAddHabitModal = () => {
    this.setState({
      addHabitModalOpen: false
    });
  };

  render() {
    const { list, editing } = this.props;

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
            <AddHabit onComplete={this.openAddHabitModal} />
          </div>
        ) : null}
        {this.state.addHabitModalOpen ? (
          <Modal onClose={this.closeAddHabitModal}>Test content of modal</Modal>
        ) : null}
      </div>
    );
  }
}

export default observer(HabitList);
