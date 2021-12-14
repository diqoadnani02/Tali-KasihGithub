import React from "react";
import SortIcon from "@mui/icons-material/Sort";
import { useState, useEffect } from "react";
import Card from "../../Components/Card/Card";
import data from "../../Components/Card/data";
import styles from "./DiscoverCategory.module.scss";
import Main from "./assets/Main.png";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
const DiscoverCategory = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const getData = () => {
      setCategory(data.campaign);
    };

    getData();
  }, []);
  return (
    <div className={styles.discover_category}>
      <div className={styles.main_category}>
        <div className={styles.detail_category}>
          <button className={styles.button_category}>Medical</button>
          <h1 className={styles.title_category}>Your little kindness is precious</h1>
          <div className={styles.icons_category}>
            <KeyboardBackspaceIcon />
            <p className={styles.text_category}>See all categories</p>
          </div>
        </div>
        <div className={styles.main_pict}>
          <img src={Main} alt="main" />
        </div>
      </div>
      <div className={styles.sorting}>
        <p className={styles.text_category}>Sort</p>
        <select name="sort" id="sort" className={styles.sort}>
          <option value="newest">Newest</option>
          <option value="most-urgent">Most Urgent</option>
          <option value="opel">Popular</option>
          <option value="less-donation">Less Donation</option>
        </select>
        <SortIcon />
      </div>
      <div>
        <div className={styles.component_card}>
          {category.map((item) => (
            <Card image={item.image} category={item.category} title={item.title} author={item.author} data_funding={item.data_funding} raised={item.raised} goal={item.goal} />
          ))}
        </div>
        <div className={styles.pagination}>
          <Stack spacing={2}>
            <Pagination count={10} shape="rounded" />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default DiscoverCategory;
