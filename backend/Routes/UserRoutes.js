const express = require('express');
const UserRoutes = express.Router();

const { createAccount } = require('../Controllers/UserController');

UserRoutes.post('/create-account', createAccount);

module.exports = UserRoutes;