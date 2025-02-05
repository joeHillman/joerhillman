// import React from "react";
import ReactDOM from "react-dom";
import { ReactPortal } from "./Modal.interface";

const AppRoot = document.getElementById("root") as HTMLElement;

const ReactPortal = (props: ReactPortal) => {
  return (
    ReactDOM.createPortal(props.children, AppRoot)
  );
}

export default ReactPortal;