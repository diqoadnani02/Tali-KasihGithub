import styles from "./style/Campaign.module.scss";
import ReadMore from "./ReadMore/ReadMore";
import CampaignUpdate from "./CampaignUpdate/CampaignUpdate";
import Donation from "./Donation/Donation";
import Comment from "./Comment/Comment";
import Share from "../Fundraiser/Modal/Share";
import Card from "../../Components/Card/Card";
import data from "../../Components/Card/data";
import Image from "./assets/img.png";
import Profile from "./assets/profile.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

  const [list, setList] = useState([]);

  useEffect(() => {
    const getData = () => {
      setList(data.campaign);
    };

    getData();
  }, []);

  const [share, setShare] = useState(false);

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
          <p>IDR 10.000.000 remaining</p>
          <p>IDR 10.000.000 available</p>
          <BorderLinearProgress variant="determinate" value={80} />
          <p className={styles.goal}>from IDR 50.000.000 goal</p>
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
            <button onClick={() => setShare(true)} className={styles.buttonUp}>SHARE</button>
            <Share onClose={() => setShare(false)} share={share}/>
            <button className={styles.buttonDown}>DONATE</button>
          </div>
        </div>
      </div>

      {/* Read More Campaign */}
      <ReadMore />

      {/* Detail Donor Components */}
      <CampaignUpdate />

      {/* Donations Components*/}
      <Donation />

      {/* Comments Component */}
      <Comment/>

      {/* Card Components */}
      <div className={styles.linkCardBottom}>
        <Link to="#">Related campaign</Link>
        <div className={styles.cardBottom}>
          {list.map((item) => (
            <Card
              image={item.image}
              category={item.category}
              title={item.title}
              author={item.author}
              data_funding={item.data_funding}
              raised={item.raised}
              goal={item.goal}
            />
          ))}
        </div>
      </div>
    </>
  );
}
