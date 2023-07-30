const express = require("express");
const { readFileSync} = require("fs") 
const  cors = require("cors")
const app = express();
// const useRoutes = require("./routes/user");



app.use(cors());
readFileSync('./routes')

app.get('/dryRunTest',(req,res) => {
    res.send("Backend Server is Running ! !! !!!")
})
app.listen(8000,() => {
    console.log("the Server is running ")
})