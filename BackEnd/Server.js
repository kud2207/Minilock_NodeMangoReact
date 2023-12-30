const express = require('express')
const mongoose = require('mongoose')
const data = require("./Post")
const post = require('./Post')
const app = express()
const PORT = 2002

const DB = "mongodb://localhost/blog" 
const Schema = mongoose.Schema


app.listen(PORT, ()=>{console.log(`Se serveur est lancé sur le PORT: ${PORT}`)})
mongoose.connect(DB, {useNewUrlParser: true  , useUnifiedTopology: true }, () => console.log(`Successfully connected to serveur BD`))

const postSchema = new Schema({
  title:{
    type : String,
    required : true
  },
content:{
    type : String,
    required : true
  },
  createdAt:{
    type : String,
    index : true,
    unique : true
  },
  author : String,
  category: String
})

const Post = mongoose.model("Post", postSchema)

app.get('/', (req, res) => {
    res.send(`<p>Basic CATHECHDIGITAL</p>
                    
                    <ul>
                      <li> All posts <a href='/api/posts'>api/posts</a></li>
                      
                      <li>Single post  : 1<a href='/api/post/1'>api/post/:id</a> </li>
                      <li>Single post  : 2<a href='/api/post/2'>api/post/:id</a> </li>
                      <li>Single post  : 3<a href='/api/post/3'>api/post/:id</a> </li>        
                    </ul>`)
  })

  app.get('/api', function (req, res)  {
    res.send('Welcom to the basic API REST CATECHDIGITAL')
  })

  app.get('/api/posts/8', function (req, res) {
    Post.find({}, (error, posts) => {
      if(error){
        res.status(400).error(error)
        return
      }
      console.log(posts)
      res.send(posts)
    })
  })
  
  app.get('/api/post/:id', (req, res) => {
    const id = req.params.id
    const Singlepost = data.filter((p )=> p.id == id)
    res.send(Singlepost[0])
  })
  
