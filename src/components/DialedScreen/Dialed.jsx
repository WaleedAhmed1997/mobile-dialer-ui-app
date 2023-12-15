import styles from "./Dialed.module.css";

function Dialed() {
  return (
    <div className={styles.container}>
      <div className={styles.device}>
        <section className={styles.dialer}>
          <div className={styles.input}>
            <p>calling mobile..</p>
            Test 99
          </div>
          <div className={styles.keyboard}>
            <div className={styles.row}>
              <div className={styles.circle}>
                <i className="fa fa-volume-high  "></i>
              </div>
              <div className={styles.circle}>
                <i className="fa fa-light fa-video"></i>
              </div>

              <div className={styles.circle}>
                <i className="fa fa-light fa-microphone-slash"></i>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.circle}>
                <i className="fa fa-light fa-user-plus"></i>
              </div>
              <div className={styles.circle}>
                <div className={styles.buttonWrapper}>
                  <button type="button" className={styles.control}>
                    {" "}
                    <i className="fa fa-light fa-phone fa-flip-vertical"></i>
                  </button>
                </div>
              </div>
              <div className={styles.circle}>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAaElEQVR4nO3VMQqAMBBE0VRe3XhPjcf4Ii4WC9PIForzykyKZcmQ1ux3gAlYgAFsQD/PqnIpLma9Kpdi0myvyqVYT7ZW5ZJY1VyVS/E4ekyuHs/j3G7ucXCPM/f4Q/B/fHGPM/fY3uMAhSG/fBRB/ncAAAAASUVORK5CYII=" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dialed;
