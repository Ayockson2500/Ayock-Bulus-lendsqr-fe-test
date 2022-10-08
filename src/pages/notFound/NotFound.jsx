import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './notFound.scss'

export default function NotFound() {
  return (
    <div className='notFound'>
        <Sidebar />

         <div className="notFoundCont">
          <Navbar />
          
          <div className="notFoundMsg">
            Page Not Found!
          </div>
        </div>
    </div>
  )
}
