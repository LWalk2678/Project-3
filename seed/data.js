import db from '../db/connection.js'
import Smoothie from '../models/smoothie.js'
import User from '../models/user.js'
import bcrypt from 'bcrypt'

const insertData = async () => {
  // reset database
  await db.dropDatabase()

  const user1 = new User({
    username: 'user',
    email: 'user@user.com',
    password_digest: await bcrypt.hash('password', 11)
  })
  await user1.save()

  // products data that we want inserted into database
  const smoothies = [
    {
      title: 'Strawberry Banana',
      price: '7.99',
      description: 'The classic original smoothie',
      ingredients: 'strawberries, bananas, yogurt, orange juice, honey',
      imageURL: '../img/smoothie-strawberry-banana.jpg',
    },
    {
      title: 'PB&J Blast',
      price: '9.99',
      description: 'Your childhood in a smoothie. The taste will bring back memories and leave you refreshed.',
      ingredients: 'peanut butter, strawberry jelly, banana, milk',
      imageURL: '../img/smoothie-pbj-blast.jpg',
    },
  ]

  // insert products into database
  await Smoothie.insertMany(smoothies)
  console.log('Created users and smoothies!')

  // close database connection. done.
  db.close()
}

insertData()
