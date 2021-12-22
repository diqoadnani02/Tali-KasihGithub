import React from "react";
import Card from "./Card";
import thick from "./assets/thick.png";
import thick2 from "./assets/thick2.png";
import style from "./Trending.module.scss";
import image1 from "./assets/Rectangle38.png";
import image2 from "./assets/image1.png";
import { useEffect } from "react";
// import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cardHomeStart } from "../../Store/Actions/cardHomeAction/cardHomeAction";
const Trending = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = () => {};
    dispatch(cardHomeStart());
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { cardHome } = useSelector((state) => state.cardHomeReducer);
  return (
    <>
      <div className={style.container}>
        <div>
          <p className={style.title1}>Trending Topic</p>
          <p className={style.title2}>{cardHome && cardHome.trendingCampaign[0].title}</p>
        </div>
        <div className={style.container1}>
          <div>
            <img src={cardHome && cardHome.trendingCampaign[0].image} alt="rectangle33" className={style.main_image} />
          </div>
          <div>
            <div>
              <img src={thick} alt="doublethick" />
            </div>
            <p className={style.paragraph}>{cardHome && cardHome.trendingCampaign[0].story}</p>
            <div>
              <div className={style.thickright}>
                <img src={thick2} alt="doublethick" />
              </div>
            </div>
            <div className={style.author}>
              <div>
                <img src={cardHome && cardHome.trendingCampaign[0].user.image} alt="author" className={style.author_image} />
              </div>
              <div className={style.text_author}>
                <h3 className={style.text}>{cardHome && cardHome.trendingCampaign[0].user.name}</h3>
                <p className={style.text}>Fundraiser</p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.latest_card}>
          <p className={style.title1}>New</p>
          <p className={style.title2}>The latest people who need your help</p>
          <div>
            <div className={style.list_container}>
              {cardHome && cardHome.newCampaign.map((item) => <Card image={item.image} category={item.category.category} title={item.title} author={item.user.name} raised={item.collected} goal={item.goal} />)}
            </div>
          </div>
        </div>
        <div className={style.section_bottom}>
          <div>
            <p className={style.title2}>Spread kindness anytime, anywhere</p>
          </div>
          <div className={style.image_section}>
            <img src={image1} alt="section" />
            <div>
              <p className={style.title3}>Available now</p>
              <img src={image2} alt="apps" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trending;
