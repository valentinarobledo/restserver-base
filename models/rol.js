const { Schema, model } = require("mongoose");

const rolSchema = Schema({
	"rol": {
		type: String,
		required: [true, "Rol is required"],
	}
});

module.exports = model("Rol", rolSchema);
