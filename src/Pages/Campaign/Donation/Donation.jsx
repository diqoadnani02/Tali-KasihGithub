import styles from "./Donation.module.scss";
// import CardProfile from "../assets/donation.png";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailCampaignAction } from "../../../Store/Actions/Campaign/campaign";

export default function Donation() {
  const { id, categoryId } = useParams();
  const dispatch = useDispatch();

  const detailDonationCampaign = useSelector(
    (state) => state.campaignReducer.detailCampaign.donatur
  );
  console.log("detailDonationCampaign", detailDonationCampaign);
  useEffect(() => {
    dispatch(getDetailCampaignAction(id));
  }, [dispatch, id, categoryId]);

  return (
    <div>
      <div className={styles.donationCampaign}>
        <div className={styles.donation}>
          <h3>Donations ({detailDonationCampaign?.length ? detailDonationCampaign?.length : 0})</h3>
        </div>
        {detailDonationCampaign?.map((item, index) => {
          return (
            <div key={index} className={styles.containerAllCards}>
              <div className={styles.containerCards}>
                <div className={styles.cardDonation}>
                  <div className={styles.cards}>
                    <img src={item.user.image} alt="" />
                  </div>
                  <div className={styles.cardsTitle}>
                    <div className={styles.cardNominal}>
                      <h4>Rp. {item.amount}</h4>
                      <div className={styles.cardText}>
                        <p>{item.name}</p>
                        <p style={{ color: "#9F9F9F" }}>{item.donateTime}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.paragraphDonation}>
                  <p>
                    {item.message}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        <div className={styles.showButton}>
          <button>SEE ALL</button>
        </div>
      </div>
    </div>
  );
}
