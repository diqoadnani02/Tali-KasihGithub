import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../Components/Card/Card";
import styles from "./Discover.module.scss";
import Disability from "./assets/Disability.png";
import Disaster from "./assets/Disaster.png";
import Education from "./assets/Education.png";
import Environment from "./assets/Environment.png";
import Humanity from "./assets/Humanity.png";
import Medical from "./assets/Medical.png";
import Religious from "./assets/Religious.png";
import Sociopreneur from "./assets/Sociopreneur.png";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchDiscover from "./SearchDiscover";
import { discoverStart } from "./../../Store/Actions/discoverAction/discoverAction";

export const category = [
  { id: 1, icon: Disability, name: "Disability" },
  { id: 2, icon: Medical, name: "Medical" },
  { id: 3, icon: Education, name: "Education" },
  { id: 4, icon: Religious, name: "Religious" },
  { id: 5, icon: Humanity, name: "Humanity" },
  { id: 6, icon: Environment, name: "Environment" },
  { id: 7, icon: Disaster, name: "Disaster" },
  { id: 8, icon: Sociopreneur, name: "Sociopreneur" },
];

const Discover = ({ inputSearch }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(discoverStart());
  }, [dispatch]);

  const { discover } = useSelector((state) => state.discoverReducer);
  console.log(discover);
  return (
    <>
      {inputSearch === "" ? (
        <div className={styles.discover}>
          <div>
            <h3 className={styles.title}>Find causes you truly care about</h3>
          </div>
          {/* Button Category */}
          <div className={styles.button_card}>
            {category.map((data) => (
              <button
                className={styles.button}
                onClick={() => {
                  navigate(`/discover/category/${data.id}/latest`);
                }}
              >
                <img src={data.icon} alt={data.name} className={styles.img_button} />
                <p className={styles.button_title}>{data.name}</p>
              </button>
            ))}
          </div>
          {/* Card Newest */}
          <div>
            <h4 className={styles.title1}>Newest</h4>
          </div>
          <div className={styles.component_card}>
            {discover && discover.dataNewest.map((item) => <Card id={item.id} image={item.image} category={item.category.category} title={item.title} author={item.user.name} raised={item.collected} goal={item.goal} />)}
          </div>
          {/* Card Most Urgent */}
          <div>
            <h4 className={styles.title2}>Most Urgent</h4>
          </div>
          <div className={styles.component_card}>
            {discover && discover.dataUrgent.map((item) => <Card id={item.id} image={item.image} category={item.category.category} title={item.title} author={item.user.name} raised={item.collected} goal={item.goal} />)}
          </div>
          {/* Card Gain Momentum */}
          <div>
            <h4 className={styles.title2}>Gain Momentum</h4>
          </div>
          <div className={styles.component_card2}>
            {discover && discover.gainedMomentum.map((item) => <Card id={item.id} image={item.image} category={item.category.category} title={item.title} author={item.user.name} raised={item.collected} goal={item.goal} />)}
          </div>
        </div>
      ) : (
        <SearchDiscover inputSearch={inputSearch} />
      )}
    </>
  );
};

export default Discover;
