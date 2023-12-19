// Create web server

// Import express
const express = require('express');
const router = express.Router();

// Import comments model
const Comment = require('../models/comment');

// Import auth middleware
const auth = require('../middleware/auth');

// Import error handler
const { error } = require('../util/error');

// Import validation
const { validateComment } = require('../util/validation');

