
var express = require('express');
var router = express.Router();
var cors = require('cors');
var dboperations=require('../query/product')

router.use(cors())

router.use((request,response,next)=>{
    console.log('middleware');
    next();
  })
router.get('/', (req,res)=>{
  dboperations.getProducts().then(result=>{
    res.send(result);
  })
  
})
router.get('/:id', (req,res)=>{
  const {id} = req.params
  dboperations.getProduct(id).then(result=>{
    console.log(result);
    console.log(id);
    res.send(result);
  })
  
})
router.post('/',(req,res,next)=>{
    dboperations.createProduct(req.body).then(result=>{
      console.log(result);
      res.send('post reached');
      console.log(req.body.ID);
    })
  })
router.patch('/:id',(req,res,next)=>{
  console.log(req.body);
  dboperations.updateProduct(req.body).then(result=>{
    console.log(result);
    res.send('patch reached');
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