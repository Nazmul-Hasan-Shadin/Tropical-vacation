import React from 'react';
import './Testimonial.css'
const Testimonial = ({testimonial}) => {
    const {image,desc,name}=testimonial;
    console.log(image);
    return (
        <div className='testimonial-container'>
            <div className='testimonial-wraper'>
               <figure>
               <img style={{width:'100px' ,height:'100px'}} className='test-img' src={image} alt="" />
               </figure>
              <hr />
            <h3 className='testimonial-title'>{name}</h3>
              <div style={{paddingBottom:'14px'}}  className='testimonial-body'>
                <p className='desc'>
                 {desc}
                </p>
              </div>
            </div>
        </div>
    );
};

export default Testimonial;