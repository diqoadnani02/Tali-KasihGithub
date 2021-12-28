import styles from "./CampaignUpdate.module.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailCampaignAction } from "../../../Store/Actions/Campaign/campaign";

export default function CampaignUpdate() {
  const { id, categoryId } = useParams();
  const dispatch = useDispatch();

  const detailUpdateCampaign = useSelector(
    (state) => state.campaignReducer.detailCampaign.updateCampaign
  );
  useEffect(() => {
    dispatch(getDetailCampaignAction(id));
  }, [dispatch, id, categoryId]);

  const [updateNumber, setUpdateNumber] = useState(1);
  const dataUpdate = detailUpdateCampaign?.slice(0, updateNumber);

  return (
    <div>
      <div className={styles.updateDonor}>
        <div className={styles.donor}>
          <h3>
            Updates (
            {detailUpdateCampaign?.length ? detailUpdateCampaign?.length : 0})
          </h3>
        </div>

        {dataUpdate?.map((item, index) => {
          return (
            <>
              <div key={index} className={styles.containerProgress}>
                <div className={`${styles.step} ${styles.completed}`}>
                  <div className={styles.stepper}>
                    <div className={styles.circle}></div>
                    <div className={styles.line}></div>
                  </div>
                  <div className={styles.contentProgress}>
                    <div className={styles.titleBox}>
                      <h4>
                        {item.updateTime} <span>- Recepient update</span>
                      </h4>
                    </div>
                    <div className={styles.boxContent}>
                      <p>{item.update}</p>
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
                      <h4>{item.updateTime}</h4>
                      <span>
                        <button>Withdrawal</button>
                      </span>
                    </div>
                    <div className={styles.boxButton}>
                      <p>
                        <b>Rp. {item.amount}</b>
                      </p>
                      {item.update}
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
        <div className={styles.showButton}>
          <button onClick={() => setUpdateNumber(detailUpdateCampaign?.length)}>
            SHOW OLDER
          </button>
        </div>
      </div>
    </div>
  );
}
