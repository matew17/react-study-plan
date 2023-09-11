import styles from "./app.module.scss";

import { ThemeContext } from "./providers/theme.context";
import { useContext } from "react";
import Player from "./components/player/player.component";

import Toggle from "./components/toggle/toggle.component";

function App() {
  const { toggle } = useContext(ThemeContext);

  return (
    <section className={`${toggle ? styles.dark : ""} ${styles.appContainer}`}>
      <Toggle />

      <Player />
    </section>
  );
}

export default App;
