import './Banner.css'
import BannerImage from '../../assets/images/bannerImg.png'
import circle from '../../assets/images/final-circle.png'
import elips from '../../assets/images/Ellipse.png'
import elips2 from '../../assets/images/Ellipse2.png'
import girl from '../../assets/images/girlBanner.png'
import girl2 from '../../assets/images/femaleHero.png'
import halfCircle from '../../assets/images/halfCircle.png'

import React from 'react'
import BookingForm from '../../Component/BookingForm/BookingForm'

const Banner = ({paragraph,mainHeader,subHeader,isBanner ,breakWord,isBooking}) => {
 
  const hasBreakWord = mainHeader.includes(breakWord);
  const headerParts = hasBreakWord ? mainHeader.split(breakWord) : [mainHeader];
  console.log(headerParts.length);
  console.log(headerParts)
    return (
     <section  className={`main-container ${!isBanner && 'conditionMargin'}`}>
      
        <div className= {` ${isBanner?'container  ':'conditionalContainer'}`}>


          {/*================ banner text================== */}
          
          <div className={`banne-main-text  ${isBooking && 'bookingsStyle'} `}>
            <img className='elips' src={elips} alt="" />
            <img className='banner-elips2' src={elips2} alt="" />
            
          <p className='banner-text'> {subHeader} </p>
          <h2 className={` ${!isBanner ?'banner-title2':'banner-title'}`}>
            {headerParts.map((part, index) => (
              <React.Fragment key={index}>
                {part}
                {index !== headerParts.length-1  && <br />}
              </React.Fragment>
            ))}
          </h2>
       { isBanner &&  <h2 className='subtitle'>For Student</h2>}
          
          <p> {paragraph} </p>

  {    !isBanner &&    <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>}


       { isBanner ?  <button className='bannerBtn'>Sign Up</button>:  <button className='bannerBtn'>Explore More</button>
       
      
      
      }

          </div>

          {/* =====================banner text end============================= */}
 
 {/* ======================booking component item=========================================== */}
 <div className={`${isBooking && 'bookingFormPosition'}`}>
           { isBooking &&
            <div>
              <BookingForm></BookingForm>
            </div>
           }

           {/* ================booking componet form end=============== */}


           {/*============= image========================== */}
        
         {/* ==================right side image based on banner ============================= */}
     
       
    
        <div className='image-container'>
      {   isBanner ? <>
      
      
        <img  src={BannerImage} alt="" />
          <img className='circle' src={circle} alt="" />
      
      
      </>: 
      <div>
      
      {  isBooking ?  <div style={{position:'relative'}}>
 
        <img className='discountHeroImg' src={girl2} alt="" />
        <img  className='halfCircle' src={halfCircle} alt="" />


      </div>:  <div style={{position:'relative'}}>

      <img className='discountHeroImg' src={girl} alt="" /> 
      
   
      </div>  }
      
      
      </div>
        
        }
           
  


   </div>

   </div>
       
        </div>
     </section>
    );
};

export default Banner;