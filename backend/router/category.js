var express = require('express');
var router = express.Router();
var dboperations=require('../query/category')
router.use((request,response,next)=>{
    console.log('middleware');
    next();
  })
router.get('/', (req,res)=>{
  dboperations.getListCategory().then(result=>{
    res.send(result);
  })
  
})
module.exports = router;