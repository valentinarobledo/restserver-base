const { Router } = require("express");
const { check } = require("express-validator");
const Rol = require("../models/rol");
const { validateFields } = require("../middlewares/validate-fields");
const {
  getUser,
  postUser,
  deleteUser,
  putUser,
} = require("../controllers/user");


const router = Router();

router.get("/", getUser);

router.put("/:id", putUser);

router.post("/", 
	[
		check("email", "Email is not valid").isEmail(),
		check("name", "Name is required").not().isEmpty(),
		check("password", "Password is required and must be at least 6 characters long").isLength({ min: 6 }),
		check("rol").custom( async (rol="") => {
		const rolExists = await Rol.findOne({ rol });
			if(!rolExists){
				throw new Error(`Rol ${rol} is not register in DB`);
			}
		}),
		validateFields
	],
	postUser);

router.delete("/", deleteUser);

module.exports = router;
