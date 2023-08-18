const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Plase enter Category name!"],
    maxLength: 100,
  }

});

module.exports = mongoose.model("category", categorySchema);
