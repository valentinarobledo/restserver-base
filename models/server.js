const express = require("express");
const cors = require("cors");

class Server {

  constructor() {
    this.app = express();
		this.port = process.env.PORT;

		//Middlewares
		this.middlewares();



		//Routes
		this.routes();
  }

	middlewares(){
		//CORS
		this.app.use(cors());

		//Public directory
		this.app.use(express.static('public'));

		//Lectura y parseo de JSON
		this.app.use(express.json());
	}

	routes(){
		this.app.use('/api/user', require('../routes/user'));
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log(`Server is running on port ${this.port}`);
		});
	}

}

module.exports = Server;
