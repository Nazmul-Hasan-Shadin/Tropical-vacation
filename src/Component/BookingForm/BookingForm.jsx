
import './BookingForm.css'
const BookingForm = () => {
    return (
        <div className='form-container'>
            <section className='form-wraper'>
                <h2>Book Now</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, asperiores.

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
               <label htmlFor="start">Start
               <input className='inputItem' type="text" placeholder='11 October' />
               </label>
          

               <label htmlFor="room">Start
               
               <input className='inputItem' type="text" name='room' placeholder='11 October' />
               
               </label>
              
               </div>


                   <button>Book Now</button>
              </form>
            </section>
        </div>
    );
};

export default BookingForm;