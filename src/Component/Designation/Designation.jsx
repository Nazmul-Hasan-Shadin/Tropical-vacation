// import './Designation.css'
import SingleDesignation from './SingleDesignation';
import designnation1 from '../../assets/designation/desig1.png'
import designnation2 from '../../assets/designation/desig2.png'
import designnation3 from '../../assets/designation/desig3.png'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';




const Designation = () => {
    return (
     <div className='hoo'>
      <h2 style={{marginBottom:'10px'}} className='designation-title'>Our Designation</h2>
          
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        navigation
       
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper   "
      >


             {/* <div className='designations-container'>
         <SingleDesignation 
         university={'cambridge, Massachsetts,Uk'} mainUniversity={'Harvard University'} image={designnation1}></SingleDesignation>
         <SingleDesignation 
         university={'Oxford, California'}
          mainUniversity={'Oxford University'} 
          image={designnation2}>

          </SingleDesignation>

          <SingleDesignation 
         university={'standford, California'}
          mainUniversity={'Stanford University'} 
          image={designnation3}>

          </SingleDesignation>

          <SingleDesignation 
         university={'standford, California'}
          mainUniversity={'Stanford University'} 
          image={designnation3}>

          </SingleDesignation> 





        </div> */}



        <SwiperSlide>
 
        <SingleDesignation 
         university={'cambridge, Massachsetts,Uk'} mainUniversity={'Harvard University'} image={designnation1}></SingleDesignation>

        </SwiperSlide>

        <SwiperSlide>
        <SingleDesignation 
         university={'Oxford, California'}
          mainUniversity={'Oxford University'} 
          image={designnation2}>

          </SingleDesignation>
        </SwiperSlide>


      <SwiperSlide>

      <SingleDesignation 
         university={'standford, California'}
          mainUniversity={'Stanford University'} 
          image={designnation3}>

          </SingleDesignation>
      </SwiperSlide>

      <SwiperSlide>
      <SingleDesignation 
         university={'standford, California'}
          mainUniversity={'Stanford University'} 
          image={designnation3}>

          </SingleDesignation> 
      </SwiperSlide>
 
        </Swiper>
 
         </div>
    );
};

export default Designation;