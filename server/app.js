var app = require("express")();

const bodyparser = require("body-parser");
const firebaseConfig = require("./config");

const cors = require("cors");

require("firebase/firestore");

const firebase = require("firebase");
firebase.initializeApp(firebaseConfig);

app.use(bodyparser.json());
app.use(cors());

const port = 5000;

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/register", async (req, res) => {
  const CreateUser = await firebase
    .auth()
    .createUserWithEmailAndPassword(req.body.email, req.body.password);

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

app.post("/userData", async (req, res) => {
  const user = {
    name: req.body.name,
    communities: [],
  };
  console.log(user);

  const postData = await firebase
    .firestore()
    .collection("users")
    .doc(req.body.email)
    .collection("userData")
    .add(req.body);

  const StoreUser = await firebase
    .firestore()
    .collection("names")
    .doc(req.body.email)
    .set(user);

  console.log(postData);
  res.status(200).send("done");
});

app.post("/createCommunity", async (req, res) => {
  console.log(req.body.communityname);
  const data = await firebase
    .firestore()
    .collection("communities")
    .doc(req.body.communityname)
    .collection("users")
    .add({ user: req.body.username });

  const communitydata = await firebase
    .firestore()
    .collection("names")
    .doc(req.body.email)
    .get();

  let community = communitydata.data().communities;

  community.push(req.body.communityname);

  const updateCommunityList = await firebase
    .firestore()
    .collection("names")
    .doc(req.body.email)
    .set({ communities: community });

  res.send(updateCommunityList);
});

app.post("/fetchUser", async (req, res) => {
  const data = await firebase
    .firestore()
    .collection("names")
    .doc(req.body.email)
    .get();

  res.send(data.data().name);
});

app.post("/fetchCommunity", async (req, res) => {
  const communitydata = await firebase
    .firestore()
    .collection("names")
    .doc(req.body.email)
    .get();

  const community = communitydata.data().communities;

  res.send(community);
});

app.post("/message", async (req, res) => {
  console.log(req.body);

  const message = await firebase
    .firestore()
    .collection("communities")
    .doc(req.body.communityname)
    .collection("message")
    .add({ message: req.body.message });
});

app.post("/fetchCommunityUsers", async (req, res) => {
  const user = await firebase
    .firestore()
    .collection("communities")
    .doc(req.body.communityname)
    .collection("users")
    .get();

  let users = [];
  user.docs.map((doc) => {
    users.push(doc.data().user);
  });

  res.send(users);
});

app.post("/getmessage", async (req, res) => {
  const message = await firebase
    .firestore()
    .collection("communities")
    .doc(req.body.communityname)
    .collection("message")
    .get();

  let messages = [];
  message.docs.map((doc) => {
    messages.push(doc.data().message);
  });

  res.send(messages);
});

app.listen(port, function () {
  console.log(`listening on *:${port}`);
});
