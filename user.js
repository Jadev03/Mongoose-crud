const mongoose=require("mongoose")
// create schema 
const userSchema=new mongoose.Schema({
    name:{type:String,
        required:true},
    age:Number,
    email:{type:String,
    required:true,
    lowercase:true},
    Address:{
        Num:String,
        street:String,
        City:String,

    },
    createdDate:{type:Date,
    default:Date.now(),
    immutable:true},
    updatedDate:Date,
    hobbies:[String],
    bestFriend:mongoose.SchemaTypes.ObjectId

})
//methods
userSchema.methods.Hi=function(){
    console.log(`Hi My Name is ${this.name}`)
}
//customs methods
userSchema.static.findbyName=function(name){
    return this.where({name: new RegExp(name,"i")})
}
userSchema.query.byName=function(name){
    return this.where({name: new RegExp(name,"i")})
}
// middle wear
//pre trriger
userSchema.pre("save",function(next){
    this.updatedDate=Date.now()
    next()
})
userSchema.post("save",function(doc,next){
    doc.Hi()
    next()
})
module.exports=mongoose.model("user",userSchema)