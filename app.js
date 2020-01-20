const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config(); //invoke dotenv
const bodyParser = require("body-parser");

//DB CONNECTION
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }  )
    .then(() => console.log("DB connected"));

mongoose.connection.on("error",(err)=>{
   console.log("DB connection error :" + err.message);
});

//BRING IN ROUTES
const homeRouter = require("./routes/homeRouter");
const articlesRouter = require("./routes/articleRouter");

//CUSTOM MIDDLEWARE, MOVES ONTO NEXT PHASE
const myOwnMiddleware = (req, res, next) => {
   console.log("middleware applied!!");
   next();
};

//MIDDLEWARE
app.use(myOwnMiddleware);
app.use(morgan("dev"));
app.use(bodyParser.json());

//CONTROLLER ROUTING
app.use("/", homeRouter);
app.use("/articles", articlesRouter);


const port = process.env.PORT;
app.listen(port,()=>{
   console.log(`A node.js API is listening on port: ${port}`);
});