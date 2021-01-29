const { response } = require("express");
var model=require("../models/userSchema.model")
module.exports = app => {
    app.get('/',(req,res,next)=>{
    model.user.findAll()
    .then((response)=>{
          res.send(response)
    }).catch((err)=>{
        console.error('error in fetching the data:', err);
    })
})
app.post('/post',(req,res,next)=>{
    model.user.create({
        id: 4502,
        category_id:124,
        name:'Adithya'

    })
    .then((response)=>{
          console.log('inserted successfully',response)
    }).catch((err)=>{
        console.error('error in inserting the data:', err);
    })
})
app.delete('/delete',(req,res,next)=>{
    model.user.destroy({
        where: { id: 4527 }
    })
    
    .then((response)=>{
          console.log('deleted successfully',response)
    }).catch((err)=>{
        console.error('error in deleting the data:', err);
    })
})
app.put('/update',(req,res,next)=>{
model.user.update(
    { name: 'Aruna' },
    { where: { id: 4527 } })
    .then((result) =>{
        console.log('updated successfully',result)
    }).catch((err) =>{
        console.error('error in updating the data:', err);
     } )
    })

};