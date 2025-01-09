import { DOMElement } from "react";

export interface ModalInterface {
  bodyString: string;
  cancelString: string;
  children: React.ReactNode;
  confirmModal: () => {};
  confirmString: string;
  handleBackDrop: () => {};
  handleCancel: () => {};
  handleOpen: () => {};
  heading: string;
  modalClasses: String[];
  onlyNotify: boolean;
  openLabel: string;
  openWithScript: boolean;
  useOpenScript: boolean;
}

export interface ReactPortal {
  AppRoot: NodeList;
  children: React.ReactNode;
}

export interface ModalPortal {
  bodyString: string;
  children: React.ReactNode;
  confirmModal: () => {};
  heading: string;
  openLabel: string;
}