const mongoose = require('mongoose')

var GroupSchema = new mongoose.Schema({
    name: String,
    membersName: Array,
    privacy: String,
    createdBy: String,
    updatedAt: String
})

const Group = mongoose.model('Group', GroupSchema);

module.exports = Group;