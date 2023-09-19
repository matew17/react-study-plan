import styles from "./Modal.module.scss";

export const Modal = ({ title, text, onClose }) => {
  return (
    <div className={styles.modalContainer}>
      <h1>{title}</h1>

      <p>{text}</p>

      <button onClick={onClose}>Close</button>
    </div>
  );
};
