const express = require("express");
const app = express();
const morgan = require("morgan");
//bring in routes
const articleRoutes = require("./routes/article");
//moves on to the next phase
const myOwnMiddleware = (req, res, next) => {
   console.log("middleware applied!!");
   next();
};
const dotenv = require("dotenv");
dotenv.config(); //invoke dotenv

//middleware
app.use(myOwnMiddleware);
app.use(morgan("dev"));

//home controllers
app.use("/", articleRoutes);


const port = process.env.PORT;
app.listen(port,()=>{
   console.log(`A node.js API is listening on port: ${port}`);
});