import React from "react";
import "./widget.scss";
import users from "../../img/users.png";
import active_user from "../../img/active_user.png";
import users_with_loans from "../../img/users_with_loans.png";
import users_with_savings from "../../img/users_with_savings.png";

const Widget = ({ type }) => {
  let data;

  switch (type) {
    case "users":
      data = {
        title: "USERS",
        isMoney: false,
        icon: <img src={users} alt="users" />,
        amount: "2453",
      };
      break;

    case "active_users":
      data = {
        title: "ACTIVE USERS",
        isMoney: false,
        icon: (
          <img
            src={active_user}
            alt="active_user"
          />
        ),
        amount: "2453",
      };
      break;

    case "users_with_loans":
      data = {
        title: "USERS WITH LOANS",
        isMoney: false,
        icon: <img src={users_with_loans} alt="users_with_loans" />,
        amount: "12453",
      };
      break;

    case "users_with_savings":
      data = {
        title: "USERS WITH SAVINGS",
        isMoney: false,
        icon: <img src={users_with_savings} alt="users_with_savings" />,
        amount: "102453",
      };
      break;

    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <div className='icon'>{data.icon}</div>
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {data.amount}
        </span>
      </div>
    </div>
  );
};

export default Widget;
