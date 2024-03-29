const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const route = require("./routes/userRoute");

const app = express();
app.use(bodyParser.json());

dotenv.config();
app.use("/api/user", route);
const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;
mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("Database connected successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on port : ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
