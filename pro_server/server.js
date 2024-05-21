const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");

// Import Router
const itemRouter = require('./routes/itemRoute');
const userRouter = require("./routes/authRoutes");

const app = express();

app.use(cors(
  {
    credentials: true,
    origin: "http://localhost:3000",
    exposedHeaders: ["set-cookie"],
  }
));
app.use(
  session({
    secret: "This will be secret",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
  })
);
app.use(express.json());

// Connect DB
mongoose.connect(
  // "mongodb+srv://MERN_Project:gameweb@mern.woihtzl.mongodb.net/GameWeb?retryWrites=true&w=majority",
  "mongodb+srv://MERN_Project:gameweb@mern.woihtzl.mongodb.net/GameWeb?retryWrites=true&w=majority&appName=MERN",

  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("Something is wrong", err));



// Therritja e router
app.use(itemRouter);
app.use(userRouter);



app.use("/", (req, res) => {
  res.send("Hello Node!");
});

app.listen(5000, () => {
  console.log("Server Created");
});

