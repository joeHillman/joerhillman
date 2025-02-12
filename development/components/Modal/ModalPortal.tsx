import React, { useState, Component } from "react";
import { func, string } from "prop-types";
import Button from "../Button/Button";
import ReactPortal from "./ReactPortal";
import { ModalPortal as ModalPortalProps } from "./Modal.interface";

const ModalPortal = (props: ModalPortalProps) => {
  const [modalIsOpen, toggleOpenModal] = useState(false);
  const [isLastModalStep, toggleLastModalStep] = useState(false);

  const toggleOpen = () => {
    toggleOpenModal(!modalIsOpen)
  }

  const lastModalStep = () => {
    props.confirmModal();
    toggleOpen();
  }

  const { bodyString, children, heading, openLabel, modalLabelledBy, modalDescribedBy } = props;

  const modalContent = () => {
    return (
      <div className="c-modal__container">
        <div className="c-modal__backdrop" onClick={toggleOpen}></div>
        <div className="c-modal__content" role="alertdialog" aria-modal="true" aria-labelledby={modalLabelledBy} aria-describedby={modalDescribedBy}>
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
  openLabel: string,
  modalLabelledBy: string,
  modalDescribedBy: string,
}

export default ModalPortal;