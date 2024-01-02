const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express()
dotenv.config();


//db connection
mongoose.connect(process.env.MONGO_USER)