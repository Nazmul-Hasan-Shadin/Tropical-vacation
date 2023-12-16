import {IoAddSharp} from 'react-icons/io5'
import {TiMinusOutline} from 'react-icons/ti'
import './BookingForm.css'
const BookingForm = () => {
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
             <IoAddSharp className='add' />
             <TiMinusOutline className='minus' />
             <label htmlFor="start">Start
               <input className='inputItem' type="text" placeholder='11 October' />
               </label>
             </div>
          

             <div className='increment'>
             <IoAddSharp className='add' />
             <TiMinusOutline className='minus'></TiMinusOutline>
             <label htmlFor="start">Start
               <input className='inputItem' type="text" placeholder='11 October' />
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