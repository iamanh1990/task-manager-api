require('../src/db/mongoose');
const User = require('../src/models/user');

// User.findByIdAndUpdate('5f329dc1dab0bf22d82a568c', { age: 20 })
// 	.then((user) => {
// 		console.log(user);
// 		return User.countDocuments({ age: 20 });
// 	})
// 	.then((result) => {
// 		console.log(result);
// 	})
// 	.catch((err) => console.log(err));

const findAndUpdateAge = async (id, age) => {
	const user = await User.findByIdAndUpdate(id, { age });
	const count = await User.countDocuments({ age });
	return count;
};

findAndUpdateAge('5f328fe7b677c12404c4b374', 20) //
	.then((result) => console.log(result))
	.catch((err) => console.log(err));
