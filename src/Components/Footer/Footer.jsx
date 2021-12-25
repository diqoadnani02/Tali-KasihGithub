import styles from "./Footer.module.scss";
import Logo from "./assets/Logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.logo}>
          <img src={Logo} alt="TaliKasih" />
        </div>
        <div className={styles.listedLink}>
          <div className={styles.list}>
            <h5>FUNDRAISER FOR</h5>
            <ul>
              <li>
                <Link to="/Discover">All Categories</Link>
              </li>
              <li>
                <Link to="">Education</Link>
              </li>
              <li>
                <Link to="">Disabilities</Link>
              </li>
              <li>
                <Link to="">Hospital Bills</Link>
              </li>
              <li>
                <Link to="">Religious</Link>
              </li>
            </ul>
          </div>
          <div className={styles.list}>
            <h5>LEARN MORE</h5>
            <ul>
              <li>
                <Link to="">How we can help</Link>
              </li>
              <li>
                <Link to="">FAQ</Link>
              </li>
              <li>
                <Link to="">Blog</Link>
              </li>
            </ul>
          </div>
          <div className={styles.list}>
            <h5>RESOURCES</h5>
            <ul>
              <li>
                <Link to="">Contact Us</Link>
              </li>
              <li>
                <Link to="">About</Link>
              </li>
              <li>
                <Link to="">Careers</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.foot}>
        <p>TaliKasih © 2020. All rights reserved </p>
      </div>
    </div>
  );
}
