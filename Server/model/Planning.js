const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({}, { strict: false });

const Plan = mongoose.model('Plan', planSchema);

module.exports = Plan;