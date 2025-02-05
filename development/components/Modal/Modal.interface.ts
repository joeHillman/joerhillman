import { DOMElement } from "react";

// handler functions will all return void
// // they don't return a value they just run another function or update state
export interface ModalInterface {
  bodyString: string;
  cancelString: string;
  children: React.ReactNode;
  confirmModal: () => void;
  confirmString: string;
  handleBackDrop: () => void;
  handleCancel: () => void;
  handleOpen: () => void;
  heading: string;
  modalClasses: String[];
  onlyNotify: boolean;
  openLabel: string;
  openWithScript: boolean;
  useOpenScript: boolean;
}

export interface ReactPortal {
  children: React.ReactNode;
}

export interface ModalPortal {
  bodyString: string;
  children: React.ReactNode;
  confirmModal: () => void;
  heading: string;
  lastModalStep: () => void;
  openLabel: string;
  toggleOpen: () => void;
}