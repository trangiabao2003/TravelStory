require("dotenv").config();

const config = require("./config.json");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const User = require("./models/user.model");
const storyRoutes = require("./Routes/StoryRoutes");
const UserRoutes = require("./Routes/UserRoutes");

mongoose.connect(config.connectionString);

const app = express();

app.use(express.json());
app.use('/api/', storyRoutes);
app.use('/api/', UserRoutes);	
app.use(cors({ origin: "*" }));

app.listen(8000);
module.exports = app;
