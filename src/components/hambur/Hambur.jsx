import { useContext } from "react";
import "./hambur.scss";
import logo from "../../img/logo.png";
import briefcaseSwitch from "../../img/sidebar/briefcaseSwitch.png";
import downArrow from "../../img/sidebar/downArrow.png";
import home from "../../img/sidebar/home.png";
import userfriends from "../../img/sidebar/user-friends.png";
import gurantor from "../../img/sidebar/gurantor.png";
import loans from "../../img/sidebar/loans.png";
import handshake from "../../img/sidebar/handshake.png";
import savings from "../../img/sidebar/savings.png";
import loanrequest from "../../img/sidebar/loanrequest.png";
import whitelist from "../../img/sidebar/whitelist.png";
import karma from "../../img/sidebar/karma.png";
import briefcaseOrg from "../../img/sidebar/briefcaseOrg.png";
import loanproducts from "../../img/sidebar/loanproducts.png";
import savingproduct from "../../img/sidebar/savingproduct.png"; 
import feeandcharges from "../../img/sidebar/feeandcharges.png";
import transactions from "../../img/sidebar/transactions.png";
import services from "../../img/sidebar/services.png";
import servicesacount from "../../img/sidebar/servicesacount.png";
import settlement from "../../img/sidebar/settlement.png";
import reports from "../../img/sidebar/reports.png";
import prefrence from "../../img/sidebar/prefrence.png";
import feeandpricing from "../../img/sidebar/feeandpricing.png";
import auditlogs from "../../img/sidebar/auditlogs.png";
import systemmesssage from "../../img/sidebar/systemmesssage.png";
import logout from "../../img/sidebar/logout.png";
import { AuthContext } from "../../context/AuthContext";
import {Link, NavLink } from 'react-router-dom';
import {FaTimes} from 'react-icons/fa'

export default function Hambur({setHambur}) {

  const {  dispatch } = useContext(AuthContext);

   const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="hambur">
      <div className="top">
        <Link to='/home'>
        <img className="logo" src={logo} alt='logo' />
        </Link>
        <FaTimes onClick={()=>setHambur(false)}className='hamburger' />

      </div>

      <div className="center">

        <div className="swhOrg">
          <img src={briefcaseSwitch} alt='logo' />
          <span className='swhOrgText'>Switch Org.</span>
          <img src={downArrow} alt='logo' />
        </div>

        <ul>
          
          <li style={{ marginTop: '30px', marginBottom: '25px' }}>
          <NavLink className='link' to='/home'>
            <img className="icons" src={home} alt='logo' />
            <span>Dashboard</span>
            </NavLink>
          </li>

          <p className="title">CUSTOMERS</p>
          
          <li>
          <NavLink className='link' to='/addUser'>
            <img className="icons" src={userfriends} alt='logo' />
            <span>Users</span>
            </NavLink>
          </li>

          <li>
            <img className="icons" src={gurantor} alt='logo' />
            <span>Guarantors</span>
          </li>

          <li>
            <img className="icons" src={loans} alt='logo' />
            <span>Loans</span>
          </li>

          <li>
            <img className="icons" src={handshake} alt='logo' />
            <span>Decision Models</span>
          </li>

          <li>
            <img className="icons" src={savings} alt='logo' />
            <span>Savings</span>
          </li>

          <li>
            <img className="icons" src={loanrequest} alt='logo' />
            <span>Loan Requests</span>
          </li>

          <li>
            <img className="icons" src={whitelist} alt='logo' />
            <span>Whitelist</span>
          </li>

          <li>
            <img className="icons" src={karma} alt='logo' />
            <span>Karma</span>
          </li>

          <p className="title">BUSINESSES</p>
          <li>
            <img className="icons" src={briefcaseOrg} alt='logo' />
            <span>Organization</span>
          </li>

          <li>
            <img className="icons" src={loanproducts} alt='logo' />
            <span>Loan Products</span>
          </li>

          <li>
            <img className="icons" src={savingproduct} alt='logo' />
            <span>Savings Products</span>
          </li>

          <li>
            <img className="icons" src={feeandcharges} alt='logo' />
            <span>Fees and Charges</span>
          </li>
          <li>
            <img className="icons" src={transactions} alt='logo' />
            <span>Transactions</span>
          </li>

          <li>
            <img className="icons" src={services} alt='logo' />
            <span>Services</span>
          </li>

          <li>
            <img className="icons" src={servicesacount} alt='logo' />
            <span>Service Account</span>
          </li>

          <li>
            <img className="icons" src={settlement} alt='logo' />
            <span>Settlements</span>
          </li>

          <li>
            <img className="icons" src={reports} alt='logo' />
            <span>Reports</span>
          </li>

          <p className="title">SETTINGS</p>
          <li>
            <img className="icons" src={prefrence} alt='logo' />
            <span>Prefrences</span>
          </li>

          <li>
            <img className="icons" src={feeandpricing} alt='logo' />
            <span>Fees and Pricing</span>
          </li>

          <li>
            <img className="icons" src={auditlogs} alt='logo' />
            <span>Audit Logs</span>
          </li>

          <li>
            <img className="icons" src={systemmesssage} alt='logo' />
            <span>Systems Messages</span>
          </li>

          <li style={{marginBottom:'20px'}}>
            <img className="icons" src={logout} alt='logo' />
            <span onClick={handleLogout}>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
