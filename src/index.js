#!/usr/bin/env node

const { createComponent } = require("./create");
const args = require("yargs/yargs")(process.argv.slice(2))
	.scriptName("crc")
	.usage("Usage: $0 <ComponentName> [options]")
	.demandCommand(1)
	// Typescript option
	.boolean("t")
	.alias("t", "ts")
	.describe("t", "Typescript")
	.default("t", false)
	//File only
	.boolean("f")
	.alias("f", "file")
	.describe("f", "File only?")
	.default("f", false)
	// Only index file in folder?
	.boolean("i")
	.alias("i", "index")
	.describe("i", 'Only index file in folder? (Not to be used with "f" flag)')
	.default("i", false)
	//Other options
	.alias("v", "version")
	.help("h")
	.alias("h", "help").argv;

createComponent(args._[0], args.t, args.f, args.i);
