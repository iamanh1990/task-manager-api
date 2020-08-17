const mongoose = require('mongoose');

mongoose.connect(
	process.env.MONGODB_URL,
	{
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: true
	},
	(error, client) => {
		if (error) {
			return console.log('Cannot connect to database');
		}
		console.log('Connect to database');
	}
);
