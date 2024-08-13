const { Schema, model } = require("mongoose");

const UserSchema = Schema({
	name: {
		type: String,
		required: [true, 'Name is required']
	},
	email: {
		type: String,
		required: [true, 'Email is required'],
		unique: true
	},
	password: {
		type: String,
		required: [true, 'Password is required']
	},
	img: {
		type: String
	},
	rol: {
		type: String,
		required: true,
	},
	state: {
		type: Boolean,
		default: true
	},
	google:{
		type: Boolean,
		default: false
	}
});

module.exports = model('User', UserSchema);