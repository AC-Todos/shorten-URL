const mongoose = require('mongoose')

const Schema = mongoose.Schema

const recordSchema = new Schema({
  assignedId:{
    type: String,
    required: true
  },
  url:{
    type: String,
    required: true
  }
})