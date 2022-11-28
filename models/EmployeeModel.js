const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    About: String,
    token: String,
    country: String,
    location: String,
    lng: Number,
    lat: Number,
    dob: String,
    gender: Number,
    userType: Number,
    userStatus: Number,
    profilePicture: String,
    coverPicture: String,
    enablefollowme: Boolean,
    sendmenotifications: Boolean,
    sendTextmessages: Boolean,
    enabletagging: Boolean,
    createdAt: String,
    updatedAt: String,
    livelng: Number,
    livelat: Number,
    liveLocation: String,
    creditBalance: Number,
    myCash: Number
})

module.exports = mongoose.model('Employee', EmployeeSchema)

