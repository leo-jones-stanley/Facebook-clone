const express = require("express");
const {register} = require("../controllers/user")
const router = express.Router();

router.post("/register",register)

router.get("/register",(req,res)=> {res.send("jones")})



module.exports = router;