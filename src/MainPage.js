import React, { useState, useEffect } from "react";
import ImageAlign from './ImageAlign';
import Addstory from './Addstory';
import Bookmark from './Bookmark';
import Profile from "./Components/Assests/Profile.png";
import Menu from "./Components/Assests/Vector.png";
import Book from "./Components/Assests/Book.jpg";
import './MainPage.css';
import Story from "./Story";


function MainPage() {
    
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [isPopupOpen1, setPopupOpen1] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [userData, setUserData] = useState({});
     
    const handleCloseClick = () => {
      setShowPopup(false);
    };
  
      const handleClick = () => {
        setPopupOpen(true); // Set the state to open the popup
      };
      
      const handleClose = () => {
        setPopupOpen(false); // Set the state to close the popup
      };
  
    const handleClick1 = () => {
      setPopupOpen1(true);
    };
    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent the default form submission behavior
      // Add your registration logic here
      console.log('Register button clicked');
    };
      useEffect(() => {
    // Fetch user data when the component mounts
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      // Replace with the actual backend endpoint that provides user data
      const response = await fetch("/api/user");
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  
    return (
      <div className="MainPage">
        <header className="MainPage-header">
          <div className='navbar'>
          <h1>SwipTory</h1>
          <button onClick={handleClick} className="button2">
          <img src={Book} alt="book" className="book" />
            <span> Bookmark</span>
        </button>
        {isPopupOpen && <Bookmark />} 
        {showPopup && (
          <Bookmark onClose={handleCloseClick} />
        )}
        {/* Render RegisterPopup if isPopupOpen is true */}
          <button onClick={handleClick1} className="button3">
          Addstory
          </button>
          {isPopupOpen1 && <Addstory />} 
           <div className="profile-container">
          <span>{userData.username}</span>
          <img src={Profile} alt="Profile" className="profile" />
         </div>
         <div className="menu-container">
          <span>{userData.username}</span>
          <img src={Menu} alt="Menu" className="menu" />
         </div>
          </div>
        </header>
        <main>
          <ImageAlign />
          <section>
            <h2>Top Stories About food</h2>
            <Story/>
            <p >No stories Available</p>
          </section>
          <section>
            <h2 className='gg'>Top Stories About Medical</h2>
            <p>No stories Available</p>
          </section>
        </main>
      </div>
    );
  }
  
  export default MainPage;


// import React, { useState, useEffect } from "react";
// import ImageAlign from "./ImageAlign";
// import Addstory from "./Addstory";
// import Bookmark from "./Bookmark";
// import Profile from "./Components/Assests/Profile.png";
// import "./MainPage.css";

// function MainPage() {
//   const [isPopupOpen, setPopupOpen] = useState(false);
//   const [isPopupOpen1, setPopupOpen1] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);
//   const [userData, setUserData] = useState({});

//   const handleCloseClick = () => {
//     setShowPopup(false);
//   };

//   const handleClick = () => {
//     setPopupOpen(true); // Set the state to open the popup
//   };

//   const handleClose = () => {
//     setPopupOpen(false); // Set the state to close the popup
//   };

//   const handleClick1 = () => {
//     setPopupOpen1(true);
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent the default form submission behavior
//     // Add your registration logic here
//     console.log("Register button clicked");
//   };
//   useEffect(() => {
//     // Fetch user data when the component mounts
//     fetchUserData();
//   }, []);

//   const fetchUserData = async () => {
//     try {
//       // Replace with the actual backend endpoint that provides user data
//       const response = await fetch("/api/user");
//       const data = await response.json();
//       setUserData(data);
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//     }
//   };

//   return (
//     <div className="MainPage">
//       <header className="MainPage-header">
//         <div className="navbar">
//           <h1>SwipTory</h1>
//           <button onClick={handleClick} className="button">
//             Bookmark
//           </button>
//           {isPopupOpen && <Bookmark />}
//           {showPopup && <Bookmark onClose={handleCloseClick} />}
//           <button onClick={handleClick1} className="button1">
//             Addstory
//           </button>
//           {isPopupOpen1 && <Addstory />}
//           <div className="profile-container">
//           <span>{userData.username}</span>
//           <img src={Profile} alt="Profile" className="profile" />
//         </div>
//         </div>
//       </header>
//       <main>
//         <ImageAlign />
//         <section>
//           <h2>Top Stories About food</h2>
//           <p>No stories Available</p>
//         </section>
//         <section>
//           <h2 className="gg">Top Stories About Medical</h2>
//           <p>No stories Available</p>
//         </section>
//       </main>
//     </div>
//   );
// }

// export default MainPage;

