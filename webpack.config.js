const path = require("path");
const ShebangPlugin = require("webpack-shebang-plugin");

module.exports = {
	entry: "./src/index",
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "index.js",
	},
	target: "node",
	plugins: [new ShebangPlugin()],
};
