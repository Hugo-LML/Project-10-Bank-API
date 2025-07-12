import { FC, InputHTMLAttributes } from 'react';
import clsx from 'clsx';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  labelClassName?: string;
  inputClassName?: string;
}

const Input: FC<InputProps> = ({ id, label, type = 'text', labelClassName = '', inputClassName = '' }) => {
  return (
    <>
      <label htmlFor={id} className={clsx('block font-bold', labelClassName)}>
        {label}
      </label>
      <input type={type} id={id} className={clsx('block w-full rounded-sm border border-black p-[5px] text-xl', inputClassName)} />
    </>
  );
};

export default Input;
