const express = require('express')
const updateUser= express.Router()
var model=require("../models/userSchema.model")

updateUser.put('/',(req,res,next)=>{
    model.user.update(
        { name: 'Aruna' },
        { where: { id: 4527 } })
        .then((result) =>{
            console.log('updated successfully',result)
        }).catch((err) =>{
            console.error('error in updating the data:', err);
         })
        })
    
module.exports =updateUser
