// // import React, { useState } from 'react';
// // import './Story.css'; // Import CSS file for styling

// // const StoryComponent = () => {
// //   const [showRemainingContent, setShowRemainingContent] = useState(false);

// //   const handleSeeMoreClick = () => {
// //     setShowRemainingContent(true);
// //   };
// //   return (
// //     <div className="top-stories">
// //       <Card image={require('./Components/Assests/Food.png')} text="from the world's best" />
// //       <Card image={require('./Components/Assests/Food.png')} text="from the world's best" />
// //       <Card image={require('./Components/Assests/Food.png')} text="from the world's best" />
// //       <Card image={require('./Components/Assests/Food.png')} text="from the world's best" />
// //       <br/>
// //       {/* <SeeMore link="Top Stories About food" /> */}
// //     </div>
// //   );
// // };

// // const Card = ({ image, text }) => {
// //   return (
// //     <>
// //     <div className="card">
// //       <img src={image} alt="Graphic from the world's best" />
// //       <div className="card-content">{text}</div> {/* Content on the card */}
// //     </div>
// //     <div className="see-more">
// //     {showRemainingContent ? (
// //       <div className="remaining-content">
// //         {/* Render the remaining page content here */}
// //         <p>This is the remaining content...</p>
// //       </div>
// //     ) : (
// //       <button className="see-more-button" onClick={handleSeeMoreClick}>See more</button>
// //     )}
// //   </div>
// //   </>
// //   );
// // };

// // export default StoryComponent;



// import React, { useState } from 'react';
// import './Story.css'; // Import CSS file for styling

// const StoryComponent = () => {
//   const [showRemainingContent, setShowRemainingContent] = useState(false);

//   const handleSeeMoreClick = () => {
//     setShowRemainingContent(true);
//   };

//   return (
//     <div className="top-stories">
//       <Card image={require('./Components/Assests/Food.png')} text="from the world's best" />
//       <Card image={require('./Components/Assests/Food.png')} text="from the world's best" />
//       <Card image={require('./Components/Assests/Food.png')} text="from the world's best" />
//       <Card image={require('./Components/Assests/Food.png')} text="from the world's best" />
//       <SeeMore showRemainingContent={showRemainingContent} handleSeeMoreClick={handleSeeMoreClick} />
//     </div>
//   );
// };

// const Card = ({ image, text }) => {
//   return (
//     <div className="card">
//       <img src={image} alt="Graphic from the world's best" />
//       <div className="card-content">{text}</div> {/* Content on the card */}
//     </div>
//   );
// };

// const SeeMore = ({ showRemainingContent, handleSeeMoreClick }) => {
//   return (
//     <div className="see-more">
//       {showRemainingContent ? (
//         <div className="remaining-content">
//           {/* Render the remaining page content here */}
//           <p>This is the remaining content...</p>
//         </div>
//       ) : (
//         <button className="see-more-button" onClick={handleSeeMoreClick}>See more</button>
//       )}
//     </div>
//   );
// };

// export default StoryComponent;

import React from 'react';
import './Story.css'; // Import CSS file for styling

const StoryComponent = () => {
  return (
    <>
    <div className="top-stories">
      <Card image={require('./Components/Assests/Food.png')} text="from the world's best" className='card-1'/>
      <Card image={require('./Components/Assests/Food.png')} text="from the world's best" />
      <Card image={require('./Components/Assests/Food.png')} text="from the world's best" />
      <Card image={require('./Components/Assests/Food.png')} text="from the world's best" />
      
    </div>
    <SeeMore/>
    </>
  );
};

const Card = ({ image, text }) => {
  return (
    <div className="card">
      <img src={image} alt="Graphic from the world's best" />
      <div className="card-content">{text}</div> {/* Content on the card */}
    </div>
  );
};

const SeeMore = () => {
  return (
    <div className="see-more">
      <button className="see-more-button">See more</button>
    </div>
  );
};

export default StoryComponent;
