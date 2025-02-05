export interface ButtonInterface {
  ariaLabel?: string;
  classes?: string;
  disabled?: boolean;
  label: string;
  onClick?: () => void;
  primaryStyle?: boolean
  submitButton?: boolean;
}
