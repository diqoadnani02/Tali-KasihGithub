/* eslint-disable no-unused-vars */
import styles from "./Header.module.scss";
import Logo from "./assets/Logo.png";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { Modal, Box } from "@mui/material";
import Login from "../Login/Login";
import Register from "../Register/Register";
import { ProfileAction } from "../../Store/Actions/profile";

export default function Header({ inputSearch, setInputSearch }) {
  const Token = localStorage.getItem("token");
  const dispatch = useDispatch();
  useEffect(() => {
    if (Token) {
      dispatch(ProfileAction());
    }
  }, [Token, dispatch]);

  const profile = useSelector((state) => state.profileReducer.profile);
  console.log(profile, "myProfile");

  const [search, setSearch] = useState(false);
  const inputref = useRef(null);
  console.log(inputref.current);

  const styleLogin = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: "#F1EDE4",
    boxShadow: 24,
    p: 4,
    pt: "60px",
    pb: "100px",
  };

  const styleRegister = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#F1EDE4",
    width: 400,
    boxShadow: 24,
    p: 4,
    pt: "120px",
    pb: "110px",
  };

  const location = useLocation();
  console.log(inputSearch);
  const Home = window.location.pathname === "/";

  const [openLogin, setOpenLogin] = useState();
  const handleOpen = () => setOpenLogin(true);
  const handleClose = () => setOpenLogin(false);
  const [openRegister, setOpenRegister] = useState();
  const handleOpenRegister = () => setOpenRegister(true);
  const handleCloseRegister = () => setOpenRegister(false);
  

  
  return (
    <div className={Home ? styles.headerBeforeAuth : styles.headerAfterAuth}>
      <div className={styles.logo}>
        <Link to="/">
        <img src={Logo} alt="TaliKasih" />
        </Link>
      </div>
      {!Token ? (
        <div className={styles.barBeforeAuth}>
          <div className={styles.search}>
            <SearchIcon className={styles.icon} />
            <input
              onFocus={() => setSearch(true)}
              onBlur={() => setSearch(false)}
              value={inputSearch}
              onChange={(e) => {
                e.preventDefault();

                setInputSearch(e.target.value);
              }}
              className={styles.input}
              placeholder="Search"
            />
          </div>
          <div className={styles.listBar}>
            <span></span>
            <Link to="#" onClick={handleOpen}>
              Login
            </Link>
            <Modal open={openLogin} onClose={handleClose}>
              <Box sx={styleLogin}>
                <Login handleClose={handleClose} />
              </Box>
            </Modal>
            <span></span>
            <Link to="#" onClick={handleOpenRegister}>
              Register
            </Link>
            <Modal open={openRegister} onClose={handleCloseRegister}>
              <Box sx={styleRegister}>
                <Register />
              </Box>
            </Modal>
          </div>
        </div>
      ) : (
        <div className={styles.BarAfterAuth}>
          {!search ? (
            <div className={styles.buttonNavbar}>
              <Link to="/create">
                <button className={styles.campaign}>CREATE CAMPAIGN</button>
              </Link>
              <Link to="/campaign/donate">
                <button className={styles.donate}>DONATE</button>
              </Link>
            </div>
          ) : null}
          <div className={styles.search}>
            <SearchIcon className={styles.icon} />
            <input
              onFocus={() => setSearch(true)}
              onBlur={() => setSearch(false)}
              value={inputSearch}
              onChange={(e) => {
                e.preventDefault();

                setInputSearch(e.target.value);
              }}
              className={styles.input}
              placeholder="Search"
              ref={inputref}
            />
          </div>
          <div className={styles.barProfile}>
            <span></span>
            <Link to="/profile">Hi, {profile.name} </Link>
          </div>
        </div>
      )}
    </div>
  );
}
