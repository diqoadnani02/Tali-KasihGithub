import styles from "./Header.module.scss";
import Logo from "./assets/Logo.png";
import { useState, useRef } from "react";

import SearchIcon from "@mui/icons-material/Search";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [search, setSearch] = useState(false);
  const inputref = useRef();
  console.log(inputref.current);

  const Token = localStorage.getItem("token");
  const location = useLocation();
  console.log(location);
  const Home = window.location.pathname === "/";
  return (
    <div className={Home ? styles.headerBeforeAuth : styles.headerAfterAuth}>
      <div className={styles.logo}>
        <img src={Logo} alt="TaliKasih" />
      </div>
      {Token ? (
        <div className={styles.barBeforeAuth}>
          <div className={styles.search}>
            <SearchIcon className={styles.icon} />
            <input
              className={styles.input}
              placeholder="Search"
            />
          </div>
          <div className={styles.listBar}>
            <span></span>
            <Link to="#">Login</Link>
            <span></span>
            <Link to="#">Register</Link>
          </div>
        </div>
      ) : (
        <div className={styles.BarAfterAuth}>
          {!search ? (
            <div className={styles.buttonNavbar}>
              <button className={styles.campaign}>CREATE CAMPAIGN</button>
              <button className={styles.donate}>DONATE</button>
            </div>
          ) : null}
          <div className={styles.search}>
            <SearchIcon className={styles.icon} />
            <input
              onFocus={() => setSearch(true)}
              onBlur={() => setSearch(false)}
              className={styles.input}
              placeholder="Search"
              ref={inputref}
            />
          </div>
          <div className={styles.barProfile}>
            <span></span>
            <Link to='#'>My Profile</Link>
          </div>
        </div>
      )}
    </div>
  );
}
