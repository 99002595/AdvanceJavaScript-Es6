const express = require('express')
const deleteUser= express.Router()
var model=require("../models/userSchema.model")

deleteUser.delete('/', (req,res,next)=>{
    model.user.destroy({
        where: { id: 4504 }
    })

    .then((response)=>{
          console.log('deleted successfully',response)
    }).catch((err)=>{
        console.error('error in deleting the data:', err);
    })
})
module.exports =deleteUser
