const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
  tripID: { type: String, required: true },
  dayPlans: { type: Map, of: [new mongoose.Schema({
    time: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true }
  })] }
});

const Plan = mongoose.model('Plan', planSchema);

module.exports = Plan;
