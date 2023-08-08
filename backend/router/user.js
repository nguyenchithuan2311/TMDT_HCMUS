
var express = require('express');
var router = express.Router();
var dboperations=require('../query/user')
router.use((request,response,next)=>{
    console.log('middleware');
    next();
  })
router.get('/', (req,res)=>{
  dboperations.getUsers().then(result=>{
    res.send(result);
  })
  
})
router.get('/:id', (req,res)=>{
  const {id} = req.params
  dboperations.getUser(id).then(result=>{
    console.log(result);
    console.log(id);
    res.send(result);
  })
  
})
router.post('/',(req,res,next)=>{
    dboperations.createUser(req.body).then(result=>{
      console.log(result);
      res.send('post reached');
      console.log(req.body.ID);
    })
  })
router.patch('/:id',(req,res,next)=>{
  dboperations.updateUser(req.body).then(result=>{
    console.log(result);
    res.send('post reached');
    console.log(req.params);
  })
})
router.delete('/:id', (req,res)=>{
  const {id} = req.params
  dboperations.deleteUser(id).then(result=>{
    console.log(result);
    console.log(id);
    res.send(result);
  })
  
})
  module.exports = router;