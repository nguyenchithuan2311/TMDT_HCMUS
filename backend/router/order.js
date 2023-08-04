
var express = require('express');
var router = express.Router();
var dboperations=require('../query/order')
router.use((request,response,next)=>{
    console.log('middleware');
    next();
  })
router.get('/', (req,res)=>{
  dboperations.getOrders(req).then(result=>{
    res.send(result);
  })
  
})
router.post('/',(req,res,next)=>{
    dboperations.getOrders(req).then(result=>{
      if(result=="error")
      {
        res.status(200).json({success:true,message:result})
      }
      else
      {
        res.status(500).json({success:false,message:"Internal server error"})
      }
    })
  })

  module.exports = router;