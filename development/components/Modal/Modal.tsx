import React, { useState, useEffect } from "react";
import { bool, func, string } from "prop-types";
import Button from "../Button/Button";
import  { ModalInterface } from "./Modal.interface";

const Modal = (props: ModalInterface) => {
  const [modalIsOpen, toggleOpenModal] = useState(false);

  const toggleOpen = () => {
    toggleOpenModal(!modalIsOpen);
  }

  const handleOpen = () => {
    toggleOpen();
    if(props.handleOpen){
      props.handleOpen();
    }
  }

  const handleBackDrop = () => {
    toggleOpen();
    if(props.handleBackDrop){
      props.handleBackDrop();
    }
  }

  const handleCancel = () => {
    toggleOpen();
    if(props.handleCancel){
      props.handleCancel();
    }
  }

  const lastModalStep = () => {
    if(props.confirmModal){
      props.confirmModal();
    }
    toggleOpen();
  }

  useEffect(() => {
    if(props.openWithScript) {
      toggleOpen()
    }
  }, [props.openWithScript])
  
  const modalContent = () => {
    return (
      <div className="c-modal__container">
        <div className="c-modal__backdrop" onClick={handleBackDrop}></div>
        <div className="c-modal__content">
          {props.heading ?
            <div className="c-modal__title">
              <h3 className="c-modal__heading">{props.heading}</h3>
            </div>
            : null
          }
          <p className="c-modal__body">
            {props.bodyString ? props.bodyString : props.children}
          </p>
          <div className="c-modal__buttons">
            <Button label={props.cancelString || "Cancel"} onClick={handleCancel}/>
            {!props.onlyNotify ?
              <Button primaryStyle label={props.confirmString || "Confirm"} onClick={lastModalStep}/>
              : null
            }
          </div>
        </div>
      </div>
    )
  };

  return (
    <div className={`c-modal ${props.useOpenScript ? "c-modal--use-script" : ""} ${props.modalClasses}`}>
      <Button primaryStyle classes="open-modal" label={props.openLabel} onClick={handleOpen}/>
      {modalIsOpen === true ? modalContent() : null}
    </div>
  )
}

Modal.propTypes = {
  bodyString: string,
  cancelString: string,
  confirmModal: func,
  confirmString: string,
  handleBackDrop: func,
  handleCancel: func,
  heading: string,
  modalClasses: string,
  onlyNotify: bool,
  openLabel: string,
  openWithScript: bool,
  useOpenScript: bool
}

export default Modal;