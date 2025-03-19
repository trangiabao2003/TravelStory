const express = require('express');
const storyRoutes = express.Router();

const { getUserStories, createStory } = require('../Controllers/StoryController');


storyRoutes.get('/story', getUserStories);
roustoryRoutester.post('/createstory', createStory);

module.exports = storyRoutes;    