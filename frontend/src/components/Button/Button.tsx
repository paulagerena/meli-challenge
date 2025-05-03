import { FC, JSX } from 'react';
import './Button.scss';

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
}

const Button: FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  variant = 'primary'
}): JSX.Element => {
  return (
    <button className={`button button--${variant}`} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
