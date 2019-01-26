var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var videoSchema = new Schema({
    title: String,
    image: String,
    source: String,
    description: String
});

module.exports = mongoose.model("Video", videoSchema);