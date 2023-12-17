
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import './Advanture.css'

const TropicalAdvancture = () => {
  const [cardData,setCardData]=useState([])


 
    useEffect(()=>{
      fetch('cardData.json')
      .then(res=>res.json())
      .then(data=> setCardData(data))
    },[])
 console.log(cardData);

  
  return (
  
      <section className="wrapper">
        <div className="card-containerr">
      
  {
    cardData.map(data=> <Card data={data} ></Card>)
  }


        </div>
        {/* adventure text */}
        <div className="advanture-text">
          <h2>Tropical Adventure <br />  <span className="subtitle">for Students</span>.</h2>
          <p>Student Tropical Vacation: Relax and Recharge</p>
           
            <ul>
                <li>Experiential Learning in Breathtaking Landscapes</li>
                <li>Exclusive Student-Friendly Discounts and Offers</li>
                <li>Educational Excursions blending Learning and Exploration</li>
                <li>Thrilling Adventure Sports and Activities</li>
                <li>Community Building with Like-Minded Students</li>
            </ul>
            <button>Explore more</button>
        </div> 
      </section>
  
  );
};

export default TropicalAdvancture;
