import React, { useEffect } from "react";
import Card from "./../../Components/Card/Card";
import styles from "./Discover.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { discoverStart } from "./../../Store/Actions/discoverAction/discoverAction";

const SearchDiscover = ({ inputSearch }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(discoverStart());
  }, []);
  const { discover } = useSelector((state) => state.discoverReducer);
  const combineAllDiscover = discover && discover.dataNewest.concat(discover.dataUrgent, discover.gainedMomentum);
  const filterTitle = combineAllDiscover.filter((item) => item.title.includes(inputSearch));
  const filterName = combineAllDiscover.filter((item) => item.user.name.includes(inputSearch));
  const filterCategory = combineAllDiscover.filter((item) => item.category.category.includes(inputSearch));
  const filterAll = filterTitle.concat(filterName, filterCategory);
  return (
    <>
      {filterAll.length === 0 ? (
        <div>
          <h3 className={styles.title_search}>Result for "{inputSearch}"</h3>
          <h3 className={styles.title}>Result for Not Found</h3>
          <Link to="/">
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
          <div className="Card">
            {filterAll.map((item) => (
              <Card image={item.image} category={item.category.category} title={item.title} author={item.user.name} raised={item.collected} goal={item.goal} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SearchDiscover;
