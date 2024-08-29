export function CustomModal({ isOpen, onClose, winnerMessage }) {
    if (!isOpen) return null;

    return (
        <>
        <div className={styles.overlay}></div>
            <div className="modal">
            <h2>{winnerMessage}</h2>
            <button onClick={onClose}>Reset</button>
        </div>
        </>
    );
}