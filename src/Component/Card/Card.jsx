import React from 'react';
import profile1 from '../../assets/images/femaleavatar1.png'
import profile2 from '../../assets/images/femaleavatar2.png'
import profile3 from '../../assets/images/femaleavatar3.png'
import './Card.css'
const Card = ({image,text,data}) => {
    return (
        <div className='card-container'>
         <section className='card'>
            
            <img src={data?.image} alt="" />
             <div className='card-text'>
                <h3 className='name'>{data?.name}</h3>
                <p className='desc'>{data?.desc}</p>
             
             </div>
            </section>     
        </div>
    );
};

export default Card;