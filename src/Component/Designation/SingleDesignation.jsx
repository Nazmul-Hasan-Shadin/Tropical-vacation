import './SingleDesignation.css'

import { CgMoreO } from "react-icons/cg";
const SingleDesignation = ({university,image,mainUniversity }) => {
    return (
        <div className='card-wrapper'>
          <div>
          <img src={image} alt="" />
          </div>
      {/* cardbody */}
          <div className='card-body'>
       <h2>{mainUniversity}</h2>
        
        <span className='botom-text'>
            <p> {university} </p>
            <CgMoreO />
        </span>
          </div>

        </div>
    );
};

export default SingleDesignation;