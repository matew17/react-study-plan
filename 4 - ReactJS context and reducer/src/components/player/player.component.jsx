import { useContext } from "react";

import { ThemeContext } from "../../providers/theme.context";
import styles from "./player.component.module.scss";

export default function Player() {
  const { toggle } = useContext(ThemeContext);

  return (
    <section
      className={`${toggle ? styles.dark : ""} ${styles.playerContainer}`}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/en/b/b2/Metallica_-_Master_of_Puppets_cover.jpg"
        alt="Master of Puppets cover"
        width={350}
        height={350}
      />
      <p>Master of Puppets</p>
      <p>Metallica</p>
      <audio controls>
        <source
          src="https://file-examples.com/storage/fe6c3ae08964ff31894d463/2017/11/file_example_MP3_700KB.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>
    </section>
  );
}
