const Plan = require('../model/Planning');

exports.savePlan = async (req, res) => {
  try {
    const { tripID, dayPlans } = req.body;
    if (!tripID || !dayPlans) {
      return res.status(400).json({ error: 'tripID and dayPlans are required' });
    }
    const newPlan = new Plan({ tripID, dayPlans });
    const savedPlan = await newPlan.save();
    res.json(savedPlan);
  } catch (error) {
    console.error('Error saving plan:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getPlan = async (req, res) => {
  try {
    const plans = await Plan.find({});
    res.json(plans);
  } catch (error) {
    console.error('Error fetching plans:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
