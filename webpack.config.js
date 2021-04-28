const path = require("path");
const webpack = require("webpack");

module.exports = {
	entry: "./src/index",
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "index.js",
	},
	target: "node",
	plugins: [
		new webpack.BannerPlugin({ banner: "#!/usr/bin/env node", raw: true }),
	],
};
