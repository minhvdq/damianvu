const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/', async (request, response) => {
    const blogs = await Blog.find({})
    response.json(blogs)
})

blogsRouter.delete('/:id', async (request, response) => {
    await Blog.findByIdAndDelete(request.params.id)
      response.status(204).end()
  })
  

blogsRouter.post('/', async (request, response) => {
    const newBlog = new Blog ({
        title: request.body.title,
        date: request.body.date,
        link: request.body.link,
        description: request.body.description

    })
    savedBlog = await newBlog.save()
    response.status(201).json(savedBlog)
})


module.exports = blogsRouter