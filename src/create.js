const fs = require("fs");
const path = require("path");
const { getTemplate } = require("./getTemplate");

const createComponent = (name, isTS, isClass, isFile, indexOnly) => {
	if (fs.existsSync(name)) {
		console.log("Folder with same name exists!");
		process.exit();
	}

	try {
		const indexData = `export * from './${name}'`;
		const mainData = getTemplate(name, isClass);

		fs.mkdirSync(`./${name}`);
		fs.writeFileSync(`./${name}/index.js`, indexData);
		fs.writeFileSync(`./${name}/${name}.${isTS ? "tsx" : "jsx"}`, mainData);
	} catch (err) {
		console.log(err);
	}
};

exports.createComponent = createComponent;
