import './Banner.css'
import BannerImage from '../../assets/images/bannerImg.png'
import circle from '../../assets/images/bannerImg.png'

const Banner = () => {
    return (
     <section className='main-container'>
        <div className="container">
          {/* banner text */}
          <div>
            
          <p>Discover the beauty of the tropics</p>
          <h2 className='banner-title'>
                  Tropical <br /> Destinations
 
       
          </h2>
          <h2 className='subtitle'>For Student</h2>
         
          <p>Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum integer rutrum nisi. A nec nisl vitae </p>
          <button>Sign Up</button>

          </div>


           {/* image */}
          <div>
        
        <div>
          <img src={BannerImage} alt="" />
          
        </div>


          </div>
        </div>
     </section>
    );
};

export default Banner;