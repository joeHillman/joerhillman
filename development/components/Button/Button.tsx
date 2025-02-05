import React from "react";
import classNames from "classnames";
import {bool, func, string} from "prop-types";
import { ButtonInterface } from "./Button.interface";

const Button = ({ ariaLabel, classes, disabled, label, onClick, primaryStyle, submitButton }: ButtonInterface) => {
  let buttonClasses: string[] = ["button"];
  let buttonType: "button" | "submit" | "reset" | undefined;

  if( !submitButton ) {
    buttonType = "button"
  } else {
    buttonType = "submit"
  }

  if( primaryStyle ) {
    buttonClasses.push("button-primary")
  }

  return (
    <button
      aria-label={ariaLabel || label}
      className={classNames([buttonClasses, classes])}
      disabled={disabled}
      onClick={onClick}
      type={buttonType}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  // ariaLabel as option if label is not descriptive enough for AT
  ariaLabel: string,
  classes: string,
  disabled: bool,
  label: string.isRequired,
  onClick: func,
  primaryStyle: bool,
  submitButton: bool
}

export default Button;