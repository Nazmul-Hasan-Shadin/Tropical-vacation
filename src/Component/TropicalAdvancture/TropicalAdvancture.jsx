
import Card from "../Card/Card";
import './Advanture.css'

const TropicalAdvancture = () => {
  return (
  
      <section className="wrapper">
        <div className="card-containerr">
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
        {/* adventure text */}
        <div className="advanture-text">
          <h2>Tropical Adventure <br />  <span className="subtitle">for Students</span>.</h2>
          <p>Student Tropical Vacation: Relax and Recharge</p>
           
            <ul>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
            </ul>
            <button>Explore more</button>
        </div> 
      </section>
  
  );
};

export default TropicalAdvancture;
