var mongoose = require("mongoose")

const profileSchema = new mongoose.Schema({
  email: String,
  firstName: String,
  lastName: String,
  dateOfBirth: Date,
  university: String,
  graduation: Date,
  imageUrl: String,
  degree: String,
  major: String,
  profileAvaliableToRecruiter: {
      type: Boolean,
      default: false
  },
  recieveMessageFromRecruiters: {
      type: Boolean,
      default: false
  }


})

module.exports = mongoose.model("Profile", profileSchema)
