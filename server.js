const express = require("express");
const app=express();
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const { Router } = require("express");
// const authJwt = require("./helpers/jwt");
require("dotenv/config");

mongoose.pluralize(null);
mongoose.set("strictQuery",true);

// const { jwt } = require("express-jwt");

app.use(express.json());
app.use(cors());
app.options("*",cors());
app.use(morgan('tiny'));


// app.use(authJwt);
// app.use(
//   jwt({
//     secret: "shhhhhhared-secret",
//     algorithms: ["HS256"],
//   })
// );
// app.use(errorHandler);

const router = require('./routes/index');
app.use('/api',router);

// app.use("/user",require("./routes/users"));
// app.use("/category",require("./routes/categories"));
// app.use("/product",require("./routes/products"));E
// app.use("/order",require("./routes/orders"));


mongoose
    // .connect("mongodb://localhost:27017/node_5",{
    .connect(process.env.CONNECTION_STRING,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>console.log("connected!"))
    .catch((err)=> {
        console.log(err);
    })

const PORT = process.env.PORT || 5500;
app.listen(PORT,()=>{
    console.log(`server listen successfully: http://localhost:${PORT}`);
});
