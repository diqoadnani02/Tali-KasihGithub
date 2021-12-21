import React, { useEffect, useState } from "react";
import Card from "./../../Components/Card/Card";
import styles from "./Discover.module.scss";
import style from "./SearchDiscover.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { discoverBySearchStart } from "./../../Store/Actions/discoverAction/discoverAction";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
const SearchDiscover = ({ inputSearch }) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  useEffect(() => {
    dispatch(discoverBySearchStart({ inputSearch, page }));
  }, [dispatch, inputSearch, page]);
  const { discoverBySearch } = useSelector((state) => state.discoverReducer);
  const discoverSearch = discoverBySearch ? discoverBySearch.campaigns : [];
  return (
    <>
      {discoverSearch.length === 0 ? (
        <div>
          <h3 className={styles.title_search}>Result for "{inputSearch}"</h3>
          <h3 className={styles.title}>Result for Not Found</h3>
          <Link to="/discover">
            <div className={styles.icons_category}>
              <KeyboardBackspaceIcon />
              <p className={styles.text_category}>See all categories</p>
            </div>
          </Link>
        </div>
      ) : (
        <div>
          <div>
            <h3 className={styles.title}>Result for "{inputSearch}"</h3>
            <Link to="/">
              <div className={styles.icons_category}>
                <KeyboardBackspaceIcon />
                <p className={styles.text_category}>See all categories</p>
              </div>
            </Link>
          </div>
          <div className={style.card_search}>
            {discoverSearch.map((item) => (
              <Card image={item.image} category={item.category.category} title={item.title} author={item.user.name} raised={item.collected} goal={item.goal} />
            ))}
          </div>
          <div>
            <Stack spacing={2}>
              <Pagination count={discoverBySearch && discoverBySearch.totalPages} shape="rounded" page={page} onChange={handleChange} />
            </Stack>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchDiscover;
