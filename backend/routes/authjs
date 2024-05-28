// const express = require('express');
// const router = express.Router();
// const { signup, login } = require('../controllers/authController');
// const authMiddleware = require('../middleware/authMiddleware');

// // @route    POST api/auth/signup
// // @desc     Register user
// // @access   Public
// router.post('/signup', signup);

// // @route    POST api/auth/login
// // @desc     Authenticate user & get token
// // @access   Public
// router.post('/login', login);

// module.exports = router;
const router = require("express").Router();
const { User } = require("../models/User");
const bcrypt = require("bcrypt");
const Joi = require("joi");

router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (!user)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!validPassword)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const token = user.generateAuthToken();
		res.status(200).send({ data: token, message: "logged in successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

const validate = (data) => {
	const schema = Joi.object({
		email: Joi.string().email().required().label("Email"),
		password: Joi.string().required().label("Password"),
	});
	return schema.validate(data);
};

module.exports = router;
