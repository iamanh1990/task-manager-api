require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('5f32bbe1048c79212c0e7cad')
// 	.then((task) => {
// 		console.log(task);
// 		return Task.countDocuments({ completed: false });
// 	})
// 	.then((result) => console.log(result))
// 	.catch((err) => console.log(err));

const deleteTaskAndCount = async (id, completed) => {
	const task = await Task.findByIdAndDelete(id);
	const count = await Task.countDocuments({ completed });
	return count;
};

deleteTaskAndCount('5f32a083137c411de02bb323', true) //
	.then((result) => console.log(result))
	.catch((err) => console.log(err));
