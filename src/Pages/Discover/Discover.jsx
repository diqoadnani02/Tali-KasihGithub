import React from "react";
import Card from "../../Card/Card";
import data from "../../Card/data";
import data1 from "./data1";
import data2 from "./data2";
import styles from "./Discover.module.scss";
import Disability from "./assets/Disability.png";
import Disaster from "./assets/Disaster.png";
import Education from "./assets/Education.png";
import Environment from "./assets/Environment.png";
import Humanity from "./assets/Humanity.png";
import Medical from "./assets/Medical.png";
import Religious from "./assets/Religious.png";
import Sociopreneur from "./assets/Sociopreneur.png";
import { useState, useEffect } from "react";

const Discover = () => {
  const category = [
    { icon: Disability, name: "Disability" },
    { icon: Medical, name: "Medical" },
    { icon: Education, name: "Education" },
    { icon: Religious, name: "Religious" },
    { icon: Humanity, name: "Humanity" },
    { icon: Environment, name: "Environment" },
    { icon: Disaster, name: "Disaster" },
    { icon: Sociopreneur, name: "Sociopreneur" },
  ];
  const [newest, setNewest] = useState([]);
  const [mostUrgent, setMostUrgent] = useState([]);
  const [gainMomentum, setGainMomentum] = useState([]);

  useEffect(() => {
    const getData = () => {
      setNewest(data.campaign);
      setMostUrgent(data1.campaign);
      setGainMomentum(data2.campaign);
    };

    getData();
  }, []);

  return (
    <div className={styles.discover}>
      <div>
        <h3 className={styles.title}>Find causes you truly care about</h3>
      </div>
      {/* Button Category */}
      <div className={styles.button_card}>
        {category.map((data) => (
          <button className={styles.button}>
            <img src={data.icon} alt={data.name} />
            <p className={styles.button_title}>{data.name}</p>
          </button>
        ))}
      </div>
      {/* Card Newest */}
      <div>
        <h4 className={styles.title1}>Newest</h4>
      </div>
      <div className={styles.component_card}>
        {newest.map((item) => (
          <Card image={item.image} category={item.category} title={item.title} author={item.author} data_funding={item.data_funding} raised={item.raised} goal={item.goal} />
        ))}
      </div>
      {/* Card Most Urgent */}
      <div>
        <h4 className={styles.title2}>Most Urgent</h4>
      </div>
      <div className={styles.component_card}>
        {mostUrgent.map((item) => (
          <Card image={item.image} category={item.category} title={item.title} author={item.author} data_funding={item.data_funding} raised={item.raised} goal={item.goal} />
        ))}
      </div>
      {/* Card Gain Momentum */}
      <div>
        <h4 className={styles.title2}>Gain Momentum</h4>
      </div>
      <div className={styles.component_card2}>
        {gainMomentum.map((item) => (
          <Card image={item.image} category={item.category} title={item.title} author={item.author} data_funding={item.data_funding} raised={item.raised} goal={item.goal} />
        ))}
      </div>
    </div>
  );
};

export default Discover;
