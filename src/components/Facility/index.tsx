import React from 'react'
import styles from './Facility.module.scss';

interface FacilityProps {
  icon: string;
  title: string;
  text: string;
}

export function Facility({ icon, title, text }: FacilityProps) {
  return (
    <li className={styles.item}>
      <img className={styles.item__icon} src={icon} alt="" />
      <div className={styles.item__content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{text}</p>
      </div>
    </li>
  )
}
