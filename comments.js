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

// Create comment
router.post('/', auth, async (req, res) => {
    // Validate input
    const { error: validationError } = validateComment(req.body);
    if (validationError) return res.status(400).send(error(validationError.details[0].message));

    // Create comment
    const comment = new Comment({
        ...req.body,