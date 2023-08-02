import { ReactNode } from 'react'
import styles from './Modal.module.scss';
import { ReactComponent as CheckCircle } from 'src/assets/check-circle (1).svg'
import { ReactComponent as CloseModal } from 'src/assets/close-modal.svg'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function Modal({ children, isOpen = false, onClose }: ModalProps) {
  return (
    <div className={`${styles.overlay} ${isOpen ? styles.overlay__active : ''}`}>
      <dialog className={styles.container} open={isOpen} onClose={onClose}>
        <div className={styles.header}>
          <CheckCircle className={styles.header__check} />
          <p className={styles.header__title}>Confira detalhes sobre o produto</p>
          <button className={styles.header__btn} onClick={onClose}>
            <CloseModal />
          </button>
        </div>
        <div className={styles.content}>
          {children}
        </div>
      </dialog>
    </div>
  )
}
