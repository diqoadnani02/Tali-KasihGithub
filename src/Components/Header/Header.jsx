import styles from "./Header.module.scss";
import Logo from "./assets/Logo.png";

import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={Logo} alt="TaliKasih" />
      </div>
      <div className={styles.Bar}>
        <div className={styles.search}>
          <SearchIcon className={styles.icon} />
          <input className={styles.input} placeholder="Search" />
        </div>
        <div className={styles.listBar}>
          <span></span>
          <Link to="#">Login</Link>
          <span></span>
          <Link to="#">Register</Link>
        </div>
      </div>
    </div>
  );
}
