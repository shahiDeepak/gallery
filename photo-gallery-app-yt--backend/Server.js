const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const UploadRoute = require("./routes/UploadRoute");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const PORT = process.env.PORT || 5000;
const DB = "mongodb+srv://Trailroot:Trailroot@cluster1.4j2dq8v.mongodb.net/";

// mongoose.connect(process.env.URL, () => {
//   console.log("MonoDB Connected...");
// });

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useFindAndModify: false,
  // useCreateIndex:true
});
console.log(`you are connected to DataBase 😉`);

app.use(UploadRoute);

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});
