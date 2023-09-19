import { ArrowsUpIcon } from "../../icons/Icons";
import styles from "./LinkHotspot.module.scss";

export const LinkHotspot = ({ switchScene }) => {
  return (
    <button className={styles.linkHotspot} onClick={switchScene}>
      <ArrowsUpIcon />
    </button>
  );
};
