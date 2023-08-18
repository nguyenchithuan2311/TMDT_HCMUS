
var express = require('express');
var router = express.Router();
var dboperations=require('../query/cart')
router.use((request,response,next)=>{
    console.log('middleware');
    next();
  })
router.get('/:id', (req,res)=>{
  const {id} = req.params
  dboperations.getProducts(id).then(result=>{
    console.log(result);
    console.log(id);
    res.send(result);
  })
  
})
router.post('/',(req,res,next)=>{
    dboperations.addProduct(req.body).then(result=>{
      console.log(result);
      res.send('post reached');
      console.log(req.body.ID);
    })
  })
router.patch('/:id',(req,res,next)=>{
  dboperations.updateProduct(req.body).then(result=>{
    console.log(result);
    res.send('post reached');
    console.log(req.params);
  })
})
router.delete('/:id', (req,res)=>{
  const {id} = req.params
  dboperations.deleteProduct(id).then(result=>{
    console.log(result);
    console.log(id);
    res.send(result);
  })
  
})
  module.exports = router;