import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './home.scss'
import Widget from '../../components/widget/Widget'
import Table from '../../components/userTable/Table'
import { FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='home'>
        <Sidebar />

         <div className="homeContainer">
          <Navbar />
          <div className='userDash'>
            <Link className='link' to='/singleUser'>
           <span>Users</span> 
           </Link>
           
           <Link to='/addUser'>
           <span className='addIcon'><FaUserPlus /></span> 
           </Link>
          </div>
          <div className='widgets'>
            <Widget type='users' />
            <Widget type='active_users' />
            <Widget type='users_with_loans' />
            <Widget type='users_with_savings' />
          </div>
         
            <Table />
        </div>
    </div>
  )
}
