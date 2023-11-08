import { ButtonHTMLAttributes, ReactNode } from 'react';
import classes from './Button.module.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

function Button({ children, ...attributes }: Props) {
  return (
    <button className={classes.button} {...attributes}>
      {children}
    </button>
  );
}

export default Button;
