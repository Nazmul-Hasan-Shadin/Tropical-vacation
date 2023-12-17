import React from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import Banner from '../../Shared/Banner/Banner';
import TropicalAdvancture from '../../Component/TropicalAdvancture/TropicalAdvancture';
import Designation from '../../Component/Designation/Designation';
import Testimonial from '../../Component/Testimonials/Testimonial';
import Testimonials from '../Testimonials/Testimonials';
import Footer from '../../Component/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner
             isBanner={true}
             paragraph={'Embark on a journey to discover the unparalleled beauty of tropical paradises. '}
             
             mainHeader={`    Tropical  Destinations`}
             subHeader={'Discover the beauty of the tropics'}
             
             ></Banner>

            <TropicalAdvancture></TropicalAdvancture>
            <Designation></Designation> 
              
        <Banner 
        isBanner={false} 
        breakWord={'break'}
        mainHeader={'Student discounts   available. break Get Ready for some in the sun!'}
         subHeader={'Get 20% off for student'}
        
        
        
        
        >  </Banner>


   <Banner   
      isBooking={true} 
      breakWord={'break'}
      mainHeader={'Student discounts   available. break Get Ready for some in the sun!'}
       subHeader={'Get 20% off for student'}
      
   
   ></Banner>

<Testimonials></Testimonials>

<Footer></Footer>

          

 

        </div>
    );
};

export default Home;