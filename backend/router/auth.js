
var express = require('express');
var router = express.Router();
var dboperations=require('../query/auth')
router.use((request,response,next)=>{
    console.log('middleware');
    next();
  })
router.post('/login',(req,res,next)=>{
    dboperations.getOrders(req).then(result=>{
      if(result=="success")
      {
        res.status(200).json({success:true,message:"login success"})
      }
      else if(result=="fail")
      {
        res.status(200).json({success:false,message:"Username or password incorrect"})
      }
      else
      {
        res.status(500).json({success:false,message:"Internal server error"})
      }
    })
  })

  module.exports = router;