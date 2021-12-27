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
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import SettingsIcon from "@mui/icons-material/Settings";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Skeleton from "@mui/material/Skeleton";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getDetailCampaignAction } from "../../Store/Actions/Campaign/campaign";
import { ProfileAction } from "../../Store/Actions/profile";
import { relatedCampaignAction } from "../../Store/Actions/Campaign/campaign";
import { deleteCampaignAction } from "../../Store/Actions/Campaign/campaign";
import { useNavigate } from "react-router-dom";

export default function Campaign() {
  const navigate = useNavigate();
  dayjs.extend(relativeTime);
  const { id, categoryId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ProfileAction());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    dispatch(relatedCampaignAction());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    dispatch(getDetailCampaignAction(id));
  }, [dispatch, id, categoryId]);

  const campaignUser = useSelector((state) => state.profileReducer.profile);
  const { detailCampaign } = useSelector(
    (state) => state.campaignReducer.detailCampaign
  );
  console.log("detailCampaign", detailCampaign);
  const { related } = useSelector((state) => state.relatedCampaignReducer);
  console.log("related", related);
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    marginBottom: 15,
    marginRight: 30,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
    },
  }));

  const [loadingCampaign, setLoadingCampaign] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoadingCampaign(false), 5000);
  });

  // eslint-disable-next-line no-unused-vars
  const [list, setList] = useState([]);
  console.log(dayjs(detailCampaign?.dueDate).toNow(true) === "a month");

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
    dispatch(deleteCampaignAction(id));
    setAnchorEl(null);
  };

  return (
    <>
      {/* Top Campaign Components*/}
      {loadingCampaign ? (
        <div
          className={styles.topCampaign}
          styles={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className={styles.campaign}>
            <Skeleton sx={{ height: "100px" }} variant="text" />
            <Skeleton
              className={styles.campaignSkelleton}
              animation="wave"
              variant="rectangular"
            />
          </div>
          <div>
            <div className={styles.setting}>
              {detailCampaign?.userId === campaignUser?.id ? (
                <Skeleton
                  className={styles.settingSkelleton}
                  variant="rectangular"
                />
              ) : null}
            </div>
            <div className={styles.cardCampaign}>
              <div className="skel1">
                <Skeleton variant="text" width="200px" />
                <Skeleton variant="text" width="200px" />
                <Skeleton variant="text" width="200px" />
                <Skeleton variant="text" className={styles.linearSkelleton} />
                <Skeleton variant="text" width="200px" />
                <div className={styles.cardProfile}>
                  <Skeleton variant="rectangular" width="50px" height="50px" />
                  <div className={styles.cardTitleProfile}>
                    <Skeleton variant="text" width="200px" />
                    <Skeleton variant="text" width="200px" />
                  </div>
                </div>
                <div className={styles.smallCard}>
                  <div className={styles.listCard}>
                    <Skeleton
                      variant="rectangular"
                      className={styles.cardSkelleton}
                    />
                  </div>
                  <div className={styles.listCard}>
                    <Skeleton
                      variant="rectangular"
                      className={styles.cardSkelleton}
                    />
                  </div>
                  <div className={styles.listCard}>
                    <Skeleton
                      variant="rectangular"
                      className={styles.cardSkelleton}
                    />
                  </div>
                </div>
                <div className={styles.buttonCard}>
                  <Skeleton
                    variant="rectangular"
                    width="300px;"
                    height="60px"
                  />
                </div>
                <div className={styles.buttonCard}>
                  <Skeleton
                    variant="rectangular"
                    width="300px;"
                    height="60px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.topCampaign}>
          <div className={styles.campaign}>
            <h1>{detailCampaign?.title}</h1>
            <img src={detailCampaign?.image} alt="" />
          </div>
          <div className={styles.setting}>
            {detailCampaign?.userId === campaignUser?.id && (
              <div className={styles.dropdownCampaign}>
                <Button
                  aria-controls="basic-menu"
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  sx={{ color: "black" }}
                >
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
                  <Link
                    to={`/edit-campaign/${id}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <MenuItem>Edit</MenuItem>
                  </Link>
                  <MenuItem>Close Campaign</MenuItem>
                  <MenuItem
                    onClick={() =>
                      dispatch(deleteCampaignAction(id), navigate("/profile"))
                    }
                  >
                    Delete
                  </MenuItem>
                </Menu>
              </div>
            )}
          </div>
          <div className={styles.cardCampaign}>
            <h3>IDR {detailCampaign?.collected}</h3>
            <p>
              IDR {detailCampaign?.goal - detailCampaign?.collected} remaining
            </p>
            <p>IDR {detailCampaign?.availSaldo} available</p>
            <BorderLinearProgress
              variant="determinate"
              value={(detailCampaign?.deviation / detailCampaign?.goal) * 100}
            />
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
                <h4>
                  {dayjs(detailCampaign?.dueDate).toNow(true) === "a month"
                    ? "30"
                    : dayjs(detailCampaign?.dueDate)
                        .fromNow(true)
                        .split(" ")[0]}
                </h4>
                <p>Days left</p>
              </div>
              <div className={styles.listCard}>
                <h4>
                  {detailCampaign?.donatur?.length
                    ? detailCampaign?.donatur?.length
                    : 0}
                </h4>
                <p>Donation</p>
              </div>
              <div className={styles.listCard}>
                <h4>{detailCampaign?.share}</h4>
                <p>Share</p>
              </div>
            </div>
            <div className={styles.buttonCard}>
              <button
                onClick={() => setShare(true)}
                className={styles.buttonUp}
              >
                SHARE
              </button>
              <Share onClose={() => setShare(false)} share={share} id={id} />
              {detailCampaign?.userId === campaignUser?.id ? (
                <>
                  <button
                    onClick={() => setShow(true)}
                    className={styles.buttonDown}
                  >
                    CAMPAIGN UPDATE
                  </button>
                  <ModalUpdateCampaign
                    onClose={() => setShow(false)}
                    show={show}
                    id={detailCampaign?.id}
                  />
                </>
              ) : (
                <Link to="/campaign/donate">
                  <button className={styles.buttonDown}>DONATE</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Read More Campaign */}
      <ReadMore />
      {/* Details Update Campaign Components */}
      <CampaignUpdate />
      {/* Donations Components*/}
      <Donation />
      {/* Comments Component */}
      <Comment />

      {/* Card Components */}
      <div className={styles.linkCardBottom}>
        <Link to="/discover">Related campaign</Link>
        <div className={styles.cardBottom}>
          {related?.map((item) => (
            <Card
              id={item.id}
              image={item.image}
              category={item.category.category}
              title={item.title}
              author={item.user.name}
              raised={item.jumlahCollected}
              goal={item.jumlahGoal}
            />
          ))}
        </div>
      </div>
    </>
  );
}
