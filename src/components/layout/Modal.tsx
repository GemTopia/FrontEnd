import React, { Fragment } from "react";
import ReactDom from "react-dom";
import styles from "./Modal.module.css";

const Backdrop: React.FC<{ onClick: Function }> = (props) => {
  const clickHandler = () => {
    props.onClick();
  };
  return <div className={styles.backdrop} onClick={clickHandler}></div>;
};
const ModalOverlay: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};
const Modal: React.FC<{ cancel: Function; children: React.ReactNode }> = (
  props
) => {
  const backdrop = document.getElementById("backdrop");
  const modal = document.getElementById("modal");
  return (
    <Fragment>
      {backdrop &&
        ReactDom.createPortal(<Backdrop onClick={props.cancel} />, backdrop)}
      {modal &&
        ReactDom.createPortal(
          <ModalOverlay>{props.children}</ModalOverlay>,
          modal
        )}
    </Fragment>
  );
};

export default Modal;
