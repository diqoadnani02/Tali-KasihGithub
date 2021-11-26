import styles from "./Footer.module.scss";
import Logo from "./assets/Logo.png";

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
                <a href="">Education</a>
              </li>
              <li>
                <a href="">Disabilities</a>
              </li>
              <li>
                <a href="">Hospital Bills</a>
              </li>
              <li>
                <a href="">Religious</a>
              </li>
            </ul>
          </div>
          <div className={styles.list}>
            <h5>LEARN MORE</h5>
            <ul>
              <li>
                <a href="">How we can help</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
            </ul>
          </div>
          <div className={styles.list}>
            <h5>RESOURCES</h5>
            <ul>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Careers</a>
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
