import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./addUsers.scss";
import Widget from "../../components/widget/Widget";
import Table from "../../components/userTable/Table";
import blacklist_user from "../../img/blacklist_user.png";
import view_details from "../../img/view_details.png";
import activate_user from "../../img/activate_user.png";
import { useState, useEffect } from "react";
import useLocalStorage from "../../utils/useLocalStorage";

export default function Users() {
  const [users, setUsers] = useState([]);
  const { getItem } = useLocalStorage("users");

  useEffect(() => {
    setUsers(getItem());
  }, []);

  return (
    <div className="addUsers">
      <Sidebar />

      <div className="addUsersContainer">
        <Navbar />
        <div className="addUsersDash">Users</div>
        <div className="widgets">
          <Widget type="users" />
          <Widget type="active_users" />
          <Widget type="users_with_loans" />
          <Widget type="users_with_savings" />
        </div>

        <div className="listContainer">
          <Table tableData={users} />


          <div className="vert">
            <div className="viewDetails">
              <img src={view_details} alt="" />
              <span>View Details</span>
            </div>

            <div className="viewDetails">
              <img src={blacklist_user} alt="" />
              <span>Blacklist User</span>
            </div>

            <div className="viewDetails">
              <img src={activate_user} alt="" />
              <span>Activate User</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
