import React, { PureComponent } from "react";
import styles from "./Modal.module.scss";
import ModalPortal from "./ModalPortal";

export default class Modal extends PureComponent {
  static defaultProps = {
    onClose: function() {}
  };

  render() {
    return (
      <ModalPortal>
        <div className={styles.Modal}>
          <div className={styles.dialog} role="document">
            <div className={styles.content}>{this.props.children}</div>
          </div>
          <div className={styles.backdrop} onClick={this.props.onClose} />
        </div>
      </ModalPortal>
    );
  }
}
