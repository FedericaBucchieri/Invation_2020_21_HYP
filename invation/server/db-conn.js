const { Sequelize, DataTypes } = require('sequelize')

// Development
const db = new Sequelize(
  'postgres://postgres:11235813@localhost:5432/InvationDB'
  // 'postgres://postgres:federica140798@localhost:5432/InvationDB'
  // 'postgres://postgres:password@localhost:5432/InvationDB'
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
      subtitle: DataTypes.STRING,
      overview: DataTypes.TEXT,
      concept: DataTypes.TEXT,
      more: DataTypes.TEXT,
      image: DataTypes.STRING,
      numberTag: DataTypes.STRING,
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
      numberTag: DataTypes.STRING,
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      image: DataTypes.STRING,
      video: DataTypes.STRING,
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
      badge: DataTypes.STRING,
      gender: DataTypes.STRING,
      age: DataTypes.INTEGER,
      nationality: DataTypes.STRING,
      overview: DataTypes.TEXT,
      quote: DataTypes.TEXT,
      image: DataTypes.STRING,
      sport: DataTypes.STRING,
      hobby: DataTypes.STRING,
      musical: DataTypes.STRING,
      preferred: DataTypes.STRING,
      telephone: DataTypes.STRING,
      email: DataTypes.STRING,
      fax: DataTypes.STRING,
      linkedin: DataTypes.STRING,
      instagram: DataTypes.STRING,
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

  const Skill = db.define(
    'skill',
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      underscored: true,
    }
  )

  const Review = db.define(
    'review',
    {
      author: DataTypes.STRING,
      body: DataTypes.STRING,
    },
    {
      underscored: true,
    }
  )

  const User = db.define(
    'user',
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      image: DataTypes.STRING,
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
  // 'Capabilities' relationship Many-To-Many
  Invationer.belongsToMany(Skill, { through: 'InvationerSkill' })
  Skill.belongsToMany(Invationer, { through: 'InvationerSkill' })
  // 'Write' relationship One-To-Many
  Invation.hasMany(Review, { foreignKey: 'invation_id' })
  Review.belongsTo(Invation)
  // 'Saved on' relationship Many-To-Many
  User.belongsToMany(Invation, { through: 'UserInvation' })
  Invation.belongsToMany(User, { through: 'UserInvation' })

  db._tables = {
    Invation,
    Vision,
    Invationer,
    Technology,
    Skill,
    Review,
    User,
  }
}

// --------------- SEEDING -------------------------------
async function insertFakeData() {
  const {
    Invation,
    Vision,
    Invationer,
    Technology,
    Skill,
    Review,
    User,
  } = db._tables
  // Create the first Article
  const invation0 = await Invation.create({
    name: 'MuseX',
    subtitle: 'Smart space experience',
    overview:
      'MuseX is a smart space software, aimed at differentiating the teaching proposal in elementary schools, offering a special experience to children. It proposes a 360° experience inside a Natural History Museum.',
    concept:
      'In a smart interactive multi-sensory room, children can play, socialize, learn and test their knowledge about mammals, birds and geology. Our goal is to bring a fully interactive museum inside a school, where teachers can bring their students in a totally save an engaging environment. MuseX combines the features of interactive technologies and multi sensory experiences. It uses technologies such as projectors, smart objects, body movement recognition technologies and smart lights. Other than exploring the museum and its dioramas, three mini game are available. Children can deal with rock categorization to make a volcano erupt, habitat recognition working in team to beat the rivals and guessing the correct specie of bird collaborating to catch the right bird.',
    more:
      'All those activities are designed to improve self-movement recognition, ability to work in group, reasoning skills and test contents learning. MuseX has a full body interaction paradigm with drag &amp; drop, RFID reader, walk around interaction and posting gesture recognition. The Magic Room provides both audible and visual feedback that enrich MuseX experience and all the activities can be managed by the teacher using a dedicated app.',
    image: 'https://imgur.com/wuBnUBF.png',
    numberTag: '01',
    thumbnail: 'https://imgur.com/S0Ope6O.png',
    video: 'https://www.youtube.com/embed/EQh3K9SFUtI',
    creationDate: Date.now(),
  })

  const invation1 = await Invation.create({
    name: 'Ludomi',
    subtitle: 'Learning through play',
    overview: 'Ludomi is the project awarded by Polisocial in 2017.',
    concept: 'Ludomi is developed into Magika, a smart space software.',
    more:
      'All those activities are designed to improve self-movement recognition, ability to work in group, reasoning skills and test contents learning. MuseX has a full body interaction paradigm with drag &amp; drop, RFID reader, walk around interaction and posting gesture recognition. The Magic Room provides both audible and visual feedback that enrich MuseX experience and all the activities can be managed by the teacher using a dedicated app.',
    image: 'https://i3lab.polimi.it/wp-content/uploads/2020/06/IMG_5770.jpg',
    numberTag: '02',
    thumbnail:
      'https://i3lab.polimi.it/wp-content/uploads/2020/06/IMG_5765-1024x683-1.jpg',
    video: 'https://www.youtube.com/embed/EQh3K9SFUtI',
    creationDate: Date.now(),
  })

  const invation2 = await Invation.create({
    name: 'Rio',
    subtitle: 'A robotic companion',
    overview: 'Rio is a telematic device to embed as an IoT into the trucks',
    concept:
      'The RIO marketplace is a cloud-based solution which consolidates services for fleet managers, freight forwarders as well as vehicle rental companies to interconnect all involved parties of the supply chain management on a single platform. ',
    more:
      'A great variety of requirements for quality assurance within the transport and logistics sector can be covered with data: GPS tracking of the freight, accounting for the delivery of the freight at a specific time at a specific place (Geofencing), maintenance of the vehicles or monitoring the driving times to optimize route planning. This collected data can be evaluated and used by the fleet administrators and freight forwarders to improve their business strategies.',
    image:
      'https://d11wkw82a69pyn.cloudfront.net/siteassets/images/comsystocontents/rio_canvas_neu.jpg',
    numberTag: '03',
    thumbnail:
      'https://d11wkw82a69pyn.cloudfront.net/siteassets/images/comsystocontents/rio_canvas_neu.jpg',
    video: 'https://www.youtube.com/embed/EQh3K9SFUtI',
    creationDate: Date.now(),
  })

  const vision0 = await Vision.create({
    numberTag: '01',
    name: 'Education',
    description:
      'A new way of learning in a more effective way. Discover ourproposals about a new experience in the world of education.',
    image: 'https://imgur.com/gRHC19s.png',
    video:
      'https://www.youtube.com/embed/nmu7kEzAQus?autoplay=1&mute=1&controls=0&loop=1',
  })
  const vision1 = await Vision.create({
    numberTag: '02',
    name: 'Entertainment',
    description:
      'The world of entertainment is ready to embrace the new technologies about VR and AR where Reality merges with immagination.',
    image: 'https://imgur.com/gRHC19s.png',
    video:
      'https://www.youtube.com/embed/nmu7kEzAQus?autoplay=1&mute=1&controls=0&loop=1',
  })
  const vision2 = await Vision.create({
    numberTag: '03',
    name: 'Smart Home',
    description:
      'Your home is part of your life, leaving in an intelligent and smart environment is essential for your quality of life.',
    image: 'https://imgur.com/gRHC19s.png',
    video:
      'https://www.youtube.com/embed/nmu7kEzAQus?autoplay=1&mute=1&controls=0&loop=1',
  })
  const vision3 = await Vision.create({
    numberTag: '04',
    name: 'Work',
    description:
      'The Covid-19 pandemic has accelerated an inevitable trend in which giving new opportunities for an efficient work indipendently from where you are is fundamental.',
    image: 'https://imgur.com/gRHC19s.png',
    video:
      'https://www.youtube.com/embed/nmu7kEzAQus?autoplay=1&mute=1&controls=0&loop=1',
  })

  const technology1 = await Technology.create({
    name: 'Virtual & Augmented Reality',
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

  const skill1 = await Skill.create({
    name: 'SQL',
    image: 'https://imgur.com/1vjWTuM.png',
  })

  const skill2 = await Skill.create({
    name: 'Javascript',
    image: 'https://imgur.com/NH9ba8K.png',
  })

  const skill3 = await Skill.create({
    name: 'HTML',
    image: 'https://imgur.com/HIOIBUo.png',
  })

  const invationer0 = await Invationer.create({
    name: 'Clarke',
    surname: 'Griffin',
    role: 'Scrum Master',
    badge: 'https://imgur.com/2iyaenU.png',
    gender: 'Female',
    age: 32,
    nationality: 'Irish',
    overview:
      'Hi everyone! My name is Clarke Griffin and I am an Invationer since 2018. I try to innovate leveraging on my Computer Science background, working for Invation as a Software Engineer. Wanna know more? Scroll down!',
    quote:
      'Never say never because limits, like fears, are often just an illusion',
    image: 'https://imgur.com/gRHC19s.png',
    sport: 'No please!',
    hobby: 'Gaming, Cooking, Reading',
    musical: 'Pop music',
    preferred: 'Education',
    telephone: '+39 389932321',
    email: 'clarke.griffin@invation.com',
    fax: '88776 5432325',
    linkedin: 'clarke.griffin',
    instagram: '#clarkeGriffin',
  })

  const invationer1 = await Invationer.create({
    name: 'Marco',
    surname: 'Bianchi',
    role: 'Graphic Designer',
    gender: 'Other',
    age: 32,
    nationality: 'Italian',
    overview:
      'Extrovert italian guys who always makes fun of himself and others and keeps the mood funny',
    quote:
      'Never say never because limits, like fears, are often just an illusion',
    image: 'https://i.imgur.com/EgEPqWZb.jpg',
  })

  const invationer2 = await Invationer.create({
    name: 'Lorenzo',
    surname: 'Verdi',
    role: 'Software Engineer',
    gender: 'Other',
    age: 32,
    nationality: 'Italian',
    overview:
      'Extrovert italian guys who always makes fun of himself and others and keeps the mood funny',
    quote:
      'Never say never because limits, like fears, are often just an illusion',
    image: 'https://i.imgur.com/EgEPqWZb.jpg',
  })

  const invationer3 = await Invationer.create({
    name: 'Riccardo',
    surname: 'Gialli',
    role: 'Manager',
    gender: 'Other',
    age: 32,
    nationality: 'Italian',
    overview:
      'Extrovert italian guys who always makes fun of himself and others and keeps the mood funny',
    quote:
      'Never say never because limits, like fears, are often just an illusion',
    image: 'https://i.imgur.com/EgEPqWZb.jpg',
  })

  const review1 = await Review.create({
    author: 'Federica',
    body: 'This invation is amazing. It really interested me!',
  })

  const review2 = await Review.create({
    author: 'Luca',
    body: 'Omg I want to play with it!',
  })

  const user1 = await User.create({
    username: 'user1',
    password: 'user1',
    email: 'user1@mail.com',
    image: 'https://www.w3schools.com/howto/img_avatar2.png',
  })

  await vision0.addInvation(invation0.id)
  await vision0.addInvation(invation1.id)
  await vision0.addInvation(invation2.id)
  await vision0.addInvationer(invationer0.id)
  await vision0.addInvationer(invationer1.id)
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
  await invation1.addInvationer(invationer0.id)
  await invation1.addInvationer(invationer1.id)
  await invation1.addInvationer(invationer2.id)
  await invation1.addInvationer(invationer3.id)
  await invation1.addTechnology(technology1.id)
  await invation1.addTechnology(technology2.id)
  await invation2.addInvationer(invationer0.id)
  await invation2.addInvationer(invationer1.id)
  await invation2.addInvationer(invationer2.id)
  await invation2.addInvationer(invationer3.id)
  await invation2.addTechnology(technology2.id)
  await invationer0.addSkill(skill1.id)
  await invationer0.addSkill(skill2.id)
  await invationer0.addSkill(skill3.id)
  await invation0.addReview(review1.id)
  await invation0.addReview(review2.id)
  await user1.addInvation(invation1)
}
/**
 * Function to initialize the database. This is exported and called in the main api.js file
 */
async function initializeDatabase() {
  // Call the function for the database structure definition-----
  defineDatabaseStructure()

  // Synchronize Sequelize with the actual database--------------

  // force = true drops the existent tables
  await db.sync({ force: true })
  // await db.sync()

  // Call the function to insert some fake data -----------------

  await insertFakeData()
  return db
}

export default initializeDatabase
