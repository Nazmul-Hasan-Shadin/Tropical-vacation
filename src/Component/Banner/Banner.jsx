import './Banner.css'
import BannerImage from '../../assets/images/bannerImg.png'
import circle from '../../assets/images/final-circle.png'
import elips from '../../assets/images/Ellipse.png'
import elips2 from '../../assets/images/Ellipse2.png'

const Banner = () => {
    return (
     <section className='main-container'>
        <div className="container">
          {/* banner text */}
          
          <div className='banne-main-text'>
            <img className='elips' src={elips} alt="" />
            <img className='banner-elips2' src={elips2} alt="" />
            
          <p className='banner-text'>Discover the beauty of the tropics</p>
          <h2 className='banner-title'>
                  Tropical <br /> Destinations
 
       
          </h2>
          <h2 className='subtitle'>For Student</h2>
         
          <p>Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum integer rutrum nisi. A nec nisl vitae </p>
          <button>Sign Up</button>

          </div>


           {/*============= image========================== */}
          <div>
        
        <div className='image-container'>
          <img  src={BannerImage} alt="" />
          <img className='circle' src={circle} alt="" />
           
        </div>


          </div>
        </div>
     </section>
    );
};

export default Banner;