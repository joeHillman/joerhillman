import React from "react";
import classNames from "classnames";
import {bool, func, string} from "prop-types";
import { ButtonInterface } from "./Button.interface";
import './Button.scss';

const Button = ({ classes, disabled, label, onClick, primaryStyle, submitButton }: ButtonInterface) => {
  let buttonClasses: string[] = ["pure-button"];
  let buttonType: "button" | "submit" | "reset" | undefined;

  if( !submitButton ) {
    buttonType = "button"
  } else {
    buttonType = "submit"
  }

  if( primaryStyle ) {
    buttonClasses.push("pure-button-primary")
  }

  return (
    <button className={classNames([buttonClasses, classes])} type={buttonType} onClick={onClick} disabled={disabled}>{label}</button>
  );
}

Button.propTypes = {
  classes: string,
  disabled: bool,
  label: string.isRequired,
  onClick: func,
  primaryStyle: bool,
  submitButton: bool
}

export default Button;