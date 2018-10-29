import React, { PureComponent } from "react";
import styles from "./Modal.module.scss";
import ModalPortal from "./ModalPortal";
import TransitionScaleFade from "../components/transitions/TransitionScaleFade";

export default class Modal extends PureComponent {
  static defaultProps = {
    visible: false,
    onClose: function() {}
  };

  render() {
    return (
      <ModalPortal>
        <TransitionScaleFade in={this.props.visible}>
          <div className={styles.Modal}>
            <div className={styles.dialog} role="document">
              <div className={styles.content}>{this.props.children}</div>
            </div>
            <div className={styles.backdrop} onClick={this.props.onClose} />
          </div>
        </TransitionScaleFade>
      </ModalPortal>
    );
  }
}
