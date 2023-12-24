const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    minLength: 5,
    require: true,
  },
  date: {
    type: String,
    require: true,
  },
  link: {
    type: String,
    minLength: 10,
    require: true,
  },
  description: {
    type: String,
  }
})

blogSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})


module.exports = mongoose.model('Blog', blogSchema)