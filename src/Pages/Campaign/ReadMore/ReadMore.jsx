import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../ReadMore/ReadMore.module.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailCampaignAction } from "../../../Store/Actions/Campaign/campaign";

export default function ReadMore(props) {
  const { story } = props;
  const { id, categoryId } = useParams();
  const dispatch = useDispatch();
  const detailStoryCampaign = useSelector(
    (state) => state.campaignReducer.detailCampaign
  );
  useEffect(() => {
    dispatch(getDetailCampaignAction(id));
  }, [dispatch, id, categoryId]);

  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(false);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <div className={styles.readMore}>
        {isReadMore ? text.slice(0, 1000) : text}
        {/* {!isReadMore ? <img src={storyImage} alt="" /> : null} */}
        <Link to="#" onClick={toggleReadMore} className="read-or-hide">
          {!isReadMore ? (
            <div className={styles.collapsible}>
              Read More
              <div className={styles.expandIcons}>
                <ExpandMoreIcon sx={{ color: "#A87B14" }} />
              </div>
            </div>
          ) : (
            <div className={styles.collapsible}>
              Read Less
              <div className={styles.expandIcons}>
                <ExpandLessIcon sx={{ color: "#A87B14" }} />
              </div>
            </div>
          )}
        </Link>
      </div>
    );
  };
  return (
    <div className={styles.storyCampaign}>
      <div className={styles.text}>
        <h3>The Story</h3>
        <ReadMore>{story}</ReadMore>
      </div>
    </div>
  );
}
