import React, { useState, useEffect } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Skeleton from "@mui/material/Skeleton";
import styles from "./Card.module.scss";
import { Link } from "react-router-dom";

const Card = ({ id, image, category, title, author, raised, goal }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  const percentage = (raised / goal) * 100;
  return (
    <Link to={`/campaign/${category}/${id}`} style={{ textDecoration: "none", color: "black" }}>
      <div className={styles.Container}>
        {loading ? (
          <>
            <div className={styles.image_category}>
              <Skeleton sx={{ height: "190px", width: "340px" }} animation="wave" variant="rectangular" />
            </div>
            <div className={styles.category}>
              <Skeleton variant="rectangular" animation="wave" width={100} height={30} className={styles.button_category_skeleton} />
            </div>
            <div>
              <Skeleton variant="text" animation="wave" width={316} height={25} />
              <Skeleton variant="text" animation="wave" width={231} height={25} />
              <Skeleton variant="text" animation="wave" width={76} height={25} />
            </div>
            <div>
              <Skeleton variant="text" animation="wave" width={316} height={20} />
            </div>
            <div className={styles.goals_skeleton}>
              <div>
                <Skeleton variant="text" animation="wave" width={43} />
                <Skeleton variant="text" animation="wave" width={103} />
              </div>
              <div className={styles.goals_skeleton2}>
                <Skeleton variant="text" animation="wave" width={43} />
                <Skeleton variant="text" animation="wave" width={103} />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={styles.image_category}>
              <img src={image} alt="gambar" className={styles.set_image} />
            </div>
            <div className={styles.category}>
              <button className={styles.button_category}>{category}</button>
              <div>
                <p className={styles.title1}>{title}</p>
                <p className={styles.title2}>{author}</p>
              </div>
              <div>
                <LinearProgress variant="determinate" sx={{ height: "8px" }} value={percentage} className={styles.progress} />
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
          </>
        )}
      </div>
    </Link>
  );
};

export default Card;
