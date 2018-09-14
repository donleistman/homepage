'use strict'

const db = require('../server/db')
const {Folder, Item, User} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const items = await Promise.all([
    Item.create({
      title: 'Paul Manafort Agrees to Cooperate With Special Counsel',
      url: 'https://www.nytimes.com/2018/09/14/us/politics/manafort-plea-deal.html',
      userId: 3
    }),
    Item.create({
      title: 'Massachusetts Residents Told to Stay Away From Homes After Gas Explosions and Fires',
      url: 'https://www.nytimes.com/2018/09/14/us/massachusetts-gas-explosions-fires.html',
      userId: 3
    })
  ])

  const folders = await Promise.all([
    Folder.create({title: 'Folder 1', userId: 3}),
    Folder.create({title: 'Folder 2', userId: 3})
  ])


  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${items.length} items`)
  console.log(`seeded ${folders.length} folders`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
