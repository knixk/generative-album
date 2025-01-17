const dotenv = require("dotenv");
const express = require("express");
const app = express();
const port = process.env.PORT || 5051;
dotenv.config();

const mainFn = async () => {};
console.log(`App running on port: ${port}`);

app.listen(port, mainFn);
