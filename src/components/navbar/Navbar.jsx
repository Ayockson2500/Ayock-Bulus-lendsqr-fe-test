import React, { useContext, useState } from "react";
import "./navbar.scss";
import logo from "../../img/logo.png";
import userImage from "../../img/ayock.jpg"
import search from "../../img/search.png";
import notification_icon from "../../img/notification_icon.png";
import dp_down_arrow from "../../img/dp_down_arrow.png";
import {Link } from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext";
import {FaListUl} from 'react-icons/fa'
import Hambur from "../hambur/Hambur";


export default function Navbar() {
  const [hambur, setHambur] = useState(false)
  const {user} = useContext(AuthContext)
  return (
  <>
    <div className="navbar">
      <div className="wrapper">
        <FaListUl onClick={()=>setHambur(true)}className='hamburger' />
        <div className="search">
          <div className="searchInput">
            <input type="text" placeholder="Search for anything" />
          </div>
          <span className="searchIcon">
            <img src={search} alt="search" />
          </span>
        </div>

        <Link to='/' className='link'>
        <img className="logoContainer" src={logo} alt="logo" />
        </Link>

        <div className="items">
          <Link to='/singleUser' className='link'>
            <span className="docs">Docs</span>
          </Link>
          <img
            className="bellIcon"
            src={notification_icon}
            alt="notification_icon"
          />

          <div className="userImg">
            <img
              src={userImage}
              alt="userImg"
              className="userImg"
            />
          </div>

          <span className="username">Ayock</span>

          <div className="profile">
            <img src={dp_down_arrow} alt="dp_down_arrow" />
            <div className="options">
              <span>Profile</span>
              <span>Settings</span>
            </div>
          </div>
        </div>
      </div>
    </div>

   {hambur ? <Hambur setHambur={setHambur} /> : "" }
    </>
  );
}
