import React from 'react';
import profile1 from '../../assets/images/femaleavatar1.png'
import profile2 from '../../assets/images/femaleavatar2.png'
import profile3 from '../../assets/images/femaleavatar3.png'
import './Card.css'
const Card = ({image,text}) => {
    return (
        <div className='card-container'>
         <section className='card'>
            
            <img src={profile1} alt="" />
             <div className='card-text'>
                <h3 className='name'>{'Nazmul Hasn Shadin'}</h3>
                <p className='desc'>{'text lorem12 dkjfk kfjdk kdfjd kdfjkd fkfjkd'}</p>
             
             </div>
            </section>     
        </div>
    );
};

export default Card;