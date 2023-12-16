import './Designation.css'
import SingleDesignation from './SingleDesignation';
import designnation1 from '../../assets/designation/desig1.png'
import designnation2 from '../../assets/designation/desig2.png'
import designnation3 from '../../assets/designation/desig3.png'

const Designation = () => {
    return (
     <>
      <h2 style={{marginBottom:'10px'}} className='designation-title'>Our Designation</h2>
          
             <div className='designations-container'>
         <SingleDesignation 
         university={'cambridge, Massachsetts,Uk'} mainUniversity={'Harvard University'} image={designnation1}></SingleDesignation>
         <SingleDesignation 
         university={'Oxford, California'}
          mainUniversity={'Oxford University'} 
          image={designnation2}>

          </SingleDesignation>

          <SingleDesignation 
         university={'standford, California'}
          mainUniversity={'Stanford University'} 
          image={designnation3}>

          </SingleDesignation>

          <SingleDesignation 
         university={'standford, California'}
          mainUniversity={'Stanford University'} 
          image={designnation3}>

          </SingleDesignation> 





        </div>
     </>
    );
};

export default Designation;