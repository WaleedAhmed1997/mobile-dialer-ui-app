import Dialer from "./components/DialerScreen/Dialer";
import Dialed from "./components/DialedScreen/Dialed";
import styles from "./components/DialedScreen/Dialed.module.css";
// import AudioCall from "./components/AudioCall";
function App() {
  return (
    <div className={styles.row}>
      {/* <AudioCall /> */}
      <Dialer />
      <Dialed />
    </div>
  );
}

export default App;
