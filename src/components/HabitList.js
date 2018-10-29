import React, { Component } from "react";
import styles from "./HabitList.module.scss";
import Habit from "./Habit";
import AddHabit from "./AddHabit";
import Modal from "./Modal";
import AddHabitForm from "./AddHabitForm";
import { rootStore } from "../store";
import { observer } from "mobx-react";

class HabitList extends Component {
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

  addHabit = value => {
    rootStore.addHabit(value);
    this.closeAddHabitModal();
  };

  shouldShowAddButton = () => {
    return this.props.editing || this.props.list.length < 6;
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
        {this.shouldShowAddButton() ? (
          <div className={styles.item}>
            <AddHabit onComplete={this.openAddHabitModal} />
          </div>
        ) : null}
        <Modal
          visible={this.state.addHabitModalOpen}
          onClose={this.closeAddHabitModal}
        >
          <AddHabitForm onSubmit={this.addHabit} />
        </Modal>
      </div>
    );
  }
}

export default observer(HabitList);
