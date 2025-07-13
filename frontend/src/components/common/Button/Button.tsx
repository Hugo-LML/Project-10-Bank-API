import clsx from 'clsx';
import { ButtonHTMLAttributes, FC } from 'react';

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ type = 'button', className = '', children, ...props }) => {
  return (
    <button type={type} className={clsx('bg-green p-2.5 text-white font-bold box-border', className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
