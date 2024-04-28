const Subscriber = require('../model/Subscriber');

exports.subscribe = async (req, res) => {
  try {
    const { email, name } = req.body;
    const subscriber = await Subscriber.create({ email, name });
    res.status(201).json({ message: 'Subscription successful', subscriber });
  } catch (error) {
    res.status(400).json({ message: 'Error subscribing', error: error.message });
  }
};