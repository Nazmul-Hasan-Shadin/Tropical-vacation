
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
  
      <section className="wrapper">
        <div className="card-containerr">
      
  {
    cardData.map((data,index)=> <Card key={index} data={data} ></Card>)
  }


        </div>
        {/* adventure text */}
        <div   className="advanture-text">
  
           <div  style={{position:'relative'}}>
            <img className="substrac-circle" src={circle} alt="" />
           </div>

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
