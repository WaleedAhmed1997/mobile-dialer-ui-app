import { useState } from "react";

// import { useStore } from "../../store";
import styles from "./Dialer.module.css";
import { Button, Grid, Text } from "./atoms";
// import { startCall } from "../AudioCall";

function Dialer() {
  const [number, setNumber] = useState("+92");
  const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"];

  return (
    <div className={styles.container}>
      <div className={styles.device}>
        <section className={styles.dialer}>
          <div
            className={styles.input}
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          >
            {number}
          </div>
          <div className={styles.keyboard}>
            <Grid>
              {buttons.map((char) => (
                <Button key={char} onClick={() => setNumber(number + char)}>
                  <Text>{char}</Text>
                </Button>
              ))}
            </Grid>
          </div>
        </section>

        <section className={styles.controls}>
          <div className={styles.buttonWrapper}>
            <button type="button" className={styles.control}>
              Hello
            </button>
          </div>
          <div className={styles.buttonWrapper}>
            <div className={`${styles.control} ${styles.call}`}>
              <div className={styles.icon}></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dialer;
