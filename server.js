'use strict';
const express = require('express');

const server = express();
const PORT=process.env.PORT || 3333;
server.use(express.static('./public'));

server.get('/test',(request,response)=>{
  response.send('Hello Universe!');
})

server.get('/data',(req,res)=>{
  


  let life =[
    {lose:'learn',
    success: 'progress',
    happy:false,
    sad:true,
  },
  {
    Position:'unknown',
    path:'infinity'
  }
  ]
  res.json(life);
  
})


server.listen(PORT,()=>{
  console.log(`Just Listen! ${PORT}`);
})
