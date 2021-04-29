const path = require("path");

module.exports = {
	entry: "./src/index",
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "index.js",
	},
	target: "node",
};
