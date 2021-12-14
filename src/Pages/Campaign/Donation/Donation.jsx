import styles from "./Donation.module.scss";
import CardProfile from "../assets/donation.png";

export default function Donation() {
  return (
    <div>
            <div className={styles.donationCampaign}>
        <div className={styles.donation}>
          <h3>Donations (132)</h3>
        </div>
        <div className={styles.containerAllCards}>
          <div className={styles.containerCards}>
            <div className={styles.cardDonation}>
              <div className={styles.cards}>
                <img src={CardProfile} alt="" />
              </div>
              <div className={styles.cardsTitle}>
                <div className={styles.cardNominal}>
                  <h4>Rp. 320.000</h4>
                  <div className={styles.cardText}>
                    <p>Justin Junaedi</p>
                    <p style={{ color: "#9F9F9F" }}>12 minutes ago</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.paragraphDonation}>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                nunc pellentesque enim ultrices nunc. Pretium massa, vel viverra
                id mi sed sit. In faucibus leo etiam cras elit malesuada augue.
                In faucibus leo etiam cras elit malesuada augue “
              </p>
            </div>
          </div>
          <div className={styles.containerCards}>
            <div className={styles.cardDonation}>
              <div className={styles.cards}>
                <img src={CardProfile} alt="" />
              </div>
              <div className={styles.cardsTitle}>
                <div className={styles.cardNominal}>
                  <h4>Rp. 320.000</h4>
                  <div className={styles.cardText}>
                    <p>Justin Junaedi</p>
                    <p style={{ color: "#9F9F9F" }}>12 minutes ago</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.paragraphDonation}>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                nunc pellentesque enim ultrices nunc. Pretium massa, vel viverra
                id mi sed sit. In faucibus leo etiam cras elit malesuada augue.
                In faucibus leo etiam cras elit malesuada augue “
              </p>
            </div>
          </div>
        </div>
        <div className={styles.containerAllCards}>
          <div className={styles.containerCards}>
            <div className={styles.cardDonation}>
              <div className={styles.cards}>
                <img src={CardProfile} alt="" />
              </div>
              <div className={styles.cardsTitle}>
                <div className={styles.cardNominal}>
                  <h4>Rp. 320.000</h4>
                  <div className={styles.cardText}>
                    <p>Justin Junaedi</p>
                    <p style={{ color: "#9F9F9F" }}>12 minutes ago</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.paragraphDonation}>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                nunc pellentesque enim ultrices nunc. Pretium massa, vel viverra
                id mi sed sit. In faucibus leo etiam cras elit malesuada augue.
                In faucibus leo etiam cras elit malesuada augue “
              </p>
            </div>
          </div>
          <div className={styles.containerCards}>
            <div className={styles.cardDonation}>
              <div className={styles.cards}>
                <img src={CardProfile} alt="" />
              </div>
              <div className={styles.cardsTitle}>
                <div className={styles.cardNominal}>
                  <h4>Rp. 320.000</h4>
                  <div className={styles.cardText}>
                    <p>Justin Junaedi</p>
                    <p style={{ color: "#9F9F9F" }}>12 minutes ago</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.paragraphDonation}>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                nunc pellentesque enim ultrices nunc. Pretium massa, vel viverra
                id mi sed sit. In faucibus leo etiam cras elit malesuada augue.
                In faucibus leo etiam cras elit malesuada augue “
              </p>
            </div>
          </div>
        </div>
        <div className={styles.showButton}>
          <button>SEE ALL</button>
        </div>
      </div>
    </div>
  )
}
