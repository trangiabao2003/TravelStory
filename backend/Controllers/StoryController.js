const Story = require("../models/storymodel");


// Get all stories
const getUserStories = async (req, res) => {

}
const createStory = async (req, res) => {
 if (!req.body) {
  return res.status(400).send({ message: "Story content can not be empty" });
 }

    try {
    const story = new Story({
            userid: req.body.userid,
            title: req.body.title,
            content: req.body.content,
            tags: req.body.tags || [],
            likes: [],
            comments: [],    
    });
    await story.save();
    res.status(201).json({ message: "Story created successfully", story });
    } catch (err) {
    res.status(500).send({
    message: err.message || "Some error occurred while creating the Story."
    });
    }
}

module.exports = { getUserStories, createStory };
