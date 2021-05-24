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
      bigImage: DataTypes.STRING,
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
  // Per ora abbiamo 6 invations per la vision education e 4 invationers che lavorano nell'education quindi c'è da trovare almeno altre 4/5 invationes per ognuna delle
  // altre tre vision ( 5 * 3 = 15) e poi almeno 3/4 invationers per ognuna delle altre 3 visions (3 * 3 = 9) al limite qualche invationers ci sta
  // che lavpri in più visions
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
    video: 'https://www.youtube.com/embed/Io4tcn5UZQc',
    creationDate: Date.now(),
  })
  const invation1 = await Invation.create({
    name: 'Ludomi',
    subtitle: 'Learning through play',
    overview:
      'Magika is the innovative technological solution that allows to transform any room into a “smart” space in which lights, immersive projections on walls and floors, music, sounds, aromas, and physical materials are digitally controllable, programmable, and interactive.',
    concept:
      'The result is a “Magic Room” where children are exposed to multisensory stimuli and can interact with physical materials and multimedia contents through movements, gestures, and manipulation of objects. Magika allows to perform playful and educational activities (individual or collective) that stimulate all senses and are engaging. Compared to traditional multi-sensory rooms like Snoezelen, the playful-educational experiences in the Magic Room have greater potential for children with cognitive disabilities because they are more customizable, stimulating and engaging.',
    more:
      'Through a tablet, teachers can control and configure each activity and personalize the experience according to the specific needs of children. Magika can be controlled and configured through a tablet. Thanks to an easy and intuitive control panel, the teacher can monitor, select, and improve the activities of the room. It takes just a few steps to choose activities and to keep an eye on what’s happening. Through the tablet you can start or end the activity any time, thus teachers can manage children inside the room better.',
    image: 'https://i3lab.polimi.it/wp-content/uploads/2020/06/IMG_5770.jpg',
    numberTag: '02',
    thumbnail:
      'https://i3lab.polimi.it/wp-content/uploads/2020/06/IMG_5765-1024x683-1.jpg',
    video: 'https://www.youtube.com/embed/EQh3K9SFUtI',
    creationDate: Date.now(),
  })

  const invation2 = await Invation.create({
    name: 'Emoty',
    subtitle: 'A voice-based Italian speaking Dialog System',
    overview:
      'This research project aims at exploiting the advances in conversational technology to support people with Neurodevelopmental Disorder (NDD). NDD is a group of conditions that are characterized by severe deficits in the cognitive, emotional, and motor areas and produce severe impairments in communication and social functioning. In particular, we investigate the use of spoken Conversational Agents to mitigate the impairments of people with NDD related to the difficulty of recognizing and expressing emotions – a problem clinically referred to as Alexithymia.',
    concept:
      'The project is carried out in close collaboration with psychologists, neurological doctors, and caregivers who actively participated in eliciting the key requirements, evaluating iterative prototypes, and performing an empirical evaluation. The main result of this work is the web application called Emoty. ',
    more:
      'Emoty is a voice-based Italian speaking Dialog System able to converse with the users in ordinary natural language and to entertain them with small talks and educational games. Emoty does not act as a virtual assistant for daily life support but aims at helping people with NDD to develop better emotional control and self-awareness, which would lead them to enhance their communication capabilities and consequently to improve their quality of life. Emoty exploits conversational technologies, Machine Learning and Deep Learning techniques for emotion recognition from the text and the voice based on the processing of user’s audio pitch.',
    image:
      'https://i3lab.polimi.it/wp-content/uploads/2020/06/emoty_screenshot.png',
    numberTag: '03',
    thumbnail:
      'https://i3lab.polimi.it/wp-content/uploads/2020/06/emoty_screenshot.png',
    video: 'https://www.youtube.com/embed/t6_KgKP-uZE',
    creationDate: Date.now(),
  })
  const invation3 = await Invation.create({
    name: 'Puffy',
    subtitle: 'A robotic companion',
    overview:
      'Puffy is meant to support educational and therapeutic interventions for children with NDD, particularly those with perceptual and sensory processing impairments and deficits in the cognitive, social and behavioral spheres.',
    concept:
      'The design of the physical and interaction characteristics of Puffy is informed by: general design guidelines reported in the current literature on socially assistive robots for autistic children; lessons learned from our own previous experience on robots for children with NDD; feedbacks and suggestions on the progressive prototypes of Puffy offered by a team of 15 therapists (psychologists, neuro-psychiatrists, and special educators) from two different rehabilitation centers who have long-term, everyday experience of NDD subjects (children and adults) and have been collaborating with our research in the last 5 years.',
    more:
      "Puffy is a robotic companion for children with Neurodevelopmental Disorders that has been developed in cooperation with a team of therapists and special educators. Puffy has a combination of features which makes it unique with respect to existing robots for this target group. Puffy is mobile and its egg-shaped body is inflatable and soft. Puffy can interpret children's gestures and movements, facial expressions and emotions. It communicates using voice, lights, movements in space, as well as inside-out projections in its body.",
    image:
      'https://i3lab.polimi.it/wp-content/uploads/2020/06/DSC0099-scaled.jpg',
    numberTag: '04',
    thumbnail:
      'https://i3lab.polimi.it/wp-content/uploads/2020/06/DSC0099-scaled.jpg',
    video: 'https://www.youtube.com/embed/VKXVqiWGNTM',
    creationDate: Date.now(),
  })
  const invation4 = await Invation.create({
    name: 'Leggo Facile',
    subtitle: 'The perfect online program to effectively treat dislexia',
    overview:
      'Leggo Facile gives you the chance to stimulate the lexical way, so the direct visible access to the word. The first results arise in few weeks of treatment',
    concept:
      'A single exercise to gain confidence in reading, explained with a precise and complete rehabilitation protocol. You can practice where you want and when you want, a pc and a connection are enough. The fundamental parameter for Leggo Facile is Reading frequency. This parameter indicates the reading speed of a text measured in syllables / second and it will not be necessary to set it',
    more:
      'In addition to the passages written and calibrated to the difficulty of each class, Leggo Facile allows you to insert and read your personal passages: whether it is a newspaper article, a sports magazine or your favorite book, you can use Leggo Facile to practice reading . ',
    image:
      'https://leggofacile.com/wp-content/uploads/2020/04/Leggofacile-desktop-set-1.png',
    numberTag: '05',
    thumbnail:
      'https://leggofacile.com/wp-content/uploads/2020/04/Leggofacile-desktop-set-1.png',
    video: 'https://www.youtube.com/embed/-EgFVj92Wbo',
    creationDate: Date.now(),
  })
  const invation5 = await Invation.create({
    name: 'PLET',
    subtitle: 'The digital core of next generation Smart Toys',
    overview:
      'PLET has been designed and developed by Politecnico di Milano to: “smartify” physical toys and transform them into “e-toys” (i.e., digitally controlled interactive objects); connect e-toys with the PLET service management platform, therefore bridging the system embedded in e-toys with the applications for the toy manufacturer.',
    concept:
      'This technology is the digital core of next generation Smart Toys, being responsible of managing the e-toy interactive behaviour and transmitting (via Wi-Fi) the interaction data to the back end of the PLET service platform in a configurable, robust, and optimised way (e.g., pre-processing some raw data received from e-toy embedded devices such as RFIDs).',
    more:
      'This technology consists of an embedded platform that includes various hardware components and a software middleware. The embedded platform integrates different technologies, involving commercial sensors and actuators, orchestrated by a powerful and yet low-cost microcontroller, managed by software components that have been designed ad hoc to be as efficient and performant as possible and to maximize the potential of the hardware capabilities embedded in the e-toy.',
    image: 'https://i3lab.polimi.it/wp-content/uploads/2020/06/IMG_0124.jpg',
    numberTag: '06',
    thumbnail:
      'https://i3lab.polimi.it/wp-content/uploads/2020/06/IMG_0124.jpg',
    video: 'https://www.youtube.com/embed/qoIh8ITv9IU',
    creationDate: Date.now(),
  })

  const vision0 = await Vision.create({
    numberTag: '01',
    name: 'Education',
    description:
      'A new way of learning in a more effective way. Discover ourproposals about a new experience in the world of education.',
    image: 'https://imgur.com/c5GqUz3.png',
    bigImage: 'https://imgur.com/3Al3hcw.png',
    video:
      'https://www.youtube.com/embed/nmu7kEzAQus?autoplay=1&mute=1&controls=0&loop=1',
  })
  const vision1 = await Vision.create({
    numberTag: '02',
    name: 'Entertainment',
    description:
      'The world of entertainment is ready to embrace the new technologies about VR and AR where Reality merges with immagination.',
    image: 'https://imgur.com/i3Rsg4f.png',
    bigImage: '',
    video:
      'https://www.youtube.com/embed/nmu7kEzAQus?autoplay=1&mute=1&controls=0&loop=1',
  })
  const vision2 = await Vision.create({
    numberTag: '03',
    name: 'Smart Home',
    description:
      'Your home is part of your life, leaving in an intelligent and smart environment is essential for your quality of life.',
    image: 'https://imgur.com/D5Dxd2p.png',
    bigImage: '',
    video:
      'https://www.youtube.com/embed/nmu7kEzAQus?autoplay=1&mute=1&controls=0&loop=1',
  })
  const vision3 = await Vision.create({
    numberTag: '04',
    name: 'Work',
    description:
      'The Covid-19 pandemic has accelerated an inevitable trend in which giving new opportunities for an efficient work indipendently from where you are is fundamental.',
    image: 'https://imgur.com/4UTHf9K.png',
    bigImage: '',
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

  const technology3 = await Technology.create({
    name: 'Conversational Agents',
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
    badge: 'https://imgur.com/2iyaenU.png',
    gender: 'Male',
    age: 51,
    nationality: 'Italian',
    overview:
      'Extrovert italian guy who always makes fun of himself and others and keeps the mood funny',
    quote: 'There is nothing so stable as change',
    image:
      'https://www.calciomercato.it/wp-content/uploads/2021/05/Massimiliano-Allegri-1-1.jpg',
    sport: 'No please!',
    hobby: 'Gaming, Drawing, Playing Music',
    musical: 'Rock music',
    preferred: 'Education',
    telephone: '+39 3899528421',
    email: 'marco.bianchi@invation.com',
    fax: '887456 5437368',
    linkedin: 'marco.bianchi',
    instagram: '#iMBianchino',
  })

  const invationer2 = await Invationer.create({
    name: 'Lorenzo',
    surname: 'Verdi',
    role: 'Software Engineer',
    badge: 'https://imgur.com/2iyaenU.png',
    gender: 'Male',
    age: 40,
    nationality: 'Italian',
    overview:
      'Friendly and generous italian guy always polite with friends and colleagues',
    quote: 'Concentrate all your thoughts upon the work in hand',
    image:
      'https://i.insider.com/5dfaacb5855cc207e14a4a14?width=600&format=jpeg&auto=webp',
    sport: 'Football',
    hobby: 'Playing football, Watching TV Series',
    musical: 'Classical Music',
    preferred: 'Education',
    telephone: '+39 3898250521',
    email: 'lorenzo.verdi@invation.com',
    fax: '889856 5436539',
    linkedin: 'lorenzo.verdi',
    instagram: '#lolloVerdi',
  })

  const invationer3 = await Invationer.create({
    name: 'Nathalie',
    surname: 'Dubois',
    role: 'Manager',
    gender: 'Female',
    age: 35,
    nationality: 'French',
    overview: 'Extrovert and determined frech woman, feminist activist',
    quote: "I'm tough, I'm ambitious, and I know exactly what I want",
    image:
      'https://media.istockphoto.com/photos/beautiful-blonde-french-woman-wearing-red-beret-picture-id959371702?k=6&m=959371702&s=170667a&w=0&h=TBRvSBHaX_korQ6ngC54l-WeYAgrL51tzI7i_yKSje0=',
    sport: 'Ski',
    hobby: 'Reading,Writing, Watching TV Series',
    musical: 'Pop music',
    preferred: 'Education',
    telephone: '+39 345825621',
    email: 'nathalie.dubois@invation.com',
    fax: '888856 5436569',
    linkedin: 'nathalie.dubois',
    instagram: '#nathalie_dubois',
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

  // Invations --> Visions
  await vision0.addInvation(invation0.id)
  await vision0.addInvation(invation1.id)
  await vision0.addInvation(invation2.id)
  await vision0.addInvation(invation3.id)
  await vision0.addInvation(invation4.id)
  await vision0.addInvation(invation5.id)
  // Technology --> Invations
  await invation0.addTechnology(technology1.id)
  await invation0.addTechnology(technology2.id)
  await invation1.addTechnology(technology1.id)
  await invation1.addTechnology(technology2.id)
  await invation2.addTechnology(technology3.id)
  await invation3.addTechnology(technology2.id)
  await invation3.addTechnology(technology3.id)
  await invation4.addTechnology(technology3.id)
  await invation5.addTechnology(technology2.id)
  // Invationers --> Visions
  await vision0.addInvationer(invationer0.id)
  await vision0.addInvationer(invationer1.id)
  await vision0.addInvationer(invationer2.id)
  await vision0.addInvationer(invationer3.id)
  // Invations --> Invationers
  await invationer0.addInvation(invation0.id)
  await invationer0.addInvation(invation1.id)
  await invationer0.addInvation(invation3.id)
  await invationer1.addInvation(invation0.id)
  await invationer1.addInvation(invation1.id)
  await invationer1.addInvation(invation3.id)
  await invationer1.addInvation(invation5.id)
  await invationer2.addInvation(invation0.id)
  await invationer2.addInvation(invation2.id)
  await invationer2.addInvation(invation4.id)
  await invationer2.addInvation(invation5.id)
  await invationer3.addInvation(invation2.id)
  await invationer3.addInvation(invation3.id)
  await invationer3.addInvation(invation4.id)
  // Invationers --> Invations
  await invation0.addInvationer(invationer0.id)
  await invation0.addInvationer(invationer1.id)
  await invation0.addInvationer(invationer2.id)
  await invation1.addInvationer(invationer0.id)
  await invation1.addInvationer(invationer1.id)
  await invation2.addInvationer(invationer2.id)
  await invation2.addInvationer(invationer3.id)
  await invation3.addInvationer(invationer0.id)
  await invation3.addInvationer(invationer1.id)
  await invation3.addInvationer(invationer3.id)
  await invation4.addInvationer(invationer2.id)
  await invation4.addInvationer(invationer3.id)
  await invation5.addInvationer(invationer1.id)
  await invation5.addInvationer(invationer2.id)
  // Skills --> Invationers
  await invationer0.addSkill(skill1.id)
  await invationer0.addSkill(skill2.id)
  await invationer0.addSkill(skill3.id)
  await invationer1.addSkill(skill1.id)
  await invationer2.addSkill(skill2.id)
  await invationer1.addSkill(skill2.id)
  await invationer2.addSkill(skill1.id)
  await invationer1.addSkill(skill2.id)
  await invationer2.addSkill(skill1.id)

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
