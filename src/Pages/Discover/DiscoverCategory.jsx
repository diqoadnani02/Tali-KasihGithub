import React from "react";
import SortIcon from "@material-ui/icons/Sort";
import { useState, useEffect } from "react";
import data from "../../Card/data";
import Card from "../../Card/Card";
import styles from "./Discover.module.scss";
import Main from "./assets/Main.png";
const Discovercategory = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const getData = () => {
      setCategory(data.campaign);
    };

    getData();
  }, []);
  return (
    <div>
      <div>
        <img src={Main} alt="main" />
      </div>
      <select name="cars" id="cars">
        <option value="volvo">Newest</option>
        <option value="saab">Most Urgent</option>
        <option value="opel">Popular</option>
        <option value="audi">Less Donation</option>
      </select>
      <SortIcon />
      <div>
        <div className={styles.component_card}>
          {category.map((item) => (
            <Card image={item.image} category={item.category} title={item.title} author={item.author} data_funding={item.data_funding} raised={item.raised} goal={item.goal} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discovercategory;
