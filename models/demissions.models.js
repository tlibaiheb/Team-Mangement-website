const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResignationSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true
  },
  reason: {
    type: String,
    required: true
  },
  type:String
});

module.exports = mongoose.model("resignations", ResignationSchema);
