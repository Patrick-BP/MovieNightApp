const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require('multer')
const path = require("path");
const userRouter = require("./routers/UserRouter");
const CommentsRouter = require("./routers/MoviesRouter");
const MoviesRouter = require("./routers/MoviesRouter");

const FavRouter = require("./routers/FavRouter");
const PlaylistRouter = require("./routers/PlaylistRouter");

const Response = require('./models/responseobj');
const authRouter = require('./routers/authRouter');

const app = express();



app.use(cors());
app.use(express.json());
app.use("/images", express.static(path.join(__dirname,"/images")));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
try{
  app.post("/img/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});
}catch(e){
  res.status(400).json("File failed");
}




app.use(authRouter);
app.use("/users", userRouter);
app.use("/movies", MoviesRouter);
app.use("/comments", CommentsRouter);
app.use("/fav", FavRouter);
app.use("/playlist", PlaylistRouter);

app.use((req, res, next) => {
  res.status(404).json(new Response(true, err.message, null));
});
app.use((err, req, res, next) => {
  res.status(500).json(new Response(true, err.message, null));
});

mongoose.connect("mongodb://127.0.0.1:27017/moviesDB").then(() => {
  app.listen(3001, () => console.log("listening on Port", 3001));
});
