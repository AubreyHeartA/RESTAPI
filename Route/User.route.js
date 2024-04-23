const express = require('express');
const router = express.Router();

const User = require('../Model/User.model');


router.post('/', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = new User({ username, password, });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        console.error('Error creating profile:', error);
        res.status(500).json({ error: "Could not create profile" });
    }
});

router.get('/getProfile', async (req, res, next) => {
    res.send('get');
});

module.exports = router;
