import './Navbar.css'

const Navbar = () => {
    return (
        <div className='nav-parent'>
            <ul className='navbar'>
                <li>Home</li>
                <li>About</li>
                <li>Membership</li>
                <li>Pricing</li>
               
            </ul>
            <ul className='right-content'>
                <li>Offer</li>
                <li> <button className='btn-primary'>Course</button> </li>
            </ul>
        </div>
    );
};

export default Navbar;