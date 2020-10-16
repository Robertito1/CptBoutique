const mongoose = require("mongoose");

mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

const salesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
  },
  price: {
    type: Number,
    required: true,
    minlength: 2,
  },
  images: [String],
});

salesSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Sale", salesSchema);