// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

// // const Sidebar = () => {
// //     const navigate = useNavigate(); // Replace useHistory with useNavigate
// //     const [activeNavItem, setActiveNavItem] = useState(null);

// //     const handleNavItemClick = (item) => {
// //         setActiveNavItem(item);
// //         switch (item) {
// //             case 'dashboard':
// //                 navigate('/dashboard'); // Use navigate instead of history.push
// //                 break;
// //             case 'analytics':
// //                 navigate('/analytics');
// //                 break;
// //             case 'createQuiz':
// //                 navigate('/create-quiz');
// //                 break;
// //             default:
// //                 break;
// //         }
// //     };

// //     return (
// //         <div style={{ width: '193px', height: '832px', backgroundColor: '#474444', position: 'relative' }}>
// //             <div style={{ width: '131px', height: '70px', position: 'absolute', top: '17px', left: '31px', gap: '0px', opacity: '1', fontFamily: 'Jomhuria', fontSize: '70px', fontWeight: '400', lineHeight: '70px', textAlign: 'left', background: '#474444', color: 'white' }}>
// //                 QUIZZIE
// //             </div>
// //             <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', paddingTop: '70px' }}>
// //                 <NavItem onClick={() => handleNavItemClick('dashboard')} active={activeNavItem === 'dashboard'}>DASHBOARD</NavItem>
// //                 <NavItem onClick={() => handleNavItemClick('analytics')} active={activeNavItem === 'analytics'}>ANALYTICS</NavItem>
// //                 <NavItem onClick={() => handleNavItemClick('createQuiz')} active={activeNavItem === 'createQuiz'}>CREATE QUIZ</NavItem>
// //                 <div style={{ width: '100%', height: '1px', backgroundColor: 'white' }}></div>
// //                 <button style={{ width: '100%', height: '40px', backgroundColor: '#474444', color: 'white', border: 'none', outline: 'none', cursor: 'pointer' }}>Logout</button>
// //             </div>
// //         </div>
// //     );
// // };

// // const NavItem = ({ children, onClick, active }) => {
// //     return (
// //         <div onClick={onClick} style={{ width: '176px', height: '210px', padding: '20px', borderLeft: active ? '5px solid white' : 'none', backgroundColor: active ? 'rgba(255, 255, 255, 0.1)' : 'transparent', cursor: 'pointer' }}>
// //             {children}
// //         </div>
// //     );
// // };

// // export default Sidebar;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// import '../Styles/Quiz.css';

// const Sidebar = () => {
//     const navigate = useNavigate();
//     const [activeNavItem, setActiveNavItem] = useState(null);

//     const handleNavItemClick = (item) => {
//         setActiveNavItem(item);
//         switch (item) {
//             case 'dashboard':
//                 navigate('/dashboard');
//                 break;
//             case 'analytics':
//                 navigate('/analytics');
//                 break;
//             case 'createQuiz':
//                 navigate('/createquiz');
//                 break;
//             default:
//                 break;
//         }
//     };

//     return (
//         <div className="sidebar-container">
//             <div className="brand">QUIZZIE</div>
//             <div className="nav-items">
//                 <NavItem onClick={() => handleNavItemClick('dashboard')} active={activeNavItem === 'dashboard'}>DASHBOARD</NavItem>
//                 <NavItem onClick={() => handleNavItemClick('analytics')} active={activeNavItem === 'analytics'}>ANALYTICS</NavItem>
//                 {/* <NavItem onClick={() => handleNavItemClick('createQuiz')} active={activeNavItem === 'createQuiz'}>CREATE QUIZ</NavItem> */}
//                 <NavItem onClick={handleCreateQuiz} active={activeNavItem === 'createQuiz'}>CREATE QUIZ</NavItem>
//                 <div className="divider"></div>
//                 <button className="logout-btn">LOGOUT</button>
//             </div>
//         </div>
//     );
// };

// const NavItem = ({ children, onClick, active }) => {
//     return (
//         <div onClick={onClick} className={`nav-item ${active ? 'active' : ''}`}>
//             {children}
//         </div>
//     );
// };

// export default Sidebar;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateQuiz from './CreateQuiz'; // Import the Popup component
import './Sidebar.css'; // Import the sidebar styles

const Sidebar = () => {
    const navigate = useNavigate();
    const [activeNavItem, setActiveNavItem] = useState(null);

    const handleNavItemClick = (item) => {
        setActiveNavItem(item);
        switch (item) {
            case 'dashboard':
                navigate('/dashboard');
                break;
            case 'analytics':
                navigate('/analytics');
                break;
            case 'createQuiz':
                navigate('/createquiz');
                break;
            default:
                break;
        }
    };

    return (
        <div className="sidebar-container">
            <div className="brand">QUIZZIE</div>
            <div className="nav-items">
                <NavItem onClick={() => handleNavItemClick('dashboard')} active={activeNavItem === 'dashboard'}>DASHBOARD</NavItem>
                <NavItem onClick={() => handleNavItemClick('analytics')} active={activeNavItem === 'analytics'}>ANALYTICS</NavItem>
                <PopupButton />
                <div className="divider"></div>
                <button className="logout-btn">LOGOUT</button>
            </div>
        </div>
    );
};

const NavItem = ({ children, onClick, active }) => {
    return (
        <div onClick={onClick} className={`nav-item ${active ? 'active' : ''}`}>
            {children}
        </div>
    );
};

const PopupButton = () => {
    const [isPopupOpen, setPopupOpen] = useState(false);

    const openPopup = () => {
        setPopupOpen(true);
        document.body.classList.add('blur-background');
    };

    const closePopup = () => {
        setPopupOpen(false);
        document.body.classList.remove('blur-background');
    };

    return (
        <div>
            <div onClick={openPopup} className="nav-item">
                CREATE QUIZ
            </div>
            {isPopupOpen && <CreateQuiz handleClose={closePopup} />}
        </div>
    );
};

export default Sidebar;
