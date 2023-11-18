import styles from "./MainHeader.module.css";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles["links-container"]}>
        <Link className={styles.link} to="/">
          Home
        </Link>
        <Link className={styles.link} to="/contact-us">
          Contact Us
        </Link>
        <Link className={styles.link} to="/about-us">
          About Us
        </Link>
      </div>
    </header>
  );
};

export default MainHeader;
