import React, { useState, Component } from "react";
import PropTypes, { func, string } from "prop-types";
import Button from "../Button/Button";
import ReactPortal from "./ReactPortal";
import { ModalPortal } from "./Modal.interface";
import { ButtonInterface } from "../Button/Button.interface";

const ModalPortal = (props: ModalPortal) => {
  const [modalIsOpen, toggleOpenModal] = useState(false);
  const [isLastModalStep, toggleLastModalStep] = useState(false);

  const toggleOpen = () => {
    toggleOpenModal(!modalIsOpen)
  }

  const lastModalStep = () => {
    props.confirmModal();
    toggleOpen();
  }

  let { bodyString, children, heading, openLabel } = props;

  const modalContent = () => {
    return (
      <div className="c-modal__container">
        <div className="c-modal__backdrop" onClick={toggleOpen}></div>
        <div className="c-modal__content">
          {heading ?
            <div className="c-modal__title">
              <h3 className="c-modal__heading">{heading}</h3>
            </div>
            : null
          }
          <p className="c-modal__body">
            {bodyString ? bodyString : children}
          </p>
          <div className="c-modal__buttons">
            <Button label="Cancel" onClick={toggleOpen}/>
            <Button primaryStyle label="Proceed" onClick={lastModalStep}/>
          </div>
        </div>
      </div>
    )
  };

  return (
    <div>
      <Button primaryStyle label={openLabel} onClick={toggleOpen}/>
      {modalIsOpen === true ? <ReactPortal>{modalContent()}</ReactPortal> : null}
    </div>
  );
}




ModalPortal.propTypes = {
  bodyString: string,
  confirmModal: func,
  heading: string,
  openLabel: string
}

export default ModalPortal;