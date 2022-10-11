import express from 'express'
import User from './models/users.js'
import bcrypt from 'bcrypt'

const router = express.Router()

//Register Users
router.post("/newUser", async (req, res) => {
  const { username, password } = req.body

  const data = await User.find({
    username: username
  })
  console.log("hey", data)
  if(data == []) {
    bcrypt.hash(password, 10, async function(err, hash) {
      // store hash in the database
      const user = new User({
        username: username,
        password: hash
      })
    
      await user.save()
      res.send({error: false, user})
    });
  } else {
    res.send({
      error: "This user was already registered." 
    })
  }
})

export default router