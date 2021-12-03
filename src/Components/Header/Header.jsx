import React from 'react'
import styles from "./Header.module.scss";
import Logo from "./assets/Logo.png";
import {Modal, Box} from '@mui/material'
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import Login from '../Login/Login'
import Register from '../Register/Register'

const styleRegister = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: '#F1EDE4',
  boxShadow: 24,
  p: 4,
  pt: '120px',
  pb: '110px'
};

const styleLogin = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: '#F1EDE4',
  boxShadow: 24,
  p: 4,
  pt: '60px',
  pb: '100px'
};



export default function Header() {
  const [openLogin, setOpenLogin] = React.useState()
  const handleOpen = () => setOpenLogin(true);
  const handleClose = () => setOpenLogin(false);

  const [openRegister, setOpenRegister] = React.useState()
  const handleOpenRegister = () => setOpenRegister(true);
  const handleCloseRegister = () => setOpenRegister(false);


  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={Logo} alt="TaliKasih" />
      </div>
      <div className={styles.Bar}>
        <div className={styles.search}>
          <SearchIcon className={styles.icon} />
          <input className={styles.input} placeholder="Search" />
        </div>
        <div className={styles.listBar}>
          <span></span>
          <Link to="#" onClick={handleOpen}>Login</Link>
          <Modal
            open={openLogin}
            onClose={handleClose}
            >
            <Box sx={styleLogin}>
              <Login />
            </Box>
              </Modal>
          <span></span>
          <Link to="#" onClick={handleOpenRegister}>Register</Link>
          <Modal
            open={openRegister}
            onClose={handleCloseRegister}
            >
            <Box sx={styleRegister}>
              <Register />
            </Box>
              </Modal>
        </div>
      </div>
    </div>
  );
}
