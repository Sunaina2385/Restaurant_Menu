const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    name: {
      type: String,
      unique: true,
      required: true
    },
    ingredients: {
      type: [String],
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    type: {
      type: String,
      require: true
    }
  },{timestamps: true}
  );

module.exports = mongoose.model('Recipes', RecipeSchema);