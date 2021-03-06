const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const schema = new Schema({
  title: {
    type: String,
    required: [true],
  },
  description: {
    type: String,
    required: [true],
  },
  questionId: {
    type: ObjectId,
  },
  createdAt: {
    type: Date,
    required: [true],
  },
  createdBy: {
    type: ObjectId,
  },
});

module.exports = { schema };
