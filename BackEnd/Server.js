const express = require('express')
const data = require("./Post")
const app = express()
const PORT = 2002


app.get('/', (req, res) => {
    res.send(`<p>Basic CATHECHDIGITAL</p>
                    
                    <ul>
                      <li> All posts <a href='/api/posts'>api/posts</a></li>
                      
                      <li>Single post  : 1<a href='/api/post/1'>api/post/:id</a> </li>
                      <li>Single post  : 2<a href='/api/post/2'>api/post/:id</a> </li>
                      <li>Single post  : 3<a href='/api/post/3'>api/post/:id</a> </li>        
                    </ul>`)
  })

  app.get('/api', (req, res) => {
    res.send('Welcom to the basic API REST CATECHDIGITAL')
  })

  app.get('/api/posts', (req, res) => {
    res.send(data)
  })
  
  app.get('/api/post/:id', (req, res) => {
    const id = req.params.id
    const Singlepost = data.filter((p )=> p.id == id)
    res.send(Singlepost[0])
  })
  

app.listen(PORT, ()=>{console.log(`Se serveur est lancé sur le PORT: ${PORT}`)})