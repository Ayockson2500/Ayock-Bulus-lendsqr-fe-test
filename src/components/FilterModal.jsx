import React from "react";
import "./filterModal.scss"

const FilterModal = ({show}) => {
    if (!show) return null
  return (
    <div className="addUsersOrgCont">
      <div className="addUsersOrg">
        <label> Organization </label>
        <select name="">
          <option value="">Select</option>
          <option value="">Organization 1</option>
          <option value="">Organization 2</option>
          <option value="">Organization 3</option>
          <option value="">Organization 4</option>
        </select>
      </div>

      <div className="addUsersOrg">
        <label>Username </label>
        <input type="text" placeholder="User" />
      </div>

      <div className="addUsersOrg">
        <label>Email </label>
        <input type="email" placeholder="Email" />
      </div>

      <div className="addUsersOrg">
        <label>Date </label>
        <input type="date" placeholder="Date" />
      </div>

      <div className="addUsersOrg">
        <label>Phone Number </label>
        <input type="number" placeholder="Phone Number" />
      </div>

      <div className="addUsersOrg">
        <label>Status </label>
        <select name="" id="">
          <option value="">Select</option>
          <option value="">Active</option>
          <option value="">Inactive</option>
          <option value="">Pending</option>
          <option value="">Blacklisted</option>
        </select>
      </div>

      <div className="addUsersBtn">
        <button className="reset">Reset</button>
        <button className="filter">Filter</button>
      </div>
    </div>
  );
};

export default FilterModal;
