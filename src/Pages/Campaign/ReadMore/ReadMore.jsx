import React, { useState } from "react";
import {Link} from "react-router-dom";
import styles from "../ReadMore/ReadMore.module.scss";
import storyImage from "../assets/story.png";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export default function ReadMore() {
  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <div className={styles.readMore}>
        {isReadMore ? text.slice(0, 1000) : text}
        {!isReadMore ? <img src={storyImage} alt="" /> : null}
        <Link to='#' onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? (
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nunc
          pellentesque enim ultrices nunc. Pretium massa, vel viverra id mi sed
          sit. In faucibus leo etiam cras elit malesuada augue. Sagittis quisque
          non, nullam facilisis. Tempus cras nibh vitae vitae. Risus gravida
          arcu non a rhoncus suscipit a eu ultrices. Vestibulum, ut cursus
          pellentesque turpis ipsum arcu congue. Sit arcu, non gravida praesent
          turpis varius. Phasellus morbi donec pulvinar nisi ac augue at duis
          dolor. Sed ut hendrerit neque nunc accumsan ac massa. Nullam
          scelerisque aliquet diam laoreet lorem egestas lacus est sapien.
          
          Non blandit egestas tortor pharetra. Ut donec ornare nunc, magna ac
          scelerisque. At leo eget neque purus tellus placerat id. Lacus, eu non
          mollis placerat viverra et, id. Facilisi non consectetur aliquet
          condimentum tempor sapien libero, lacinia. Senectus malesuada ac
          gravida viverra egestas quam. Lorem et dignissim in dolor. Nec nam
          aliquam fermentum, imperdiet in dictum morbi odio. Pellentesque eget
          nunc id mus pretium. Neque lobortis phasellus purus pretium est leo.
          Morbi porttitor ac morbi sit auctor integer proin consectetur eget.
          Commodo aliquet aliquam, urna et ut aliquam tellus habitant eu. Sed
          suscipit quis ut tincidunt.

          Morbi porttitor ac morbi sit auctor integer proin consectetur eget.
          Commodo aliquet aliquam, urna et ut aliquam tellus habitant eu. Sed
          suscipit quis ut tincidunt. Orci in interdum id luctus neque, posuere.
          Vitae orci molestie volutpat porta elementum elementum metus, pharetra
          a. 
          
          Morbi porttitor ac morbi sit auctor integer proin consectetur eget.
          Commodo aliquet aliquam, urna et ut aliquam tellus habitant eu. Sed
          suscipit quis ut tincidunt.Morbi porttitor ac morbi sit auctor integer
          proin consectetur eget. Commodo aliquet aliquam, urna et ut aliquam
          tellus habitant eu. Sed suscipit quis ut tincidunt. Orci in interdum
          id luctus neque, posuere. Vitae orci molestie volutpat porta elementum
          elementum metus, pharetra a.
        </ReadMore>
      </div>
    </div>
  );
}
