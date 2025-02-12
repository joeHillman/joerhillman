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

  const {
    bodyString,
    cancelString,
    children,
    confirmString,
    heading,
    openLabel,
    modalClasses,
    modalDescribedBy,
    modalLabelledBy, 
    onlyNotify,
    useOpenScript
  } = props;

  const modalContent = () => {
    return (
      <div className="c-modal__container">
        <div className="c-modal__backdrop" onClick={handleBackDrop}></div>
        <div className="c-modal__content" aria-modal="true" aria-labelledby={modalLabelledBy} aria-describedby={modalDescribedBy}>
          {heading ?
            <div className="c-modal__title">
              <h3 className="c-modal__heading" id={modalLabelledBy}>{heading}</h3>
            </div>
            : null
          }
          <p className="c-modal__body" id={modalDescribedBy}>
            {bodyString ? bodyString : children}
          </p>
          <div className="c-modal__buttons">
            <Button label={cancelString || "Cancel"} onClick={handleCancel}/>
            {!onlyNotify ?
              <Button primaryStyle label={confirmString || "Confirm"} onClick={lastModalStep}/>
              : null
            }
          </div>
        </div>
      </div>
    )
  };

  return (
    <div className={`c-modal ${useOpenScript ? "c-modal--use-script" : ""} ${modalClasses}`}>
      <Button primaryStyle classes="open-modal" label={openLabel} onClick={handleOpen}/>
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
  modalDescribedBy: string,
  modalLabelledBy: string,
  modalClasses: string,
  onlyNotify: bool,
  openLabel: string,
  openWithScript: bool,
  useOpenScript: bool
}

export default Modal;