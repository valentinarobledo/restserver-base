const { response, request } = require("express");

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

const postUser = (req	= request, res = response) => {

	const {nombre, edad} = req.body;
	res.json({
		message: "Post users controller",
		nombre, edad
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