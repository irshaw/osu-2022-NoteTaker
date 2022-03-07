const fs = require("fs");
const express = require("express");
const util = require("util");
const path = require("path");

const app = express();

// read and write for the save 
const readFileAsync = util.promisify(fs.readFile);
const writeFIleAsync = util.promisify(fs.writeFile);

// create save class and adding get ,add, delete for notes 
