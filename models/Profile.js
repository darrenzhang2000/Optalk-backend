var mongoose = require("mongoose")

const profileSchema = new mongoose.Schema({
  email: String,
  voiceChange: {
    type: Boolean,
    default: true
  },
  videoChange: {
    type: Boolean,
    default: true
  },
  facialFeatures: {
    type: Boolean,
    default: false
  },
  fullMotionCapture: {
    type: Boolean,
    default: false
  },
  // human if true else robot
  humanAvatar: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model("Profile", profileSchema)
