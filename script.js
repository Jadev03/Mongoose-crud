const mongoose=require("mongoose")
const User=require("./user")
//mongoose.connect("mongodb://localhost/testdb")
main().catch(err => console.log(err));



async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    //insert data
    const user=await User.create({name:"Thabendra",age:22,email:"tHa@gmaiol.com"})
   //console.log(user)
    const search=await User.find({name:"Thabendra"})
   // console.log("searching")
    //console.log(search)
    console.log("where condition")
    const sample=await User.where("email").exists(true).limit(1)
    console.log(sample)
    await user.deleteOne({name:"Thabendra"})
    user.Hi()

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
//insert data
