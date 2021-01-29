const express = require('express')
const addUser= express.Router()
var model=require("../models/userSchema.model")

addUser.post('/', (req,res,next)=>{
    model.user.create({
        id: 4504,
        category_id:124,
        name:'AJ'

    })
    .then((response)=>{
          console.log('inserted successfully',response)
    }).catch((err)=>{
        console.error('error in inserting the data:', err);
    })
})
 

module.exports =addUser
