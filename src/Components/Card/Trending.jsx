import React from "react";
import Image from "./assets/Rectangle33.png";
import thick from "./assets/thick.png";
import thick2 from "./assets/thick2.png";
import style from "./Trending.module.scss";
import Author from "./assets/Author.png";
import image1 from "./assets/Rectangle38.png";
import image2 from "./assets/image1.png";
import Card from "./Card";
import data from "./data";
import { useState, useEffect } from "react";
const Trending = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getData = () => {
      setList(data.campaign);
    };

    getData();
  }, []);
  return (
    <>
      <div className={style.container}>
        <div>
          <p className={style.title1}>Trending Topic</p>
          <p className={style.title2}>Clean Water For Country Side Region</p>
        </div>
        <div className={style.container1}>
          <div>
            <img src={Image} alt="rectangle33" />
          </div>
          <div>
            <div>
              <img src={thick} alt="doublethick" />
            </div>
            <p className={style.paragraph}>
              Id praesent imperdiet lectus scelerisque id.
              <br />
              Proin netus amet, viverra consequat consequat
              <br />
              consectetur dignissim. Erat at volutpat et ac.
              <br />
              Ullamcorper urna, elementum bibendum donec
              <br />
              at mauris arcu, quam aenean.
            </p>
            <div>
              <div className={style.thickright}>
                <img src={thick2} alt="doublethick" />
              </div>
            </div>
            <div className={style.author}>
              <div>
                <img src={Author} alt="author" />
              </div>
              <div className={style.text_author}>
                <h3 className={style.text}>Dian Endang</h3>
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
              {list.map((item) => (
                <Card id={item.id} image={item.image} category={item.category} title={item.title} author={item.author} data_funding={item.data_funding} raised={item.raised} goal={item.goal} />
              ))}
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
