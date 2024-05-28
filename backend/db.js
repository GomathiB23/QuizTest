// // const mongoose = require('mongoose');

// // const connectDB = async () => {
// //   try {
// //     await mongoose.connect('your-mongodb-connection-string', {
// //       useNewUrlParser: true,
// //       useUnifiedTopology: true,
// //     });
// //     console.log('MongoDB Connected...');
// //   } catch (err) {
// //     console.error(err.message);
// //     process.exit(1);
// //   }
// // };

// // module.exports = connectDB;
// const mongoose = require("mongoose");

// module.exports = () => {
// 	const connectionParams = {
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 	};
// 	try {
// 		mongoose.connect(process.env.DB, connectionParams);
// 		console.log("Connected to database successfully");
// 	} catch (error) {
// 		console.log(error);
// 		console.log("Could not connect database!");
// 	}
// };
const mongoose = require("mongoose");
require('dotenv').config();

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try {
        mongoose.connect(process.env.DB, connectionParams);
        console.log("Connected to database successfully");
    } catch (error) {
        console.log(error);
        console.log("Could not connect database!");
    }
};
