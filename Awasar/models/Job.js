const mongoose = require('mongoose');

const jobsSchema = {
    position: String,
    username: String,
    company: String,
    jobLocation: String,
    status: String,
    jobType: String,
    date: String,
};

module.exports = mongoose.model('Job', jobsSchema);