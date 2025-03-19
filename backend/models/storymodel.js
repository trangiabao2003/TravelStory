const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storySchema = new Schema({
    userid: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    createdOn: { type: Date, default: Date.now },
    tags : { type: Array, default: [] },
    likes : { type: Array, default: [] },
    comments : { type: Array, default: [] },
});

module.exports = mongoose.model("Story", storySchema);  


