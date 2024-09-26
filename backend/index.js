const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Register = require("./models/registers");
const port = process.env.port || 5001;
const app = express();

app.use(express.json());
app.use(cors());

// +++++++++++++++++++++++++++database connection ++++++++++++++++++++++++++

mongoose
  .connect(
    "mongodb+srv://SomyaBatham:somya1234@cluster0.p58kjm7.mongodb.net/employee"
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
  });

// ++++++++++++++++++++ Ragistration +++++++++++++++++++++
app.post("/register", async (req, res) => {
  try {
    const password = req.body.password;
    const conpassword = req.body.conpassword;

    if (password === conpassword) {
      const student = new Register({
        name: req.body.name,
        email: req.body.email,
        state: req.body.state,
        city: req.body.city,
        password: password,
        conpassword: conpassword,
      });

   const Table = await student.save();

    } else {
      res.send("password are not matching");
      console.log("don't save data");
    }
  } catch (error) {
    res.status(500).send(error);
    console.log("error");
  }
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  Register.findOne({ email: email }).then((user) => {
    if (user) {
     

      if (user.password === password) {
        res.json("success");
      } else {
        res.json("incorrect");
      }
    } else {
      res.json("no record");
    }
  });
});

// ++++++++++++++++++server listen +++++++++++++++++++++++
app.listen(port, (req, res) => {
  console.log(`server run in port no ${port}`);
});
