const express = require("express");
const mongoose = require("mongoose");
const Team = require("./models/teamModel");
require("dotenv").config();
const path = require("path");
const databaseUri = process.env.DATABASE;
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use("/src", express.static(path.join(__dirname, "src")));

mongoose.connect(databaseUri);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/teams/:teamId", async (req, res) => {
  try {
    const teamId = req.params.teamId;
    const team = await Team.findOne({
      "data.team.teamId": teamId,
    });
    if (!team) {
      return res.status(404).json({
        message: "Takım bulunamadı",
      });
    }
    res.status(200).json(team);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.post("/teams", async (req, res) => {
  try {
    const newTeam = new Team(req.body);
    console.log(newTeam);
    await newTeam.save();
    res.status(201).json(newTeam);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.delete("/teams/:teamId", async (req, res) => {
  try {
    const teamId = req.params.teamId;
    const team = await Team.findOneAndDelete({
      "data.team.teamId": teamId,
    });

    if (!team) {
      return res.status(404).json({
        message: "Takım bulunamadı",
      });
    }

    res.status(200).json({
      message: "Takım başarıyla silindi",
      team,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("welcome");
});
