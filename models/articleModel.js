const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
   title:{
       type: String,
       required: "Title is required!",
       minLength: 4,
       maxLength: 150
   },
    content:{
        type: String,
        required: "Body is required!",
        minLength: 4,
        maxLength: 2000
    }
});

module.exports = mongoose.model("Article",articleSchema);