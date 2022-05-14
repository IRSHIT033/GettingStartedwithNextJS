import Navbar from "../component/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div class={styles.container}>
      <h1>Hello World</h1>
      <Navbar />
    </div>
  );
}
