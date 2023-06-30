import React, { ReactNode } from 'react'
import styles from './Section.module.scss';

interface SectionProps {
  title: string;
  children?: ReactNode;
}

export function Section({ title, children }: SectionProps) {
  return (
    <section className={styles.container}>
      <h3 className={styles.section__title}>{title}</h3>
      {children}
    </section>
  )
}
