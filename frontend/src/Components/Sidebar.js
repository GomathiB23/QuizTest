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
// import { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import styles from "./SignIn.css";

// const Signup = () => {
// 	const [data, setData] = useState({
// 		firstName: "",
// 		lastName: "",
// 		email: "",
// 		password: "",
// 	});
// 	const [error, setError] = useState("");
// 	const navigate = useNavigate();

// 	const handleChange = ({ currentTarget: input }) => {
// 		setData({ ...data, [input.name]: input.value });
// 	};

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		try {
// 			const url = "http://localhost:8080/api/users";
// 			const { data: res } = await axios.post(url, data);
// 			navigate("/login");
// 			console.log(res.message);
// 		} catch (error) {
// 			if (
// 				error.response &&
// 				error.response.status >= 400 &&
// 				error.response.status <= 500
// 			) {
// 				setError(error.response.data.message);
// 			}
// 		}
// 	};

// 	return (
// 		<div className={styles.signup_container}>
// 			<div className={styles.signup_form_container}>
// 				<div className={styles.left}>
// 					<h1>Welcome Back</h1>
// 					<Link to="/login">
// 						<button type="button" className={styles.white_btn}>
// 							Sing in
// 						</button>
// 					</Link>
// 				</div>
// 				<div className={styles.right}>
// 					<form className={styles.form_container} onSubmit={handleSubmit}>
// 						<h1>Create Account</h1>
// 						<input
// 							type="text"
// 							placeholder="First Name"
// 							name="firstName"
// 							onChange={handleChange}
// 							value={data.firstName}
// 							required
// 							className={styles.input}
// 						/>
// 						<input
// 							type="text"
// 							placeholder="Last Name"
// 							name="lastName"
// 							onChange={handleChange}
// 							value={data.lastName}
// 							required
// 							className={styles.input}
// 						/>
// 						<input
// 							type="email"
// 							placeholder="Email"
// 							name="email"
// 							onChange={handleChange}
// 							value={data.email}
// 							required
// 							className={styles.input}
// 						/>
// 						<input
// 							type="password"
// 							placeholder="Password"
// 							name="password"
// 							onChange={handleChange}
// 							value={data.password}
// 							required
// 							className={styles.input}
// 						/>
// 						{error && <div className={styles.error_msg}>{error}</div>}
// 						<button type="submit" className={styles.green_btn}>
// 							Sing Up
// 						</button>
// 					</form>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Signup;
