var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);
const bodyparser = require("body-parser");
const firebaseConfig = require("./config");

var cors = require("cors");

require("firebase/firestore");

const firebase = require("firebase");
firebase.initializeApp(firebaseConfig);

app.use(bodyparser.json());
app.use(cors());

const port = 5000;

const rooms = [];

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/register", async (req, res) => {
  const user = {
    email: req.body.email,
  };

  const CreateUser = await firebase
    .auth()
    .createUserWithEmailAndPassword(req.body.email, req.body.password);

  const StoreUser = await firebase.firestore().collection("users").add(user);

  res.status(200).send("done");
});

app.post("/login", async (req, res) => {
  try {
    console.log(req.body.email);
    const authenticate = await firebase
      .auth()
      .signInWithEmailAndPassword(req.body.email, req.body.password);

    console.log(authenticate);

    res.status(200).send("done");
  } catch (err) {
    res.status(400).send(err);
  }
});

app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-type,Accept,X-Access-Token,X-Key"
  );
  if (req.method == "OPTIONS") {
    res.status(200).end();
  } else {
    next();
  }
});

io.on("connection", function (socket) {
  console.log("a user connected");

  socket.on("join_room", (room) => {
    socket.join(room);
    rooms.push(room);
    console.log(rooms);
  });

  socket.on("message", ({ room, message }) => {
    socket.to(room).emit("message", {
      message,
      name: "Friend",
    });

    console.log(room, message);
  });

  socket.on("typing", ({ room }) => {
    socket.to(room).emit("typing", "Someone is typing");
  });

  socket.on("stopped_tying", ({ room }) => {
    socket.to(room).emit("stopped_tying");
  });
});

http.listen(port, function () {
  console.log(`listening on *:${port}`);
});
