const mongoose = require('mongoose')

var EventSchema = new mongoose.Schema({
    name: String,
    Date: Date,
    createdBy: String,
    peopleInterested: Number,
    cretaedAt: Date,
    updatedAt: Date
})

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;