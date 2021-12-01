import styles from "./style/Campaign.module.scss";
import ReadMore from "./ReadMore/ReadMore";
import Image from "./assets/img.png";
import Profile from "./assets/profile.png";
import CardProfile from "./assets/donation.png";
import CommentProfile from "./assets/comment.png";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

export default function Campaign() {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    marginBottom: 20,
    marginRight: 30,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
    },
  }));

  return (
    <>
      {/* Top Campaign Components*/}
      <div className={styles.topCampaign}>
        <div className={styles.campaign}>
          <h1>Aid for necessary items to help our country</h1>
          <img src={Image} alt="" />
        </div>
        <div className={styles.cardCampaign}>
          <h3>IDR 30.000.000</h3>
          <p>from IDR 50.000.000 goal</p>
          <BorderLinearProgress variant="determinate" value={80} />
          <div className={styles.cardProfile}>
            <img src={Profile} alt="" />
            <div className={styles.cardTitleProfile}>
              <h4>Dian Endang</h4>
              <p>Fundraiser</p>
            </div>
          </div>
          <div className={styles.smallCard}>
            <div className={styles.listCard}>
              <h4>12</h4>
              <p>Days left</p>
            </div>
            <div className={styles.listCard}>
              <h4>132</h4>
              <p>Donation</p>
            </div>
            <div className={styles.listCard}>
              <h4>232</h4>
              <p
                style={{
                  paddingLeft: "10px",
                }}
              >
                Share
              </p>
            </div>
          </div>
          <div className={styles.buttonCard}>
            <button className={styles.buttonUp}>SHARE</button>
            <button className={styles.buttonDown}>DONATE</button>
          </div>
        </div>
      </div>

      {/* Read More Campaign */}
      <ReadMore />

      {/* Detail Donor Components */}
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

      {/* Donations Components*/}
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

      {/* Comments Component */}
      <div className={styles.comentContainer}>
        <div className={styles.coment}>
          <h3>Comments (11)</h3>
        </div>
        <div className={styles.comentSection}>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Give Them Support..."
          ></textarea>
          <div className={styles.comentButton}>
            <button>POST</button>
          </div>
        </div>
        <div className={styles.comentCards}>
          <div className={styles.cards}>
            <div className={styles.cardsBox}>
              <img src={CommentProfile} alt="" />
              <div className={styles.cardsTitle}>
                <h4 style={{ margin: 0, padding: "0 20px" }}>Reine Dea</h4>
                <p
                  style={{ margin: 0, padding: "10px 20px", color: "#9F9F9F" }}
                >
                  12 minutes ago
                </p>
              </div>
            </div>
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              nunc pellentesque enim ultrices nunc. Pretium massa, vel viverra
              id mi sed sit. In faucibus leo etiam cras elit malesuada augue. In
              faucibus leo etiam cras elit malesuada augue “
            </p>
          </div>
        </div>
        <div className={styles.comentCards}>
          <div className={styles.cardsDown}>
            <div className={styles.cardsBox}>
              <img src={CommentProfile} alt="" />
              <div className={styles.cardsTitle}>
                <h4 style={{ margin: 0, padding: "0 20px" }}>Reine Dea</h4>
                <p
                  style={{ margin: 0, padding: "10px 20px", color: "#9F9F9F" }}
                >
                  12 minutes ago
                </p>
              </div>
            </div>
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              nunc pellentesque enim ultrices nunc. Pretium massa, vel viverra
              id mi sed sit. In faucibus leo etiam cras elit malesuada augue. In
              faucibus leo etiam cras elit malesuada augue “
            </p>
          </div>
        </div>
        <div className={styles.comentCards}>
          <div className={styles.cards}>
            <div className={styles.cardsBox}>
              <img src={CommentProfile} alt="" />
              <div className={styles.cardsTitle}>
                <h4 style={{ margin: 0, padding: "0 20px" }}>Reine Dea</h4>
                <p
                  style={{ margin: 0, padding: "10px 20px", color: "#9F9F9F" }}
                >
                  12 minutes ago
                </p>
              </div>
            </div>
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              nunc pellentesque enim ultrices nunc. Pretium massa, vel viverra
              id mi sed sit. In faucibus leo etiam cras elit malesuada augue. In
              faucibus leo etiam cras elit malesuada augue “
            </p>
          </div>
        </div>
        <div className={styles.comentCards}>
          <div className={styles.cardsDown}>
            <div className={styles.cardsBox}>
              <img src={CommentProfile} alt="" />
              <div className={styles.cardsTitle}>
                <h4 style={{ margin: 0, padding: "0 20px" }}>Reine Dea</h4>
                <p
                  style={{ margin: 0, padding: "10px 20px", color: "#9F9F9F" }}
                >
                  12 minutes ago
                </p>
              </div>
            </div>
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              nunc pellentesque enim ultrices nunc. Pretium massa, vel viverra
              id mi sed sit. In faucibus leo etiam cras elit malesuada augue. In
              faucibus leo etiam cras elit malesuada augue “
            </p>
          </div>
        </div>
        <div className={styles.comentCards}>
          <div className={styles.cards}>
            <div className={styles.cardsBox}>
              <img src={CommentProfile} alt="" />
              <div className={styles.cardsTitle}>
                <h4 style={{ margin: 0, padding: "0 20px" }}>Reine Dea</h4>
                <p
                  style={{ margin: 0, padding: "10px 20px", color: "#9F9F9F" }}
                >
                  12 minutes ago
                </p>
              </div>
            </div>
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              nunc pellentesque enim ultrices nunc. Pretium massa, vel viverra
              id mi sed sit. In faucibus leo etiam cras elit malesuada augue. In
              faucibus leo etiam cras elit malesuada augue “
            </p>
          </div>
        </div>
        <div className={styles.showButton}>
          <button>LOAD MORE</button>
        </div>
      </div>
    </>
  );
}
