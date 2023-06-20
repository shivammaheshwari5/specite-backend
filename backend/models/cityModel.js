const mongoose = require("mongoose");

const cityModel = mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    description: String,
    country: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Country",
    },
    state: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "State",
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const City = mongoose.model("City", cityModel);
module.exports = City;
