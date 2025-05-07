const { Schema, model } = require("mongoose");

const descriptionSchema = new Schema({
  category_id: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = model("Description", descriptionSchema);
