import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './singleUser.scss'
import {Link} from 'react-router-dom'
import back_arrow from '../../img/back_arrow.png'
import user_avatar from '../../img/user_avatar.png'
import star1 from '../../img/star1.png'
import star2 from '../../img/star2.png'

export default function SingleUser() {
  return (
    <div className='singleUser'>
      <Sidebar />

      <div className="singleUserContainer">
        <Navbar />

        <Link className='link' to='/adduser'>
        <div className="back">
          <img className='backImg' src={back_arrow} alt="" />
          <span className='backUsers'>Back to Users</span>
        </div>
        </Link>

        <div className="userDetailsContainer">
          <div className="userDetails">User Details</div>

          <div className="btnContainer">
            <button className="blacklistUser">BLACKLIST USER</button>
            <button className="activateUser">ACTIVATE USER</button>
          </div>
        </div>

        <div className="userInfoHeader">
          <div className="userInfoHeaderTop">
            <div className="name">
                <img className="dp" src={user_avatar} alt="" />
           
              <div className="dpName">
                <div className="dpFullName">Grace Effiom</div>
                <div className="dpFullDesc">LSQFfS87g90</div>
              </div>
            </div>

            <div className="usersTier">
              <span className="usersTiertxt">Users Tier</span>
              <div className="star">
                <img className='starImg' src={star1} alt="star1" />
                <img className='starImg' src={star2} alt="star2" />
                <img className='starImg' src={star2} alt="star2" />
              </div>
            </div>
            <div className="usersBal">
              <span className="bal">₦200,000.00</span>
              <span className="balDesc">9912345678/Providus Bank</span>
            </div>
          </div>

          <div className="userInfoHeaderBottom">
            
            <span className='genDetails'>General Details</span>
            <div className="otherDetails">
            <span className='docz'>Documents</span>
            <span className='docz'>Bank Details</span>
            <span className='docz'>Loans</span>
            <span className='docz'>Savings</span>
            <span className='docz'>App and Systems</span>
            </div>
            
            <span className='doc'>Documents</span>
            <span className='bank'>Bank Details</span>
            <span className='loan'>Loans</span>
            <span className='saving'>Savings</span>
            <span className='app'>App and Systems</span>
          </div>
        </div>

        <div className="userInfoBody">
          <div className="bodyInfo">
            <div className="bodyInfoTitle">Personal Information</div>
            <div className="bodyInfoDesc">
              <div className="bodyInfoDescDetails">
                <span className="bodyInfoDescDetails1">FULL NAME</span>
                <span className="bodyInfoDescDetails2">Grace Effiom</span>
              </div>

              <div className="bodyInfoDescDetails">
                <span className="bodyInfoDescDetails1">PHONE NUMBER</span>
                <span className="bodyInfoDescDetails2">07060780922</span>
              </div>

              <div className="bodyInfoDescDetails">
                <span className="bodyInfoDescDetails1">EMAIL ADDRESS</span>
                <span className="bodyInfoDescDetails2">grace@gmail.com</span>
              </div>

              <div className="bodyInfoDescDetails">
                <span className="bodyInfoDescDetails1">BVN</span>
                <span className="bodyInfoDescDetails2">07060780922</span>
              </div>

              <div className="bodyInfoDescDetails">
                <span className="bodyInfoDescDetails1">MARITAL STATUS</span>
                <span className="bodyInfoDescDetails2">Single</span>
              </div>

              <div className="bodyInfoDescDetails">
                <span className="bodyInfoDescDetails1">CHILDREN</span>
                <span className="bodyInfoDescDetails2">none</span>
              </div>

              <div className="bodyInfoDescDetails">
                <span className="bodyInfoDescDetails1">TYPE OF RESIDENCE</span>
                <span className="bodyInfoDescDetails2">Parent’s Apartment</span>
              </div>
            </div>
          </div>

          <hr />

          <div className="bodyInfo">
            <div className="bodyInfoTitle">Education and Employment</div>
            <div className="bodyInfoDesc">
              <div className="bodyInfoDescDetails">
                <span className="bodyInfoDescDetails1">LEVEL OF EDUCATION</span>
                <span className="bodyInfoDescDetails2">B.Sc</span>
              </div>

              <div className="bodyInfoDescDetails">
                <span className="bodyInfoDescDetails1">EMPLOYMENT STATUS</span>
                <span className="bodyInfoDescDetails2">Employed</span>
              </div>

              <div className="bodyInfoDescDetails">
                <span className="bodyInfoDescDetails1">SECTOR OF EMPLOYMENT</span>
                <span className="bodyInfoDescDetails2">FinTech</span>
              </div>

              <div className="bodyInfoDescDetails">
                <span className="bodyInfoDescDetails1">DURATION OF EMPLOYMENT</span>
                <span className="bodyInfoDescDetails2">2 years</span>
              </div>

              <div className="bodyInfoDescDetails">
                <span className="bodyInfoDescDetails1">OFFICIAL EMAIL</span>
                <span className="bodyInfoDescDetails2">grace@gmail.com</span>
              </div>

              <div className="bodyInfoDescDetails">
                <span className="bodyInfoDescDetails1">MONTHLY INCOME</span>
                <span className="bodyInfoDescDetails2">₦200,000.00- ₦400,000.00</span>
              </div>

              <div className="bodyInfoDescDetails">
                <span className="bodyInfoDescDetails1">LOAN REPAYMENT</span>
                <span className="bodyInfoDescDetails2">40,000</span>
              </div>
            </div>
          </div>

          <hr />

          <div className="bodyInfo">
            <div className="bodyInfoTitle">Socials</div>
            <div className="bodyInfoDesc">
              <div className="bodyInfoDescDetails">
                <span className="bodyInfoDescDetails1">TWITTER</span>
                <span className="bodyInfoDescDetails2">@grace_effiom</span>
              </div>

              <div className="bodyInfoDescDetails">
                <span className="bodyInfoDescDetails1">FACEBOOK</span>
                <span className="bodyInfoDescDetails2">Grace Effiom</span>
              </div>

              <div className="bodyInfoDescDetails">
                <span className="bodyInfoDescDetails1">INSTAGRAM</span>
                <span className="bodyInfoDescDetails2">@grace_effiom</span>
              </div>
            </div>
          </div>

          <hr />

          <div className="bodyInfo">
            <div className="bodyInfoTitle">Guarantor</div>
            <div className="bodyInfoDesc">
              <div className="bodyInfoDescDetails">
                <span className="bodyInfoDescDetails1">FULL NAME</span>
                <span className="bodyInfoDescDetails2">Debby Ogana</span>
              </div>

              <div className="bodyInfoDescDetails">
                <span className="bodyInfoDescDetails1">PHONE NUMBER</span>
                <span className="bodyInfoDescDetails2">07060780922</span>
              </div>

              <div className="bodyInfoDescDetails">
                <span className="bodyInfoDescDetails1">EMAIL ADDRESS</span>
                <span className="bodyInfoDescDetails2">debby@gmail.com</span>
              </div>

              <div className="bodyInfoDescDetails">
                <span className="bodyInfoDescDetails1">RELATIONSHIP</span>
                <span className="bodyInfoDescDetails2">Sister</span>
              </div>
            </div>
          </div>

          <hr />
          <div className="bodyInfo">
            <div className="bodyInfoTitle"></div>
            <div className="bodyInfoDesc">
              <div className="bodyInfoDescDetails">
                <span className="bodyInfoDescDetails1">FULL NAME</span>
                <span className="bodyInfoDescDetails2">Debby Ogana</span>
              </div>

              <div className="bodyInfoDescDetails">
                <span className="bodyInfoDescDetails1">PHONE NUMBER</span>
                <span className="bodyInfoDescDetails2">07060780922</span>
              </div>

              <div className="bodyInfoDescDetails">
                <span className="bodyInfoDescDetails1">EMAIL ADDRESS</span>
                <span className="bodyInfoDescDetails2">debby@gmail.com</span>
              </div>

              <div className="bodyInfoDescDetails">
                <span className="bodyInfoDescDetails1">RELATIONSHIP</span>
                <span className="bodyInfoDescDetails2">Sister</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
