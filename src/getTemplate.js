const fs = require("fs");
const path = require("path");

function replaceAll(str, find, replace) {
	var escapedFind = find.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
	return str.replace(new RegExp(escapedFind, "g"), replace);
}

const getTemplate = (name, isClass) => {
	const fileData = fs.readFileSync(
		path.join(
			process.argv[1],
			"..",
			"..",
			"templates",
			isClass ? "class-template.js" : "functional-template.js"
		),
		{ encoding: "utf8", flag: "r" }
	);
	return replaceAll(fileData, "ComponentName", name);
};

exports.getTemplate = getTemplate;
