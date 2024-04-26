import React, { useRef, useState, useEffect } from 'react';
import ima1 from '../Components/Assests/i1.png';
import ima2 from '../Components/Assests/i2.png';
import ima3 from '../Components/Assests/i3.png';
import ima4 from '../Components/Assests/i4.png';
import ima5 from '../Components/Assests/i5.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './ImageAlign.css';


function ImageAlign() {

  const imageContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const imageContainer = imageContainerRef.current;
      if (imageContainer) {
        console.log('Scroll Left:', imageContainer.scrollLeft);
        console.log('Scroll Width:', imageContainer.scrollWidth);
        console.log('Client Width:', imageContainer.clientWidth);
        
        setShowLeftArrow(imageContainer.scrollLeft > 0);
        setShowRightArrow(
          imageContainer.scrollWidth - imageContainer.clientWidth - imageContainer.scrollLeft > 0
        );
      }
    };
    const imageContainer = imageContainerRef.current;
    if (imageContainer) {
      imageContainer.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (imageContainer) {
        imageContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const handleScrollRight = () => {
    const imageContainer = imageContainerRef.current;
    if (imageContainer) {
      imageContainer.scrollBy({
        left: 200, // Adjust the scroll distance as needed
        behavior: 'smooth'
      });
    }
  };

  const handleScrollLeft = () => {
    const imageContainer = imageContainerRef.current;
    if (imageContainer) {
      imageContainer.scrollBy({
        left: -200, // Adjust the scroll distance as needed
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="ImageAlign">
       {showLeftArrow && (
        <div className="scroll-icon left" onClick={handleScrollLeft}>
          <i className="fas fa-arrow-left"></i>
        </div>
      )}
      <div className='image-container' ref={imageContainerRef}>
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
      <div className='image-text-container'>
      <img src={ima1} alt="story1" className="story1" />
      <div className="text">Disease</div>
      </div>
      <div className='image-text-container'>
      <img src={ima1} alt="story1" className="story1" />
      <div className="text">Disease</div>  
      </div>  
    </div>
      
    <div id="scrollRight" className="scroll-icon" onClick={handleScrollRight}>
        <i className="fas fa-arrow-right"></i>
      </div>
     
    </div>
  );
}

export default ImageAlign;