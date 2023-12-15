import './Banner.css'
import BannerImage from '../../assets/images/bannerImg.png'
import circle from '../../assets/images/final-circle.png'
import elips from '../../assets/images/Ellipse.png'
import elips2 from '../../assets/images/Ellipse2.png'
import girl from '../../assets/images/girlBanner.png'

const Banner = ({paragraph,mainHeader,subHeader,isBanner }) => {
    return (
     <section className='main-container'>
      
        <div className= {` ${isBanner?'container':'conditionalContainer'}`}>


          {/*================ banner text================== */}
          
          <div className='banne-main-text'>
            <img className='elips' src={elips} alt="" />
            <img className='banner-elips2' src={elips2} alt="" />
            
          <p className='banner-text'> {subHeader} </p>
          <h2 className='banner-title'>
               {mainHeader}
 
       
          </h2>
       { isBanner &&  <h2 className='subtitle'>For Student</h2>}
          
          <p> {paragraph} </p>


       { isBanner ?  <button className='bannerBtn'>Sign Up</button>:  <button className='bannerBtn'>Explore More</button>
       
      
      
      }

          </div>


           {/*============= image========================== */}
          <div>
         {/* ==================right side image based on banner ============================= */}
        <div className='image-container'>
      {   isBanner ? <>
      
      
        <img  src={BannerImage} alt="" />
          <img className='circle' src={circle} alt="" />
      
      
      </>: 
      <>
      
       <img src={girl} alt="" />
      
      
      </>
        
        }
           
        </div>


          </div>
        </div>
     </section>
    );
};

export default Banner;