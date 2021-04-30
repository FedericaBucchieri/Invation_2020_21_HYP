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
  // ------------- ENTITIES DEFINITION --------------
  const Invation = db.define(
    'invation',
    {
      name: DataTypes.STRING,
      overview: DataTypes.TEXT,
      concept: DataTypes.TEXT,
      more: DataTypes.TEXT,
      image: DataTypes.STRING,
      thumbnail: DataTypes.STRING,
      video: DataTypes.STRING,
      creationDate: DataTypes.DATE,
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
  const Invationer = db.define(
    'invationer',
    {
      name: DataTypes.STRING,
      surname: DataTypes.STRING,
      role: DataTypes.STRING,
      gender: DataTypes.STRING,
      age: DataTypes.INTEGER,
      nationality: DataTypes.STRING,
      description: DataTypes.TEXT,
      quote: DataTypes.TEXT,
      picture: DataTypes.STRING,
    },
    {
      underscored: true,
    }
  )
  const Technology = db.define(
    'technology',
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      image: DataTypes.STRING,
      color: DataTypes.STRING,
    },
    {
      underscored: true,
    }
  )

  // --------------- ASSOCIATIONS -------------------
  // More on association: https://sequelize.org/master/manual/assocs.html

  // Composition between Vision and Invations
  Vision.hasMany(Invation, { foreignKey: 'vision_id' })
  Invation.belongsTo(Vision)
  // 'Prefers' relationship One-To-Many
  Vision.hasMany(Invationer, { foreignKey: 'vision_id' })
  Invationer.belongsTo(Vision)
  // 'Develops' relationship Many-To-Many
  Invationer.belongsToMany(Invation, { through: 'InvationInvationer' })
  Invation.belongsToMany(Invationer, { through: 'InvationInvationer' })
  // 'Based on' relationship Many-To-Many
  Invation.belongsToMany(Technology, { through: 'TechnologyInvation' })
  Technology.belongsToMany(Invation, { through: 'TechnologyInvation' })

  db._tables = {
    Invation,
    Vision,
    Invationer,
    Technology,
  }
}

// --------------- SEEDING -------------------------------
async function insertFakeData() {
  const { Invation, Vision, Invationer, Technology } = db._tables
  // Create the first Article
  const invation0 = await Invation.create({
    name: 'MuseX',
    overview:
      'MuseX is a smart space software, aimed at differentiating the teaching proposal in elementary schools, offering a special experience to children. It proposes a 360° experience inside a Natural History Museum.',
    concept:
      'In a smart interactive multi-sensory room, children can play, socialize, learn and test their knowledge about mammals, birds and geology. Our goal is to bring a fully interactive museum inside a school, where teachers can bring their students in a totally save an engaging environment. MuseX combines the features of interactive technologies and multi sensory experiences. It uses technologies such as projectors, smart objects, body movement recognition technologies and smart lights. Other than exploring the museum and its dioramas, three mini game are available. Children can deal with rock categorization to make a volcano erupt, habitat recognition working in team to beat the rivals and guessing the correct specie of bird collaborating to catch the right bird.',
    more:
      'All those activities are designed to improve self-movement recognition, ability to work in group, reasoning skills and test contents learning. MuseX has a full body interaction paradigm with drag &amp; drop, RFID reader, walk around interaction and posting gesture recognition. The Magic Room provides both audible and visual feedback that enrich MuseX experience and all the activities can be managed by the teacher using a dedicated app.',
    image: '/musex-big.png',
    thumbnail: '/musex-small.png',
    video: 'https://www.youtube.com/embed/EQh3K9SFUtI',
    creationDate: Date.now(),
  })

  const vision0 = await Vision.create({
    name: 'Education',
    description: '',
    image: '',
  })

  const technology1 = await Technology.create({
    name: 'Virtual & Agmented Reality',
    description: 'To be added',
    image: 'To be added',
    color: 'tag-color1',
  })

  const technology2 = await Technology.create({
    name: 'Internet of Things',
    description: 'To be added',
    image: 'To be added',
    color: 'tag-color2',
  })

  const invationer0 = await Invationer.create({
    name: 'Mario',
    surname: 'Rossi',
    role: 'Scrum Master',
    gender: 'Other',
    age: 32,
    nationality: 'Italian',
    description:
      'Extrovert italian guys who always makes fun of himself and others and keeps the mood funny',
    quote:
      'Never say never because limits, like fears, are often just an illusion',
    picture: 'https://i.imgur.com/EgEPqWZb.jpg',
  })

  const invationer1 = await Invationer.create({
    name: 'Marco',
    surname: 'Bianchi',
    role: 'Graphic Designer',
    gender: 'Other',
    age: 32,
    nationality: 'Italian',
    description:
      'Extrovert italian guys who always makes fun of himself and others and keeps the mood funny',
    quote:
      'Never say never because limits, like fears, are often just an illusion',
    picture: 'https://i.imgur.com/EgEPqWZb.jpg',
  })

  const invationer2 = await Invationer.create({
    name: 'Lorenzo',
    surname: 'Verdi',
    role: 'Software Engineer',
    gender: 'Other',
    age: 32,
    nationality: 'Italian',
    description:
      'Extrovert italian guys who always makes fun of himself and others and keeps the mood funny',
    quote:
      'Never say never because limits, like fears, are often just an illusion',
    picture: 'https://i.imgur.com/EgEPqWZb.jpg',
  })

  const invationer3 = await Invationer.create({
    name: 'Riccardo',
    surname: 'Gialli',
    role: 'Manager',
    gender: 'Other',
    age: 32,
    nationality: 'Italian',
    description:
      'Extrovert italian guys who always makes fun of himself and others and keeps the mood funny',
    quote:
      'Never say never because limits, like fears, are often just an illusion',
    picture: 'https://i.imgur.com/EgEPqWZb.jpg',
  })

  await vision0.addInvation(invation0.id)
  await vision0.addInvationer(invationer0.id)
  await invationer0.addInvation(invation0.id)
  await invationer1.addInvation(invation0.id)
  await invationer2.addInvation(invation0.id)
  await invationer3.addInvation(invation0.id)
  await invation0.addInvationer(invationer0.id)
  await invation0.addInvationer(invationer1.id)
  await invation0.addInvationer(invationer2.id)
  await invation0.addInvationer(invationer3.id)
  await invation0.addTechnology(technology1.id)
  await invation0.addTechnology(technology2.id)
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
