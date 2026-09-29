const mongoose = require("mongoose")

const problemSchema = new mongoose.Schema(
  {
    problemId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    fatherName: {
      type: String,
      required: true,
      trim: true,
    },

    mobile: {
      type: String,
      required: true,
      trim: true,
      match: [/^[6-9]\d{9}$/, "Invalid mobile number"],
    },

    residentWard: {
      type: String,
      required: true,
      trim: true,
    },

    village: {
      type: String,
      required: true,
      trim: true,
    },

    problemWard: {
      type: String,
      required: true,
      trim: true,
    },

    location: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      trim: true,
      enum: [
        "पेयजल",
        "सड़क",
        "नाली",
        "स्ट्रीट लाइट",
        "सफाई",
        "पार्क",
        "शिक्षा",
        "स्वास्थ्य",
        "बिजली",
        "अन्य",
      ],
    },

    duration: {
      type: String,
      required: true,
      trim: true,
    },

    affectedFamilies: {
      type: Number,
      default: null,
      min: 0,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    affectsOthers: {
      type: String,
      default: null,
      trim: true,
    },

    previousComplaintNumber: {
      type: String,
      default: null,
      trim: true,
    },

    additionalInformation: {
      type: String,
      default: null,
      trim: true,
    },

    confirmation: {
      type: Boolean,
      required: true,
      default: false,
    },

    status: {
      type: String,
      enum: [
        "SUBMITTED",
        "UNDER_REVIEW",
        "ASSIGNED",
        "IN_PROGRESS",
        "RESOLVED",
        "CLOSED",
      ],
      default: "SUBMITTED",
      index: true,
    },
  },
  {
    timestamps: true,
  }
)

const Problem = mongoose.model(
  "Problem",
  problemSchema
)

module.exports = Problem