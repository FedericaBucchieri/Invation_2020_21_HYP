const { Sequelize, DataTypes } = require('sequelize')

// Development
const db = new Sequelize(
  'postgres://postgres:11235813@localhost:5432/InvationDB'
)

// Production
// const pg = require('pg')
// pg.defaults.ssl = true
// const db = new Sequelize(process.env.DATABASE_URL, {
//   ssl: true,
//   dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
// })

/**
 * Function to define the structure of the database
 */
function defineDatabaseStructure() {
  const Invation = db.define(
    'invation',
    {
      name: DataTypes.STRING,
      concept: DataTypes.TEXT,
      more: DataTypes.TEXT,
      summary: DataTypes.TEXT,
      image: DataTypes.STRING,
      thumbnail: DataTypes.STRING,
    },
    {
      underscored: true,
    }
  )
  const Vision = db.define(
    'vision',
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      image: DataTypes.STRING,
    },
    {
      underscored: true,
    }
  )
  // Creating the 1 -> N association between Article and Comment
  // More on association: https://sequelize.org/master/manual/assocs.html
  Vision.hasMany(Invation, { foreignKey: 'vision_id' })
  db._tables = {
    Vision,
    Invation,
  }
}

/**
 * Function to insert some fake info in the database
 */
async function insertFakeData() {
  const { Vision, Invation } = db._tables
  // Create the first Article
  const firstInvation = await Invation.create({
    name: 'MuseX',
    concept:
      'In a smart interactive multi-sensory room, children can play, socialize, learn and test their knowledge about mammals, birds and geology. Our goal is to bring a fully interactive museum inside a school, where teachers can bring their students in a totally save an engaging environment. MuseX combines the features of interactive technologies and multi sensory experiences. It uses technologies such as projectors, smart objects, body movement recognition technologies and smart lights. Other than exploring the museum and its dioramas, three mini game are available. Children can deal with rock categorization to make a volcano erupt, habitat recognition working in team to beat the rivals and guessing the correct specie of bird collaborating to catch the right bird.',
    more:
      'All those activities are designed to improve self-movement recognition, ability to work in group, reasoning skills and test contents learning. MuseX has a full body interaction paradigm with drag &amp; drop, RFID reader, walk around interaction and posting gesture recognition. The Magic Room provides both audible and visual feedback that enrich MuseX experience and all the activities can be managed by the teacher using a dedicated app.',
    summary:
      'MuseX is a smart space software, aimed at differentiating the teaching proposal in elementary schools, offering a special experience to children. It proposes a 360° experience inside a Natural History Museum.',
    image: '/musex-big.png',
    thumbnail: '/musex-small.png',
  })
  // await Article.create({
  //   title: 'Why Fallout 76 is broken',
  //   summary: '..no really... why?',
  //   content:
  //     'After more than 50 hours plundering the irradiated wasteland of Fallout 76, the greatest mystery still lingering is who this mutated take on Fallout is intended for. Like many of Vault-Tec’s underground bunkers, Bethesda’s multiplayer riff on its post-nuclear RPG series is an experiment gone awry. There are bright spots entangled in this mass of frustratingly buggy and sometimes conflicting systems, but what fun I was able to salvage from the expansive but underpopulated West Virginia map was consistently overshadowed by the monotony of its gathering and crafting treadmill.\nOn the surface, Fallout 76 is another dose of Bethesda’s tried-and-true open-world RPG formula on a larger-than-ever map that’s begging to be explored. As you emerge from Vault 76 you’ll start in a relatively peaceful forest and venture out into more dangerous pockets of the irradiated wasteland. My favorite is traveling the lengths of the Cranberry Bog, where the pinkish-red fields are seemingly inviting from afar but turn out to be full of a snaking system of trenches and alien forests that hide the worst horrors of the wasteland, but there are many more.',
  //   image:
  //     'https://www.meme-arsenal.com/memes/925f3e6e213ebe0bc196d379a7281ee8.jpg',
  // })
  const vision1 = await Vision.create({
    name: 'Education',
    description: '',
    image: '',
  })
  // const comment2 = await Comment.create({
  //   content: 'Such Doge.',
  // })

  // Adding the first comment to the first article
  await vision1.addInvation(firstInvation.id)
}
/**
 * Function to initialize the database. This is exported and called in the main api.js file
 */
async function initializeDatabase() {
  // Call the function for the database structure definition
  defineDatabaseStructure()
  // Synchronize Sequelize with the actual database
  await db.sync({ force: true })
  // Call the function to insert some fake data
  await insertFakeData()
  return db
}

export default initializeDatabase
