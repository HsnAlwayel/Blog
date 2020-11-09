const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

//Routers
const PostRouter = require("./routes/posts");
app.use(PostRouter);

//Port Setup
const PORT = process.env.PORT || 8000;

// Db Connection
const CONNECTION_URL =
  "mongodb+srv://admin:@Password1@cluster0.ndxt1.mongodb.net/blog?retryWrites=true&w=majority";

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`server running on port :${PORT}`))
  )
  .catch((error) => console.log(error.message));
