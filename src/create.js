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

		if (isFile) {
			fs.writeFileSync(`./${name}.${isTS ? "tsx" : "jsx"}`, mainData);
		} else {
			fs.mkdirSync(`./${name}`);
			if (indexOnly) {
				fs.writeFileSync(`./${name}/index.${isTS ? "tsx" : "jsx"}`, indexData);
			} else {
				fs.writeFileSync(`./${name}/index.js`, indexData);
				fs.writeFileSync(`./${name}/${name}.${isTS ? "tsx" : "jsx"}`, mainData);
			}
		}
	} catch (err) {
		console.log(err);
	}
};

exports.createComponent = createComponent;
