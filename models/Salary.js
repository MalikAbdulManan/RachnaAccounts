const mongoose = require("mongoose");

const SalarySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    questions: [
      {
        question: {
          question: { type: String, required: true },
          values: { type: Array },
          type: { type: String, required: true },
        },
      },
    ],
    createdAt: { type: String },
    updatedAt: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SalaryTemplate", salarySchema);
