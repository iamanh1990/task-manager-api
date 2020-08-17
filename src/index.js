const express = require('express');
require('./db/mongoose');
const User = require('./models/user');
const Task = require('./models/task');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT;

//This means express will automatically convert json into object
app.use(express.json());
//set the router
app.use(userRouter);
app.use(taskRouter);

//Event listener
app.listen(port, () => {
	console.log(`Server running up on port ${port}`);
});
