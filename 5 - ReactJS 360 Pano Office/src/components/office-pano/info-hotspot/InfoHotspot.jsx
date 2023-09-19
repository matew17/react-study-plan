import { createPortal } from "react-dom";
import { useState } from "react";

import { InfoIcon } from "../../icons/Icons";
import { Modal } from "../../modal/Modal";

import styles from "./InfoHotspot.module.scss";

export const InfoHotspot = ({ title, text }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className={styles.infoHotspot} onClick={() => setShowModal(true)}>
        <InfoIcon />
      </button>

      {showModal &&
        createPortal(
          <Modal
            title={title}
            text={text}
            onClose={() => setShowModal(false)}
          />,
          document.body
        )}
    </>
  );
};
