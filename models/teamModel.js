const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const memberSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    playerNumber: String,
    age: Number,
    height: Number,
    health: Number,
    position: String,
    reflexes: Number,
    bounce: Number,
    oneOnOne: Number,
    technique: Number,
    speed: Number,
    finishing: Number,
    shooting: Number,
    dribbling: Number,
    defense: Number,
    tackling: Number,
    aggression: Number,
    stamina: Number,
    knowledge: Number,
    tactics: Number,
    motivation: Number,
    discipline: Number
}, {
    _id: false
});

const teamSchema = new Schema({
    teamId: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    budget: Number
}, {
    _id: false
});

const dataSchema = new Schema({
    team: teamSchema,
    members: [memberSchema]
});

const mainSchema = new Schema({
    data: dataSchema
});


const Team = mongoose.model('Team', mainSchema);
module.exports = Team;

//////////////////////