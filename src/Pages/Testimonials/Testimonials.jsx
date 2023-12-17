import React, { useEffect, useState } from 'react';
import Testimonial from '../../Component/Testimonials/Testimonial';
import './Testimonials.css'

const Testimonials = () => {
    const [testimonial,setTestimonial]= useState([])
    useEffect(()=>{
      fetch('../../../public/testimonialData.json')
      .then(res=>res.json())
      .then(data=>{
        setTestimonial(data)
      })
      
         
    },[])
    return (
        <div className='testimonials-container'>
       {
        testimonial.map((testimonial,index)=>  <Testimonial key={index} testimonial={testimonial}></Testimonial>)
       }
        </div>
    );
};

export default Testimonials;