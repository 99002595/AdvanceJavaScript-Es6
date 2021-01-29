const express = require('express')
const getUsers= express.Router()
var model=require("../models/userSchema.model")

getUsers.get('/', (req,res,next)=>{
    model.user.findAll()
    .then((response)=>{
          res.send(response)
    }).catch((err)=>{
        console.error('error in fetching the data:', err);
    })
})
 

module.exports = getUsers
