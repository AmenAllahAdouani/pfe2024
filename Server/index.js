const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const tripsRouter = require('./router/Trips')
const subscribeRouter = require('./router/Subscriber')
const reviewsRouter = require('./router/Reviews')
const destinationRouter = require('./router/Destination')
const hostRouter = require('./router/Host')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/");


app.use('/api/trips', tripsRouter);
app.use('/api/subscriber', subscribeRouter);
app.use('/api/reviews', reviewsRouter);
app.use('/api/destination', destinationRouter);
app.use('/api/host', hostRouter);

app.listen(3001, () => {
    console.log("server is running")
})