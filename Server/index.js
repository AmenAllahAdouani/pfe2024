const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const TripsModel = require("./model/Trips")
const tripsRouter = require('./router/Trips')
const Subscriber = require('./model/Subscriber')
const subscribeRouter = require('./router/Subscriber')
const Reviews = require('./model/Reviews')
const reviewsRouter = require('./router/Reviews')


const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/");


app.use('/api/trips', tripsRouter);
app.use('/api/subscriber', subscribeRouter);
app.use('/api/reviews', reviewsRouter);

app.listen(3001, () => {
    console.log("server is running")
})