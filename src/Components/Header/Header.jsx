import styles from "./Header.module.scss";
import Logo from "./assets/Logo.png";
import { useState, useRef, useEffect, } from "react";
import { useDispatch} from "react-redux";
import { Link, useLocation } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { Modal, Box } from "@mui/material";
import Login from "../Login/Login";
import Register from "../Register/Register";
import { ProfileAction } from "../../Store/Actions/profile";
// import profileReducer from "../../Store/Reducers/profile";

export default function Header() {
  const Token = localStorage.getItem("token");
  const dispatch = useDispatch();
  useEffect(() => {
    if (Token) {
      dispatch(ProfileAction());
    }
  }, []);

  // const {profile} = useSelector((state) => state.profile.profile);
  // console.log(profile, 'myProfile');
  // const [Profile, setProfile] = useState({
  //   name: "",
  //   email: "",
  //   image: null,
  //   bankName: "",
  //   bankAccount: "",
  // });

  // useEffect(() => {
  //   dispatch(profileReducer())
  // }, []);

  const [search, setSearch] = useState(false);
  const inputref = useRef();
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
  console.log(location);
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
        <img src={Logo} alt="TaliKasih" />
      </div>
      {!Token ? (
        <div className={styles.barBeforeAuth}>
          <div className={styles.search}>
            <SearchIcon className={styles.icon} />
            <input
              onFocus={() => setSearch(true)}
              onBlur={() => setSearch(false)}
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
                <Login />
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
              <button className={styles.campaign}>CREATE CAMPAIGN</button>
              <button className={styles.donate}>DONATE</button>
            </div>
          ) : null}
          <div className={styles.search}>
            <SearchIcon className={styles.icon} />
            <input
              onFocus={() => setSearch(true)}
              onBlur={() => setSearch(false)}
              className={styles.input}
              placeholder="Search"
              ref={inputref}
            />
          </div>
          <div className={styles.barProfile}>
            <span></span>
            <Link to="/profile" >Hi, </Link>
          </div>
        </div>
      )}
    </div>
  );
}
