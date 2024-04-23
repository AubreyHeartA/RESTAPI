const express = require('express');
const router = express.Router();

const Profile = require('../Model/Profile.model');



router.post('/', async (req, res) => {
    try {
        const { firstName, lastName, workEmail } = req.body;
        const profile = new Profile({ firstName, lastName, workEmail });
        await profile.save();
        res.status(201).json(profile);
    } catch (error) {
        console.error('Error creating profile:', error);
        res.status(500).json({ error: "Could not create profile" });
    }
});

router.get('/getProfile', async (req, res, next) => {
    res.send('get');
});

module.exports = router;
