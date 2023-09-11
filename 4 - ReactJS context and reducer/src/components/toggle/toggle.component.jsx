import { useContext } from "react";
import {
  ThemeContext,
  ThemeContextDispatch,
} from "../../providers/theme.context";
import styles from "./toggle.component.module.scss";

export default function Toggle() {
  const { toggle } = useContext(ThemeContext);
  const dispatch = useContext(ThemeContextDispatch);

  const handleChange = (event) => {
    dispatch({ type: "TOGGLE_THEME", payload: event.target.checked });
  };

  return (
    <>
      <section
        className={`${toggle ? styles.dark : ""} ${styles.toggleContainer}`}
      >
        <label className={styles.switch}>
          <input
            type="checkbox"
            checked={toggle}
            className={styles.checkbox}
            onChange={handleChange}
          />
          <span className={styles.slider}></span>
        </label>
      </section>
    </>
  );
}
