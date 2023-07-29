const express = require("express");
const  cors = require("cors")
const app = express();
const useRoutes = require("./routes/user");



app.use(cors());
app.use('/',useRoutes);

app.get('/dryRunTest',(req,res) => {
    res.send("Backend Server is Running ! !! !!!")
})
app.listen(8000,() => {
    console.log("the Server is running ")
})