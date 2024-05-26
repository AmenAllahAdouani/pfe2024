const Plan = require('../model/Planning');

exports.savePlan = async (req, res) => {
  try {
    const tripID = req.params.tripID;
    const newPlan = new Plan({ ...req.body, tripID }); 
    const savedPlan = await newPlan.save();
    res.json(savedPlan);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getPlan = async (req, res) => {
  try {
    const plan = await Plan.find({});
    res.json(plan);
  } catch (error) {
    res.status(500).send(error);
  }
};
