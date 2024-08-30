import styles from './CustomModal.module.scss';

export default function CustomModal({ isOpen, onClose, winnerMessage }) {
    if (!isOpen) return null;

    return (
        <>
            <div className={styles.overlay}></div>
            <div className={styles.modal}>
            <h2>{isWinner ? winnerMessage : loserMessage}</h2>
            <button onClick={onClose}>Reset</button>
            </div>
        </>
    );
}
