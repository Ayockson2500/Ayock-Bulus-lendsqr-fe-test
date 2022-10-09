import { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Table from "../../components/userTable/Table";
import { FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getAllUsers } from "../../api/services/user";
import useLocalStorage from "../../utils/useLocalStorage";

export default function Home() {
  const [users, setUsers] = useState([]);
  const { getItem, setItem } = useLocalStorage("users");

  useEffect(() => {
    const usersData = getItem();
    if (usersData) {
      setUsers(usersData);
    } else {
      getAllUsers().then((res) => {
        setUsers(res.data);
        setItem(res.data);
      });
    }
  }, []);

  return (
    <div className="home">
      <Sidebar />

      <div className="homeContainer">
        <Navbar />
        <div className="userDash">
          <Link className="link" to="/singleUser">
            <span>Users</span>
          </Link>

          <Link to="/addUser">
            <span className="addIcon">
              <FaUserPlus />
            </span>
          </Link>
        </div>
        <div className="widgets">
          <Widget type="users" />
          <Widget type="active_users" />
          <Widget type="users_with_loans" />
          <Widget type="users_with_savings" />
        </div>

        <Table tableData={users} />
      </div>
    </div>
  );
}
