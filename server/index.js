require('dotenv').config()

const express = require('express')
const cors = require('cors')

const {PORT} = process.env
const {getAllPosts, getCurrentUserPosts, addPost, editPost, deletePost} = require('./controllers/posts')
const {register, login} = require('./controllers/auth')

const app = express()

app.use(express.json())
app.use(cors())

//AUTH
app.post('/register', register)
app.post('/login', login)

// GET POSTS - no auth
app.get('/posts', getAllPosts)

// CRUD POSTS - auth required
app.get('/userposts/:userId', getCurrentUserPosts)
app.post('/posts', addPost)
app.put('/posts/:id',editPost)
app.delete('/posts/:id',deletePost)

app.listen(PORT, () => console.log(`db sync successful & server running on port ${PORT}`))