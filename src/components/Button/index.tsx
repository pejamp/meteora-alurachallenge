import React from 'react'
import styles from './Button.module.scss';

interface ButtonProps {
  children: string;
}

export function Button({ children }: ButtonProps) {
  return (
    <button className={styles.button}>
      {children}
    </button>
  )
}
