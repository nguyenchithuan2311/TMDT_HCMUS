
var express = require('express');
var router = express.Router();
var dboperations=require('../query/auth')
router.use((request,response,next)=>{
    console.log('middleware');
    next();
  })
router.post('/order',(req,res,next)=>{
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