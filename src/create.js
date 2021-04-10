const fs = require("fs");
const path = require("path");

function replaceAll(str, find, replace) {
	var escapedFind = find.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
	return str.replace(new RegExp(escapedFind, "g"), replace);
}

const createComponent = (name, isTS) => {
	if (fs.existsSync(name)) {
		console.log("Folder with same name exists!");
		process.exit();
	}

	try {
		const indexData = `export * from './${name}'`;
		let mainData = fs.readFileSync(
			path.join(
				process.argv[1],
				"..",
				"..",
				"templates",
				"functional-template.js"
			),
			{ encoding: "utf8", flag: "r" }
		);
		mainData = replaceAll(mainData, "ComponentName", name);

		fs.mkdirSync(`./${name}`);
		fs.writeFileSync(`./${name}/index.js`, indexData);
		fs.writeFileSync(`./${name}/${name}.${isTS ? "tsx" : "jsx"}`, mainData);
	} catch (err) {
		console.log(err);
	}
};

exports.createComponent = createComponent;
