const { response, request } = require("express");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

const getUser = (req = request, res = response) => {

	const {q, name = 'No Name', token, page = 1, limit = 10 } = req.query;

	res.json({
		message: "get users controller",
		q, 
		name, 
		token,
		page,
		limit
	});
};

const postUser = async(req	= request, res = response) => {


	const {name, email, password, rol} = req.body;
	const user = new User({ name, email, password, rol });

	//Verfify if email exists
	const emailExists = await User.findOne({ email });

	if(emailExists){
		return res.status(400).json({
			msg: 'Email already exists'
		})
	}

	//Encrypt password
	const salt = await bcrypt.genSalt(10);
	user.password = bcrypt.hashSync(password, salt);

	//Save DB
	await user.save();

	res.json({
		user
	});
};

const putUser = (req = request, res = response) => {

	const { id } = req.params;

	res.json({
		message: "put users controller",
		id
	});
};

const deleteUser = (req = request, res = response) => {
	res.json({
		message: "delete users controller",
	});
};

module.exports = {
	getUser,
	postUser,
	putUser,
	deleteUser,	
};