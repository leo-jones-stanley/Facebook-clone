const express = require("express");

app = express();

app.get('/dryRunTest',(req,res) => {
    res.send("Backend Server is Running ! !! !!!")
})
app.listen(8000,() => {
    console.log("the Server is running ")
})