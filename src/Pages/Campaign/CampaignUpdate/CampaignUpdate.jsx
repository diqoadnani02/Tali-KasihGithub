import styles from "./CampaignUpdate.module.scss";

export default function CampaignUpdate() {
  return (
    <div>
       <div className={styles.updateDonor}>
        <div className={styles.donor}>
          <h3>Updates (16)</h3>
        </div>
        <div className={styles.containerProgress}>
          <div className={`${styles.step} ${styles.completed}`}>
            <div className={styles.stepper}>
              <div className={styles.circle}></div>
              <div className={styles.line}></div>
            </div>
            <div className={styles.contentProgress}>
              <div className={styles.titleBox}>
                <h4>
                  TODAY <span>- Recepient update</span>
                </h4>
              </div>
              <div className={styles.boxContent}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  nunc pellentesque enim ultrices nunc. Pretium massa, vel
                  viverra id mi sed sit. In faucibus leo etiam cras elit
                  malesuada augue. Sagittis quisque non, nullam facilisis.
                  Tempus cras nibh vitae vitae. Risus gravida arcu non a rhoncus
                  suscipit a eu ultrices. Vestibulum, ut cursus pellentesque
                  turpis ipsum arcu congue. Sit arcu, non gravida praesent
                  turpis varius. Phasellus morbi donec pulvinar nisi ac augue at
                  duis dolor. Sed ut hendrerit neque nunc accumsan ac massa.
                  Nullam scelerisque aliquet diam laoreet lorem.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.containerProgress}>
          <div className={`${styles.step} ${styles.completed}`}>
            <div className={styles.stepper}>
              <div className={styles.circle}></div>
              <div className={styles.line}></div>
            </div>
            <div className={styles.contentProgress}>
              <div className={styles.titleBox}>
                <h4>YESTERDAY</h4>
                <span>
                  <button>Withdrawal</button>
                </span>
              </div>
              <div className={styles.boxButton}>
                <p>
                  <b>Rp. 20,000,000</b>
                </p>
                Withdrawal purpose: pay surgery bill
              </div>
            </div>
          </div>
        </div>
        <div className={styles.containerProgress}>
          <div className={`${styles.step} ${styles.completed}`}>
            <div className={styles.stepper}>
              <div className={styles.circle}></div>
              <div className={styles.line}></div>
            </div>
            <div className={styles.contentProgress}>
              <div className={styles.titleBox}>
                <h4>3 Oktober 2020</h4>
                <span>
                  <button>Withdrawal</button>
                </span>
              </div>
              <div className={styles.boxButton}>
                <p>
                  <b>Rp. 10,000,000</b>
                </p>
                Withdrawal purpose: pay surgery bill
              </div>
            </div>
          </div>
        </div>
        <div className={styles.containerProgress}>
          <div className={`${styles.step} ${styles.completed}`}>
            <div className={styles.stepper}>
              <div className={styles.circle}></div>
              {/* <div className={styles.line}></div> */}
            </div>
            <div className={styles.contentProgress}>
              <div className={styles.titleBox}>
                <h4>
                  30 September 2020 <span>- Recepient update</span>
                </h4>
              </div>
              <div className={styles.boxContent}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  nunc pellentesque enim ultrices nunc. Pretium massa, vel
                  viverra id mi sed sit. In faucibus leo etiam cras elit
                  malesuada augue. Sagittis quisque non, nullam facilisis.
                  Tempus cras nibh vitae vitae. Risus gravida arcu non a rhoncus
                  suscipit a eu ultrices. Vestibulum, ut cursus pellentesque
                  turpis ipsum arcu congue. Sit arcu, non gravida praesent
                  turpis varius. Phasellus morbi donec pulvinar nisi ac augue at
                  duis dolor. Sed ut hendrerit neque nunc accumsan ac massa.
                  Nullam scelerisque aliquet diam laoreet lorem.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.showButton}>
          <button>SHOW OLDER</button>
        </div>
      </div>

    </div>
  )
}
