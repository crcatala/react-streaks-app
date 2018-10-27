import React, { PureComponent } from "react";
import styles from "./AddHabitForm.module.scss";

class AddHabitForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  static defaultProps = {
    onSubmit: function() {}
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  submit = () => {
    if (this.state.value) {
      this.props.onSubmit(this.state.value);
    }
  };

  onKeyUp = e => {
    if (e.key === "Enter") {
      this.submit();
    }
  };

  render() {
    return (
      <div className={styles.AddHabitForm}>
        <div className={styles.title}>Add Habit</div>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            className={styles.input}
            value={this.state.value}
            onChange={this.handleChange}
            onKeyUp={this.onKeyUp}
          />
        </div>
        <button
          type="button"
          className={styles.addButton}
          onClick={this.submit}
        >
          Add
        </button>
      </div>
    );
  }
}

export default AddHabitForm;
