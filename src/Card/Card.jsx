import React from "react";
import data from "./data";
import LinearProgress from "@mui/material/LinearProgress";
import styles from "./Card.module.scss";
const Card = ({ image, category, title, author, data_funding, raised, goal }) => {
  // const [progress, setProgress] = React.useState(60);

  return (
    <div className={styles.Container}>
      <div className={styles.image_category}>
        <img src={image} alt="gambar" />
      </div>
      <div className={styles.category}>
        <button className={styles.button_category}>{category}</button>
        <div>
          <p className={styles.title1}>{title}</p>
          <p className={styles.title2}>{author}</p>
        </div>
        <div>
          <LinearProgress variant="determinate" value={data_funding} className={styles.progress} />
        </div>
        <div className={styles.goals_card}>
          <div>
            <p className={styles.raised}>Raised</p>
            <p className={styles.money1}>{raised}</p>
          </div>
          <div>
            <p className={styles.goal}>Goal</p>
            <p className={styles.money2}>{goal}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
