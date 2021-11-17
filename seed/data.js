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
    {
      title: 'Chunky Monkey',
      price: '7.99',
      description: 'Decadent chocolate peanut-buttery goodness.',
      ingredients: 'banana, peanut butter, cocoa powder, almond milk',
      imageURL: '../img/smoothie-chunky-monkey.jpeg',
    },
    {
      title: 'Tropical Sunrise',
      price: '8.99',
      description: 'A mood lifting blast of fresh fruity flavors to leave you energized and ready for anything',
      ingredients: 'banana, pineapple, mango, strawberry, orange juice, coconut water, papaya, coconut flakes',
      imageURL: '../img/smoothie-tropical-sunrise.jpeg',
    },    
    {
      title: 'Green Machine',
      price: '9.99',
      description: 'A nourishing elixir sure to leave you energized, refreshed and feeling like a superhero',
      ingredients: 'pineapple juice, spinach, green apple, kale, celery, mango, pineapple',
      imageURL: '../img/smoothie-green-machine.jpeg',
    },    
    {
      title: 'Purple Jazz',
      price: '8.77',
      description: 'Smooth with a bite. This fun purple mix is perfect for a refined pallete looking for news flavors',
      ingredients: 'medjool dates, coconut water, cashews, blueberries, greek yogurt, lime juice, pinch of salt',
      imageURL: '../img/smoothie-purple-jazz.jpeg',
    },
  ]

  // insert products into database
  await Smoothie.insertMany(smoothies)
  console.log('Created users and smoothies!')

  // close database connection. done.
  db.close()
}

insertData()
