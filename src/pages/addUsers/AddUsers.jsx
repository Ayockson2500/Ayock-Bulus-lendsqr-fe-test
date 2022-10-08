import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './addUsers.scss'
import Widget from '../../components/widget/Widget'
import Table from '../../components/userTable/Table'
import blacklist_user from '../../img/blacklist_user.png'
import view_details from '../../img/view_details.png'
import activate_user from '../../img/activate_user.png'

export default function Users() {
  return (
    <div className='addUsers'>
      <Sidebar />

      <div className="addUsersContainer">
        <Navbar />
        <div className='addUsersDash'>Users</div>
        <div className='widgets'>
          <Widget type='users' />
          <Widget type='active_users' />
          <Widget type='users_with_loans' />
          <Widget type='users_with_savings' />
        </div>

        <div className='listContainer'>
          <Table />

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
              <input type="text" placeholder='User' />
            </div>

            <div className="addUsersOrg">
              <label>Email </label>
              <input type="email" placeholder='Email' />
            </div>

            <div className="addUsersOrg">
              <label>Date </label>
                <input type="date" placeholder='Date' />
            </div>

            <div className="addUsersOrg">
              <label>Phone Number </label>
              <input type="number" placeholder='Phone Number' />
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
              <button className='reset'>Reset</button>
              <button className='filter'>Filter</button>
            </div>
          </div>

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
  )
}
