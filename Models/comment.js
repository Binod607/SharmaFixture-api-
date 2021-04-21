const mongoose=require('mongoose')
const Comment=mongoose.model('Comment',{
    userid:{
        type:String,
        required:true
    },
    productId:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        
    }
})
module.exports=Comment