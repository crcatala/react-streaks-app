import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import styles from "./ModalPortal.module.scss";

export default class Modal extends PureComponent {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
    this.el.className = styles.ModalPortal;
  }

  componentDidMount() {
    this.modalRoot = document.getElementById("modal-root");
    this.modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    this.modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}
