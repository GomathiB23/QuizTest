
import React from 'react';
import ima1 from '../Components/Assests/i1.png';
import ima2 from '../Components/Assests/i2.png';
import ima3 from '../Components/Assests/i3.png';
import ima4 from '../Components/Assests/i4.png';
import ima5 from '../Components/Assests/i5.png';
import './ImageAlign.css';


function ImageAlign() {
  return (
    <div className="ImageAlign">
      <div className='image-text-container'> 
       <img src={ima5} alt="story5" className="story5" />
       <div className="text">All</div>
      </div>
      <div className='image-text-container'>
      <img src={ima1} alt="story1" className="story1" />
      <div className="text">Medicine</div>
      </div>
      <div className='image-text-container'>
      <img src={ima4} alt="story4" className="story4" />
      <div className="text">Fruits</div>
      </div>
      <div className='image-text-container'>
      <img src={ima2} alt="story2" className="story2" />
      <div className="text">World</div>
      </div>
      <div className='image-text-container'>
      <img src={ima3} alt="story3" className="story3" />
      <div className="text">India</div>
      </div>
      
     
    </div>
  );
}

export default ImageAlign;