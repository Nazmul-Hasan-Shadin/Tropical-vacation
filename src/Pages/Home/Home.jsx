import React from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import Banner from '../../Component/Banner/Banner';
import TropicalAdvancture from '../../Component/TropicalAdvancture/TropicalAdvancture';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>

            <TropicalAdvancture></TropicalAdvancture>
        </div>
    );
};

export default Home;