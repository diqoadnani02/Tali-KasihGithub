import React from "react";
import SortIcon from "@mui/icons-material/Sort";
import { useState, useEffect } from "react";
import Card from "../../Components/Card/Card";
import styles from "./DiscoverCategory.module.scss";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { discoverByCategoryStart } from "./../../Store/Actions/discoverAction/discoverAction";
import { useParams, useNavigate, Link } from "react-router-dom";
import { category } from "./Discover";

const DiscoverCategory = () => {
  const dispatch = useDispatch();
  const { categoryId, sort } = useParams();
  const categoryName = category.find((item) => item.id == categoryId);
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const navigate = useNavigate();
  const selected = (e) => {
    navigate(`/discover/category/${categoryId}/${e.target.value}`);
  };
  useEffect(() => {
    dispatch(discoverByCategoryStart({ category: categoryId, sort: sort, page: page }));
  }, [sort]);
  const { discoverByCategory } = useSelector((state) => state.discoverReducer);
  return (
    <div className={styles.discover_category}>
      <div className={styles.main_category}>
        <div className={styles.detail_category}>
          <button className={styles.button_category}>{categoryName.name}</button>
          <h1 className={styles.title_category}>{discoverByCategory && discoverByCategory.campaigns[0].category.quotes}</h1>
          <Link to="/discover">
            <div className={styles.icons_category}>
              <KeyboardBackspaceIcon />
              <p className={styles.text_category}>See all categories</p>
            </div>
          </Link>
        </div>
        <div className={styles.main_pict}>
          <img src={discoverByCategory && discoverByCategory.campaigns[0].category.categoryImage} alt="main" className={styles.img_category} />
        </div>
      </div>
      <div className={styles.sorting}>
        <p className={styles.text_category}>Sort</p>
        <select name="sort" id="sort" className={styles.sort} onChange={(e) => selected(e)}>
          <option value="Newest">Newest</option>
          <option value="Most urgent">Most Urgent</option>
          <option value="Popular">Popular</option>
          <option value="Less donation">Less Donation</option>
        </select>
        <SortIcon />
      </div>
      <div>
        <div className={styles.component_card}>
          {discoverByCategory && discoverByCategory.campaigns.map((item) => <Card image={item.image} category={item.category.category} title={item.title} author={item.user.name} raised={item.collected} goal={item.goal} />)}
        </div>
        <div className={styles.pagination}>
          <Stack spacing={2}>
            <Pagination count={discoverByCategory && discoverByCategory.totalPages} shape="rounded" page={page} onChange={handleChange} />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default DiscoverCategory;
