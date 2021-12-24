import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../ReadMore/ReadMore.module.scss";
import storyImage from "../assets/story.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailCampaignAction } from "../../../Store/Actions/Campaign/campaign";

export default function ReadMore() {
  const { id, categoryId } = useParams();
  const dispatch = useDispatch();
  const detailStoryCampaign = useSelector(
    (state) => state.campaignReducer.detailCampaign
  );
  console.log("detailStoryCampaign", detailStoryCampaign);
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
        {!isReadMore ? <img src={storyImage} alt="" /> : null}
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

        <ReadMore>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          viverra turpis quis pellentesque iaculis. Fusce ac mauris ac ex
          pretium interdum non vel eros. Curabitur in suscipit ante. Maecenas
          urna enim, ultrices non metus nec, laoreet maximus sem. Quisque
          maximus ex vel ligula convallis, quis mollis lorem sagittis.
          Pellentesque laoreet felis non odio rhoncus, at fermentum augue
          semper. Donec odio mauris, rutrum a eros sit amet, posuere maximus ex.
          Quisque tristique ullamcorper dolor, nec posuere ligula consequat et.
          Nulla vitae justo viverra, malesuada mauris id, porta nunc. Vestibulum
          risus velit, bibendum sed nisl eget, pellentesque maximus diam. Sed
          varius efficitur magna, at pharetra est sagittis ac. Pellentesque ac
          ante at tortor bibendum ullamcorper quis nec nulla. Aenean a laoreet
          dui. Maecenas mollis libero condimentum, aliquam enim consectetur,
          ullamcorper dui. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas. Duis ac rutrum nisi, vitae
          tincidunt mi.
        </ReadMore>
      </div>
    </div>
  );
}
