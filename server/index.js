/* eslint-disable no-undef */
import express from 'express';
import mongoose from 'mongoose';
import router from './router.js'

mongoose
  .connect("mongodb://localhost:27017/testdb", { useNewUrlParser: true })
  .then(() => {
    const app = express()
    app.use(express.json())
    app.use("/api", router)
    const PORT = process.env.PORT || 5000

    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`)
    })
  }).catch(e => {
    console.log("Error", e)
  })