const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;
const port = process.env.PORT || 4000;
const app = express();
require("dotenv").config();

//MIDDLEWARE SETUP

app.use(cors());
app.use(express.json());

// SERVER STATUS

app.get("/", (req, res) => {
  res.status(200).send("Server Running [OK]");
});

//LISTENING PORT

app.listen(port, () => {
  console.log("[*] Listening to port ", port);
});

//MONGODB CONNECTION AND CONFIGUREING API

const uri = `mongodb+srv://practice:ISlz3WEfWEIrIGjT@cluster0.wzlrk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



  async function run() {
    try {
      await client.connect();
      const database = client.db("project-101-doctor");
      const haiku2 = database.collection("users");
      const haiku3 = database.collection("doctordata");
      const haiku4 = database.collection("prinfo");
      const haiku5 = database.collection("users");
      const haiku6 = database.collection("pres-img");
      const haiku7 = database.collection("pres-info");

      app.get("/users", async (req, res) => {
        res.send(await haiku5.find({}).toArray());
      });

      app.get("/users/:email", async (req, res) => {
        const user = await haiku2.findOne({ email: req.params.email });
        let isAdmin = false;
        let isDoctor = false;
        if (user?.role === "admin") {
          isAdmin = true;
        } else if (user?.role === "doctor") {
          isDoctor = true;
        }
        res.json({ admin: isAdmin, doctor: isDoctor });
      });

      app.post("/users", async (req, res) => {
        res.json(await haiku2.insertOne(req.body));
      });

      app.put("/users", async (req, res) => {
        const result = await haiku2.updateOne({ email: user.email }, { $set: req.body }, { upsert: true });
      });

      app.put("/users/admin", async (req, res) => {
        req.json(await haiku5.updateOne({ email: req.body.email }, { $set: { role: "admin" }}));
      });

      app.get("/pres-info", async (req, res) => {
        res.send(await haiku7.find({}).toArray());
      });

      app.post("/pres-info", async (req, res) => {
        res.json(await haiku7.insertOne(req.body));
      });

      app.get("/pres-img", async (req, res) => {
        res.send(await haiku6.find({}).toArray());
      });

      app.get("/pres-img/:email", async (req, res) => {
        res.json(await haiku6.findOne({ owner: req.params.email }));
      });

      app.post("/pres-img", async (req, res) => {
        res.json(await haiku6.insertOne(req.body));
      });

      app.delete("/pres-img/:id", async (req, res) => {
        res.json(await haiku6.deleteOne({ _id: ObjectId(req.params.id) }));
      });

      app.get("/users-info", async (req, res) => {
        res.send(await haiku4.find({}).toArray());
      });

      app.get("/users-info/:id", async (req, res) => {
        res.json(await haiku4.findOne({ _id: ObjectId(req.params.id) }));
      });

      app.post("/users-info", async (req, res) => {
        res.json(await haiku4.insertOne(req.body));
      });

      app.put("/users-info", async (req, res) => {
        const result = await haiku4.updateOne({ email: user.email }, { $set: req.body}, { upsert: true });
      });

      app.put("/users-info/:id", async (req, res) => {
	const result = await haiku4.updateOne({"_id" :ObjectId(req.params.id) },{$set : req.body},{ upsert: true });
      });

      app.delete("/users-info/:id", async (req, res) => {
        res.json(await haiku4.deleteOne({ _id: ObjectId(req.params.id) }));
      });
  
      app.get("/doctorlist", async (req, res) => {
        res.send(await haiku3.find({}).toArray());
      });

      app.get("/doctorlist/:id", async (req, res) => {
        res.json(await haiku3.findOne({ _id: ObjectId(req.params.id) }));
      });

      app.post("/doctorlist", async (req, res) => {
        res.json(await haiku3.insertOne(req.body));
      });

      app.delete("/doctorlist/:id", async (req, res) => {
        res.json(await haiku3.deleteOne({ _id: ObjectId(req.params.id) }));
      });

     finally {
      // await client.close();
    }
  }
  run().catch(console.dir);
});
