import {IoAddSharp} from 'react-icons/io5'
import {TiMinusOutline} from 'react-icons/ti'
import toast, { Toaster } from 'react-hot-toast';

import './BookingForm.css'
import { useState } from 'react';
const BookingForm = () => {
  const [increase,setIncrease]= useState(0)
  const [start,setStart]=useState(0)

  const handleIncrease=()=>{
        
       setIncrease(increase+1)
  }


  const handleDecrease=()=>{
     if (increase<=0) {
       toast.error('Number cannot be less then 0')
       return
     }
    setIncrease(increase-1)
}

const handleDecreseStart=()=>{

  if (start<=0) {
    toast.error('Number cannot be less then 0')
    return
  }
   
  setStart(start-1)}




    return (
        <div className='form-container'>
            <section className='form-wraper'>
                <h2>Book Now</h2>
                <p className='book-form-text' style={{padding:'0 4px', color:'gray'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, asperiores.

                </p>

              <form action="" className='mainForm'>
                <label htmlFor="city">City
                <input  className="city" type="text" name="city"  placeholder='city' id="" />
                
                </label>
              


                <div className='destination'>
                <label htmlFor="arrive">Arribal
                <input type="text" className='inputItem' name='arrive' placeholder='10 october' />
                </label>
               
                 <label htmlFor="departure">Departure
                 
                 <input type="text" className='inputItem' placeholder='11 October' />
                 </label>
                
                </div>


               <div className="destination">
             <div className='increment'>
             <IoAddSharp onClick={()=>setStart(start+1)} className='add' />
             <TiMinusOutline onClick={handleDecreseStart} className='minus' />
             <label htmlFor="start">Start
               <input  className='inputItem' type="text" placeholder='Room number' value={start} />
               </label>
             </div>
          

             <div className='increment'>
             <IoAddSharp onClick={handleIncrease} className='add' />
             <TiMinusOutline onClick={handleDecrease} className='minus'></TiMinusOutline>
             <label htmlFor="start">Room
               <input className='inputItem' type="text" placeholder='' value={increase} />
               </label>
             </div>
              
               </div>


                   <button className='booking-btn'>Book Now</button>
              </form>
            </section>
        </div>
    );
};

export default BookingForm;