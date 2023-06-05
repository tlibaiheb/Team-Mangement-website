const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ClaimSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true
  },
    type: String,
    description: String,
   });

  

module.exports = mongoose.model("reclamations", ClaimSchema);
