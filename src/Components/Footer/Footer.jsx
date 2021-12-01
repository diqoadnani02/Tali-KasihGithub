import styles from "./Footer.module.scss";
import Logo from "./assets/Logo.png";
import { Link } from '@mui/material'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.logo}>
          <img src={Logo} alt="TaliKasih" />
        </div>
        <div className={styles.listedLink}>
          <div className={styles.list}>
            <h5>FUNDRAISE FOR</h5>
            <ul>
              <li>
                <Link href="#">Education</Link>
              </li>
              <li>
                <Link href="#">Disabilities</Link>
              </li>
              <li>
                <Link href="#">Hospital Bills</Link>
              </li>
              <li>
                <Link href="#">Religious</Link>
              </li>
            </ul>
          </div>
          <div className={styles.list}>
            <h5>LEARN MORE</h5>
            <ul>
              <li>
                <Link href="#">How we can help</Link>
              </li>
              <li>
                <Link href="#">FAQ</Link>
              </li>
              <li>
                <Link href="">Blog</Link>
              </li>
            </ul>
          </div>
          <div className={styles.list}>
            <h5>RESOURCES</h5>
            <ul>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Careers</Link>
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
