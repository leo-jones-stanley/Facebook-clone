const User = require("../models/user")

exports.register = async (req,res) =>{
    console.log(req.body)
    const {
        first_name,
        last_name,
        email,
        password,
        bYear,
        bMonth,
        bDay,
        gender,
        username
      } = req.body;
    const user = await new User ({
        first_name,
        last_name,
        email,
        password,
        bYear,
        bMonth,
        bDay,
        gender,
        username
      }).save();
      res.json({ mesage : "successfully Registered ", data : user})
      console.log("done")
      
}