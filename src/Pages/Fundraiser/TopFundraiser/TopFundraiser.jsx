import styles from "./TopFundraiser.module.scss";
import image from "../assets/img.png";
import fundraiser from "../assets/fundraiser.png";
import ModalUpdateCampaign from "../Modal/UpdateCampaign";
// import { Link } from "react-router-dom";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";
import SettingsIcon from "@mui/icons-material/Settings";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function TopFundraiser() {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    marginBottom: 20,
    marginRight: 30,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
    },
  }));

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [show, setShow] = useState(false);

  return (
    <div>
      <div className={styles.topFundraiser}>
        <div className={styles.fundraiser}>
          <div className={styles.settingFundraiser}>
            <h1>Aid for necessary items to help our country</h1>
            <div className={styles.dropdown}>
              <Button aria-controls="basic-menu" aria-haspopup="true" aria-expanded={open ? "true" : undefined} onClick={handleClick} sx={{ color: "black" }}>
                <SettingsIcon />
                <ArrowDropDownIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>Edit</MenuItem>
                <MenuItem onClick={handleClose}>Close Campaign</MenuItem>
                <MenuItem onClick={handleClose}>Delete</MenuItem>
              </Menu>
            </div>
          </div>
          <img src={image} alt="" />
        </div>
        <div className={styles.cardFundraiser}>
          <h3>IDR 30.000.000</h3>
          <p>IDR 10.000.000 remaining</p>
          <p>IDR 10.000.000 available</p>
          <BorderLinearProgress variant="determinate" value={80} />
          <p className={styles.goal}>from IDR 50.000.000 goal</p>
          <div className={styles.cardProfile}>
            <img src={fundraiser} alt="" />
            <div className={styles.cardTitleProfile}>
              <h4>Dian Endang</h4>
              <p>Fundraiser</p>
            </div>
          </div>
          <div className={styles.smallCard}>
            <div className={styles.listCard}>
              <h4>12</h4>
              <p>Days left</p>
            </div>
            <div className={styles.listCard}>
              <h4>132</h4>
              <p>Donation</p>
            </div>
            <div className={styles.listCard}>
              <h4>232</h4>
              <p
                style={{
                  paddingLeft: "10px",
                }}
              >
                Share
              </p>
            </div>
          </div>
          <div className={styles.buttonCard}>
            <button className={styles.buttonUp}>SHARE</button>
            <button onClick={() => setShow(true)} className={styles.buttonDown}>
              CAMPAIGN UPDATE
            </button>
            <ModalUpdateCampaign onClose={() => setShow(false)} show={show} />
          </div>
        </div>
      </div>
    </div>
  );
}
