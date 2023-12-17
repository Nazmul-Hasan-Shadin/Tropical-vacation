
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import './Advanture.css'
 import circle from '../../assets/images/Subtract.png'

const TropicalAdvancture = () => {
  const [cardData,setCardData]=useState([])


 
    useEffect(()=>{
      fetch('cardData.json')
      .then(res=>res.json())
      .then(data=> setCardData(data))
    },[])
 console.log(cardData);

  
  return (
  
    <div>
          <section className="wrapper">
        <div className="card-containerr">
      
  {
    cardData.map((data,index)=> <Card key={index} data={data} ></Card>)
  }


        </div>
        {/* adventure text */}
        <div  className="advanture-text">
  
           {/* <div  style={{position:'relative'}}>
            <img className="substrac-circle" src={circle} alt="" />
           </div> */}

          <h2>Tropical Adventure <br />  <span className="subtitle">for Students</span>.</h2>
          <p>Student Tropical Vacation: Relax and Recharge</p>
           
            <ul>
                <li style={{margin:'9px 0px'}}>Experiential Learning in Breathtaking Landscapes</li>
                <li style={{margin:'9px 0px'}}>Exclusive Student-Friendly Discounts and Offers</li>
                <li style={{margin:'9px 0px'}}>Educational Excursions blending Learning and Exploration</li>
                <li style={{margin:'9px 0px'}}>Thrilling Adventure Sports and Activities</li>
                <li style={{margin:'9px 0px'}}>Community Building with Like-Minded Students</li>
            </ul>
            <button>Explore more</button>
        </div> 
      </section>
    </div>
  
  );
};

export default TropicalAdvancture;
