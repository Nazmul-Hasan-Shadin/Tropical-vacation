import { useState } from 'react';
import './Navbar.css'
import { MdFormatListBulleted } from "react-icons/md";
const Navbar = () => {

    const [isActive, setIsActive] = useState(false);

    const handleIconClick = () => {
      setIsActive(!isActive);
    }

    return (
 <div className='nav-container'>
    <MdFormatListBulleted
        className='navIcon '
        style={{ fontSize: '26px' }}
        onClick={handleIconClick}
      />
            <div className={`nav-parent  hidden ${isActive?'active':'hidden'}`}>


        <ul className='navbar'>
            <li  >Home</li>
            <li>About</li>
            <li>Membership</li>
            <li>Pricing</li>
           
        </ul>
        <ul className='right-content'>
            <li>Offer</li>
            <li> <button className='btn-primary'>Course</button> </li>
        </ul>
    </div>
 </div>
    );
};

export default Navbar;