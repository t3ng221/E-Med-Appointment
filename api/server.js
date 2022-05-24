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
app.listen(port, () => {
  console.log("[*] Listening to port ", port);
});

//MONGODB CONNECTION AND CONFIGUREING API

const uri = `mongodb+srv://practice:ISlz3WEfWEIrIGjT@cluster0.wzlrk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// CONNECTION DEBUGING
client.connect((err) => {
  if (err === undefined) {
    console.log("[*] Database Connected Successfully.");
  } else {
    console.error("[*] Database Connection Failed.");
  }

  // Routing Start =========>

  async function run() {
    try {
      await client.connect();
      const database = client.db("project-101-doctor");
      const haiku3 = database.collection("doctordata");
      const haiku4 = database.collection("prinfo");
      const haiku5 = database.collection("users");
      const haiku6 = database.collection("pres-img");
      const haiku7 = database.collection("pres-info");
      const haiku8 = database.collection("reg-user-info");

      // GET,POST,PUT,DELETE FOR /users
      app.get("/users", async (req, res) => {
        res.send(await haiku5.find({}).toArray());
      });
      app.get("/users/:email", async (req, res) => {
        const user = await haiku5.findOne({ email: req.params.email });
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
        res.json(await haiku5.insertOne(req.body));
      });
      app.put("/users/:email", async (req, res) => {
        const result = await haiku5.updateOne(
          { email: req.params.email },
          { $set: { role: "admin" } }
        );
      });
      app.delete("/users/:id", async (req, res) => {
        res.json(await haiku5.deleteOne({ _id: ObjectId(req.params.id) }));
      });

      // GET,POST,DELETE FOR /reg-user-info

      app.get("/reg-user-info", async (req, res) => {
        res.send(await haiku8.find({}).toArray());
      });
      app.post("/reg-user-info", async (req, res) => {
        res.json(await haiku8.insertOne(req.body));
      });
      app.delete("/reg-user-info/:id", async (req, res) => {
        res.json(await haiku8.deleteOne({ _id: ObjectId(req.params.id) }));
      });

      // GET,POST FOR /pres-info

      app.get("/pres-info", async (req, res) => {
        res.send(await haiku7.find({}).toArray());
      });
      app.post("/pres-info", async (req, res) => {
        res.json(await haiku7.insertOne(req.body));
      });

      // GET,POST,DELETE FOR /pres-img

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

      // GET,POST,PUT,DELETE FOR /users-info

      app.get("/users-info", async (req, res) => {
        res.send(await haiku4.find({}).toArray());
      });

      app.get("/users-info/:id", async (req, res) => {
        res.json(await haiku4.findOne({ _id: ObjectId(req.params.id) }));
      });

      app.post("/users-info", async (req, res) => {
        res.json(await haiku4.insertOne(req.body));
      });

      app.post("/doctorlist", async (req, res) => {
        res.json(await haiku3.insertOne(req.body));
      });

      app.put("/users-info", async (req, res) => {
        const user = req.body;
        const filter = { email: user.email };
        const option = { upsert: true };
        const update = { $set: user };
        const result = await haiku4.updateOne(filter, update, option);
      });

      app.put("/users-info/:id", async (req, res) => {
        const result = await haiku4.update(
          { _id: ObjectId(req.params.id) },
          { $set: req.body }
        );
      });

      app.delete("/users-info/:id", async (req, res) => {
        res.json(await haiku4.deleteOne({ _id: ObjectId(req.params.id) }));
      });

      // GET,DELETE FOR /doctorlist

      app.get("/doctorlist", async (req, res) => {
        res.send(await haiku3.find({}).toArray());
      });

      app.get("/doctorlist/:id", async (req, res) => {
        res.json(await haiku3.findOne({ _id: ObjectId(req.params.id) }));
      });

      app.delete("/doctorlist/:id", async (req, res) => {
        res.json(await haiku3.deleteOne({ _id: ObjectId(req.params.id) }));
      });
    } finally {
    }
  }
  run().catch(console.dir);
});
