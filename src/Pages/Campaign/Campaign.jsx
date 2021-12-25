import styles from "./style/Campaign.module.scss";
import ReadMore from "./ReadMore/ReadMore";
import CampaignUpdate from "./CampaignUpdate/CampaignUpdate";
import Donation from "./Donation/Donation";
import Comment from "./Comment/Comment";
import Share from "../Fundraiser/Modal/Share";
import ModalUpdateCampaign from "../Fundraiser/Modal/UpdateCampaign";
import Card from "../../Components/Card/Card";
import data from "../../Components/Card/data";
import { styled } from "@mui/material/styles";
import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";
import SettingsIcon from "@mui/icons-material/Settings";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getDetailCampaignAction } from "../../Store/Actions/Campaign/campaign";
import { ProfileAction } from "../../Store/Actions/profile";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { discoverRelatedStart } from "../../Store/Actions/discoverAction/discoverRelatedAction";

export default function Campaign() {
  dayjs.extend(relativeTime);
  const { id, categoryId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ProfileAction());
    dispatch(discoverRelatedStart(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const campaignUser = useSelector((state) => state.profileReducer.profile);
  const discoverRelated = useSelector((state) => state.discoverRelatedReducer);
  console.log(discoverRelated);
  // eslint-disable-next-line no-unused-vars
  const RoleUser = window.location.pathname === "/profile";

  const { detailCampaign } = useSelector((state) => state.campaignReducer.detailCampaign);
  console.log("detailCampaign", detailCampaign);
  useEffect(() => {
    dispatch(getDetailCampaignAction(id));
  }, [dispatch, id, categoryId]);

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

  const [list, setList] = useState([]);

  useEffect(() => {
    const getData = () => {
      setList(data.campaign);
    };

    getData();
  }, []);

  const [share, setShare] = useState(false);
  const [show, setShow] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {/* Top Campaign Components*/}
      <div className={styles.topCampaign}>
        <div className={styles.campaign}>
          <div className={styles.setting}>
            <h1>{detailCampaign?.title}</h1>
            {detailCampaign?.userId === campaignUser?.id && (
              <div className={styles.dropdownCampaign}>
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
                  <Link to="/create" style={{ textDecoration: "none", color: "black" }}>
                    <MenuItem onClick={handleClose}>Edit</MenuItem>
                  </Link>
                  <MenuItem onClick={handleClose}>Close Campaign</MenuItem>
                  <MenuItem onClick={handleClose}>Delete</MenuItem>
                </Menu>
              </div>
            )}
          </div>
          <img src={detailCampaign?.image} alt="" />
        </div>
        <div className={styles.cardCampaign}>
          <h3>IDR {detailCampaign?.collected}</h3>
          <p>IDR {detailCampaign?.goal - detailCampaign?.collected} remaining</p>
          <p>IDR {detailCampaign?.availSaldo} available</p>
          <BorderLinearProgress variant="determinate" value={(detailCampaign?.deviation / detailCampaign?.goal) * 100} />
          <p className={styles.goal}>from IDR {detailCampaign?.goal} goal</p>
          <div className={styles.cardProfile}>
            <img src={detailCampaign?.user?.image} alt="" />
            <div className={styles.cardTitleProfile}>
              <h4>{detailCampaign?.user?.name}</h4>
              <Link to={`/fundraiser/${categoryId}/${id}`}>
                <p>Fundraiser</p>
              </Link>
            </div>
          </div>
          <div className={styles.smallCard}>
            <div className={styles.listCard}>
              <h4>{dayjs(detailCampaign?.dueDate).fromNow(true).split(" ")[0]}</h4>
              <p>Days left</p>
            </div>
            <div className={styles.listCard}>
              <h4>{detailCampaign?.donatur?.length ? detailCampaign?.donatur?.length : 0}</h4>
              <p>Donation</p>
            </div>
            <div className={styles.listCard}>
              <h4>{detailCampaign?.share}</h4>
              <p
                style={{
                  paddingLeft: "5px",
                }}
              >
                Share
              </p>
            </div>
          </div>
          <div className={styles.buttonCard}>
            <button onClick={() => setShare(true)} className={styles.buttonUp}>
              SHARE
            </button>
            <Share onClose={() => setShare(false)} share={share} />
            {detailCampaign?.userId === campaignUser?.id ? (
              <>
                <button onClick={() => setShow(true)} className={styles.buttonDown}>
                  CAMPAIGN UPDATE
                </button>
                <ModalUpdateCampaign onClose={() => setShow(false)} show={show} />
              </>
            ) : (
              <Link to={`/campaign/donate/${id}`}>
                <button className={styles.buttonDown}>DONATE</button>
              </Link>
            )}
          </div>
        </div>
      </div>
      );
      {/* Read More Campaign */}
      <ReadMore />
      {/* Detail Donor Components */}
      <CampaignUpdate />
      {/* Donations Components*/}
      <Donation />
      {/* Comments Component */}
      <Comment />
      {/* Card Components */}
      <div className={styles.linkCardBottom}>
        <Link to="#">Related campaign</Link>
        <div className={styles.cardBottom}>
          {list.map((item) => (
            <Card image={item.image} category={item.category} title={item.title} author={item.author} data_funding={item.data_funding} raised={item.raised} goal={item.goal} />
          ))}
        </div>
      </div>
    </>
  );
}
