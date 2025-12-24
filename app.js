const express = require("express");
const app = express() ; 

let blogRoutes = require("./routes/postRoutes");
const errorHandler = require("./middleware/errorHandler");


app.use(express.json())

app.use("/blog", blogRoutes)

app.use(errorHandler)


app.listen(3000 , () => console.log("server is runnig"));