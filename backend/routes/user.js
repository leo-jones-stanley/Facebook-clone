const express = require("express");

const router = express.Router();

router.get("/user",(req,res) => {
    res.send("Welcome this is user")
})


module.exports = router;