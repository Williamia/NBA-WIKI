const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({message: "Api works!!"});
});

const mongoURI = process.env.MONGO_URI; 

mongoose.connect(mongoURI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("error:", err));


const PlayerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    number: { type: Number, required: true },
    position: { type: String, required: true },
    team: { type: String, required: true },
    image: { type: String, required: true },
    ppg: { type: Number, required: true },
    rpg: { type: Number, required: true },
    apg: { type: Number, required: true },
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    country: { type: String, required: true },
    age: { type: Number, required: true },
    birthdate: { type: String, required: true },
    draft: { type: String, required: true },
    experience: { type: String, required: true }
});

const Player = mongoose.model("Player", PlayerSchema);

const TeamSchema = new mongoose.Schema({
    name: { type: String, required: true},
    city: { type: String, required: true},
    image: { type: String, required: true},
    coach: { type: String, required: true},
    conference: { type: String, required: true},
    color: { type: String, required: true},
    players: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player"
    }]
});

app.post("/player-register", async (req, res) => {

    try {
        const { name, number, position, team, image, ppg, rpg, apg, height, weight, country, age, birthdate, draft, experience } = req.body;

     
        if (!Object.values(req.body).every(field => field != null && field !== "")) {
            return res.status(400).json({ error: "cannot have null fields" });
        }

        
        const existingTeam = await Team.findOne({ name: team });
        if(!existingTeam) {
            return res.status(404).json({ error: "Invalid team field"});
        }

       
        const newPlayer = new Player({
            name, number, position, team, image, ppg, rpg, apg, height, weight, country, age, birthdate, draft, experience
        });

        await newPlayer.save();

        existingTeam.players.push(newPlayer._id);
        await existingTeam.save();

        res.status(201).json(newPlayer);
    } catch (error) {
        res.status(500).json({ error: "Request Error" });
    }

});

const Team = mongoose.model("Team", TeamSchema);

app.post("/team-register", async (req, res) => {
    try {
        const { name, city, image, coach, conference, color, players } = req.body;

        if (!Object.values(req.body).every(field => field != null && field !== "")) {
            return res.status(400).json({ error: "cannot have null fields" });
        }

        const newTeam = new Team({
            name, city, image, coach, conference, color, players
        });

        await newTeam.save();

        res.status(201).json(newTeam);
    } catch (error) {
        res.status(500).json({ error: "Request Error" });
    }
});


app.put("/teams/:id", async (req, res) => {
    const { id } = req.params;
    const { name, city, image, coach, conference, color, players } = req.body;

    try {
        const updatedTeam = await Team.findByIdAndUpdate(
            id,
            {
                name,
                city,
                image,
                coach,
                conference,
                color,
                players, 
            },
            { new: true } 
        );

        if (!updatedTeam) {
            return res.status(404).json({ error: "Team not found" });
        }

        res.status(200).json(updatedTeam);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Request Error" });
    }

});

app.put("/players/:id", async (req, res) => {

    const { id } = req.params;
    const { name, number, position, team, image, ppg, rpg, apg, height, weight, country, age, birthdate, draft, experience } = req.body;

    try{
        const updatedPlayer = await Player.findByIdAndUpdate(
            id,
            { name, number, position, team, image, ppg, rpg, apg, height, weight, country, age, birthdate, draft, experience },
            { new: true }
        );

        if(!updatedPlayer){
            return res.status(404).json({ error: "Player not found "});
        }

        res.status(200).json(updatedPlayer);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Request Error"});
    }

});


app.get("/players", async (req, res) => {
    try {
        const players = await Player.find();
        res.json(players);
    } catch (error) {
        res.status(500).json({ error: "Request Error" });
    }
})

app.get("/teams", async (req, res) => {
    try{
        const teams = await Team.find().populate('players');
        res.json(teams);
    } catch (error){
        res.status(500).json({ error: "Request Error "});
    }
})

app.get("/teams/:id", async (req, res) => {
    try {
        const teams = await Team.findById(req.params.id).populate('players');
        if(!teams){
            return res.status(404).json({ message: "team not found" });
        }
        res.json(teams);
    } catch (error){
        res.status(500).json({ message:  "Error on find the team", error});
    }
})

app.listen(PORT, () => {
    console.log(`Server running: http://localhost:${PORT}`);
});