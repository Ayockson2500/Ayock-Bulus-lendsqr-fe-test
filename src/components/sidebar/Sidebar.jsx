import { useContext } from "react";
import "./sidebar.scss";
import logo from "../../img/logo.png";
import briefcaseSwitch from "../../img/sidebar/briefcaseSwitch.png";
import downArrow from "../../img/sidebar/downArrow.png";
import home from "../../img/sidebar/home.png";
import userfriends from "../../img/sidebar/user-friends.png";
import { AuthContext } from "../../context/AuthContext";
import { Link, NavLink } from "react-router-dom";
import logout from "../../img/sidebar/logout.png";

import {
  CustomerElements,
  BusinessElements,
  SettingsElements,
} from "./SidebarElements";

export default function Sidebar() {
  const { dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/home">
          <img className="logo" src={logo} alt="logo" />
        </Link>
      </div>

      <div className="center">
        <div className="swhOrg">
          <img src={briefcaseSwitch} alt="logo" />
          <span className="swhOrgText">Switch Organization</span>
          <img src={downArrow} alt="logo" />
        </div>
        <div>
          <ul>
            <li>
              <NavLink className="link" to="/home">
                <img className="icons" src={home} alt="logo" />
                <span>Dashboard</span>
              </NavLink>
            </li>
          </ul>
          <div>
          <p className="title mb-2">CUSTOMERS</p>
          <ul>
            <li className="border-left">
              <NavLink className="link" to="/addUser">
                <img className="icons" src={userfriends} alt="logo" />
                <span>Users</span>
              </NavLink>
            </li>
          </ul>
          </div>
          {CustomerElements.map((element, idx) => {
            return (
              <ul key={idx}>
                <li>
                  <img
                    className="icons"
                    src={element.icon}
                    alt={element.title}
                  />
                  <span>{element.title}</span>
                </li>
              </ul>
            );
          })}
        </div>
        <div>
          <p className="title">BUSINESSES</p>
          {BusinessElements.map((element, idx) => {
            return (
              <ul key={idx}>
                <li>
                  <img
                    className="icons"
                    src={element.icon}
                    alt={element.title}
                  />
                  <span>{element.title}</span>
                </li>
              </ul>
            );
          })}
        </div>
        <div>
        <p className="title">SETTINGS</p>
          {SettingsElements.map((element, idx) => {
            return (
              <ul key={idx}>
                <li>
                  <img
                    className="icons"
                    src={element.icon}
                    alt={element.title}
                  />
                  <span>{element.title}</span>
                </li>
              </ul>
            );
          })}
          <ul>
            <li style={{ marginBottom: "20px" }}>
              <img className="icons" src={logout} alt="logo" />
              <span onClick={handleLogout}>Log Out</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
