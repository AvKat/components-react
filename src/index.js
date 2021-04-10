#!/usr/bin/env node

const { createComponent } = require("./create");

const args = process.argv.slice(2);

if (args.length > 0) {
	if (args[1] === "--ts") {
		createComponent(args[0], true);
	} else {
		createComponent(args[0], false);
	}
} else {
	console.log("Error: You need to specify the name of the component.");
	process.exit();
}
