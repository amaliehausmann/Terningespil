import styles from './Modal.module.scss';

export default function Modal({ isOpen, onClose,}) {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <button onClick={onClose} className={styles.closeButton}>X</button>
              
            </div>
        </div>
    );
}


