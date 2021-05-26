const { Sequelize, DataTypes } = require('sequelize')

// Development
const db = new Sequelize(
  // 'postgres://postgres:11235813@localhost:5432/InvationDB',
  'postgres://postgres:federica140798@localhost:5432/InvationDB',
  // 'postgres://postgres:password@localhost:5432/InvationDB',
  { logging: false }
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

  //Education Vision

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

  // Entertainment vision

  const invation6 = await Invation.create({
    name: 'Astro Bot Rescue Mission',
    subtitle: 'Rescue your mates!',
    overview:
      'In this action platformer, you must rescue the various members of your crew, which is scattered across space.',
    concept:
      'The game offers 20 different main levels and 26 challenge levels, which should keep you entertained for a long time.',
    more:
      'This isn’t a simple platforming title. The game features 360-degree worlds and offers several different weapons, including throwing stars, a water gun, and a hook shot.',
    image:
      'https://images.everyeye.it/img-articoli/astro-bot-rescue-mission-recensione-massima-espressione-platform-vr-recensione-v10-40991-1280x960.jpg',
    numberTag: '01',
    thumbnail:
      'https://images.everyeye.it/img-articoli/astro-bot-rescue-mission-recensione-massima-espressione-platform-vr-recensione-v10-40991-1280x960.jpg',
    video: 'https://www.youtube.com/embed/GVcm9yZ4Ml4',
    creationDate: Date.now(),
  })

  const invation7 = await Invation.create({
    name: 'Beat Saber',
    subtitle: 'Create music with laser swords!',
    overview: 'Beat Saber is a music and rhythm game with an active twist.',
    concept:
      'he setup is similar to other music games, such as Audiosurf, Guitar Hero, and Rock Band, but instead of controlling a virtual ship or using fake instruments, you slash your way through a song with virtual laser swords.',
    more:
      ' As the music plays, Beat Saber generates different patterns of color-coded blocks on the screen that you must hit with the correct controller (right or left) as they slide towards you. Obstacles also appear at times that require you to duck or slide away. Make no mistake, Beat Saber is not a game you can play sitting down; it’s a very active experience. If you love music and motion, Beat Saber is definitely worth exploring.',
    image:
      'https://www.vgn.it/wp-content/uploads/2018/12/Beat-Saber-Recensione-PSVR.jpg',
    numberTag: '02',
    thumbnail:
      'https://www.vgn.it/wp-content/uploads/2018/12/Beat-Saber-Recensione-PSVR.jpg',
    video: 'https://www.youtube.com/embed/aW8APlZpiKo',
    creationDate: Date.now(),
  })

  const invation8 = await Invation.create({
    name: 'Budget Cuts',
    subtitle: 'Get rid of robots!',
    overview:
      'Will you let robots take your all-important paper-stamping and document-filing job? In this game, cost-cutting robots try to terminate your employment by any means necessary.',
    concept:
      'You must fight your way through an office environment to save your job (and your life) using stealth tactics or by resorting to aggressive violence.',
    more:
      "AI and automation technologies are certainly poised to take over some real-world jobs previously filled by humans, so this game's hook is all too real. Be sure to check out the sequel, Budget Cuts 2: Mission Insolvency.",
    image:
      'https://www.vr-italia.org/wp-content/uploads/2018/07/BudgetCuts_Stealth.jpg',
    numberTag: '03',
    thumbnail:
      'https://www.vr-italia.org/wp-content/uploads/2018/07/BudgetCuts_Stealth.jpg',
    video: 'https://www.youtube.com/embed/O1tXkZ_BxI0',
    creationDate: Date.now(),
  })

  const invation9 = await Invation.create({
    name: 'Danger Goat',
    subtitle: 'Be the G.O.A.T.',
    overview:
      'The life of a goat has never been easy, as you may have experienced first-hand in the one-of-a-kind Goat Simulator.',
    concept:
      'Danger Goat is arguably less bizarre, but with traps, missiles, and robots standing in your way, your escape is anything but assured.',
    more:
      'Don’t be fooled by the bright and pleasant environments; danger lurks at every turn.',
    image:
      'https://www.gamelegends.it/wp-content/uploads/2016/11/Danger-Goat-Screenshot-01-970x570.jpg',
    numberTag: '04',
    thumbnail: 'https://i.ytimg.com/vi/u5vxr4a3xw0/maxresdefault.jpg',
    video: 'https://www.youtube.com/embed/XomyEi1iYVA',
    creationDate: Date.now(),
  })

  const invation10 = await Invation.create({
    name: "Everybody's Golf VR",
    subtitle: 'Golf for everyone!',
    overview:
      "If you can't get to a real golf course, the next best thing is a virtual golf game.",
    concept:
      "Everybody's Golf VR is the series' (formerly known as Hot Shots Golf) first VR entry. Play any of three included courses alongside a virtual caddy or practice your skills on the putting green or at the driving range.",
    more:
      'The game supports the PlayStation Move controller for more dynamic golfing action.',
    image:
      'https://blog.playstation.com/tachyon/sites/12/2019/05/EverybodysGolfVR.jpg',
    numberTag: '05',
    thumbnail:
      'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2019/05/egvr.jpg',
    video: 'https://www.youtube.com/embed/Rwgl4AdYybo',
    creationDate: Date.now(),
  })

  const invation11 = await Invation.create({
    name: 'Half-Life: Alyx',
    subtitle: 'Half-life saga is back!',
    overview:
      "It's not Half-Life 3 or Half-Life 2: Episode Three, but Half-Life: Alyx is the first full-fledged Half Life game that Valve has released in a long time.",
    concept:
      "The game's events take place after the original Half Life, but before Half-Life 2. As the title suggests, you play fan-favorite character Alyx Vance. Throughout the roughly 11-hour campaign, you take on enemy Combine forces and seek to advance research on their weaknesses.",
    more:
      'Valve built this experience specifically for VR, so expect impressive physics mechanics and top-tier graphics.',
    image:
      'https://www.gamesoul.it/wp-content/uploads/2019/11/half-life-alyx-trailer-1.jpg',
    numberTag: '06',
    thumbnail:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/546560/capsule_616x353.jpg?t=1605207546',
    video: 'https://www.youtube.com/embed/30v1UWkMBlU',
    creationDate: Date.now(),
  })

  // Smart home vision

  const invation12 = await Invation.create({
    name: 'Eufy Video Doorbell 2K',
    subtitle: "Look at who's there!",
    overview:
      'The Eufy Video Doorbell is the best wireless smart doorbell camera on the market in terms of price, reliability and performance.',
    concept:
      'It blows the competition away thanks to the fact it records in 2K, so the footage is extremely detailed, and a 4:3 aspect ratio means you can pretty much see the full length of the person on your doorstep.',
    more:
      'The battery-powered doorbell is good if you’re renting a place and can’t take out the old doorbell that’s already installed - it works wirelessly with the help of a hub that connects to your router, you can simply throw it on any outdoor surface and get it to work for up to six months at a time.',
    image:
      'https://www.the-ambient.com/media/imager/202009/30005-posts.homepage_preview_md.jpg',
    numberTag: '01',
    thumbnail:
      'https://cdn.shopify.com/s/files/1/0504/7094/4954/products/T82001J1_TD03_V1_1200x.jpg?v=1608126748',
    video: 'https://www.youtube.com/embed/hcdDl8n-vV4',
    creationDate: Date.now(),
  })

  const invation13 = await Invation.create({
    name: 'Amazon Echo Studio',
    subtitle: 'Stay away from the imitations!',
    overview:
      'For years, we gave smart speakers a pass in the audio department because we figured there was just no way for a speaker to both be smart and sound good. That was, until we created the Amazzon Echo Studio',
    concept:
      "In the Echo Studio, Amazon has made its best speaker yet. It's ambitious, flexible, serves multiple purposes and comes at a low price point that only a company with the scale of Amazon could competitively achieve.",
    more:
      "It’s a bombastic speaker, packed full of not just smart home and assistant tech, but smart audio considerations too. At its best, its 3D audio effects breathe new life into your favorite songs, and that's saying nothing of its ability to connect to your Amazon Fire TV devices to offer more immersive sound.",
    image:
      'https://m.media-amazon.com/images/G/29/kindle/dp/2019/090790/9893/ts_it_v1._CB452492311_.jpg',
    numberTag: '02',
    thumbnail:
      'https://m.media-amazon.com/images/G/29/kindle/journeys/DqB0P8lvk3BlT2F2FDjDiyEvRZAbWIk5oqM7js1NZXqIY3D/ODkzNjE4OWYt._CB402746061_.png',
    video: 'https://www.youtube.com/embed/MU207ge4xW4',
    creationDate: Date.now(),
  })

  const invation14 = await Invation.create({
    name: 'Nest Thermostat E',
    subtitle: 'Cold? Hot? Now you are smart!',
    overview:
      'The Nest Thermostat E proves that you don’t have to shell out for a smart thermostat.',
    concept:
      'It does away with a few, unnecessary features, but it keeps the majority of the smarts and saves you a whole lot of money.',
    more:
      'Still, if the Nest Thermostat E is compatible with your setup and you don’t care about the lack of farsight or slightly lower quality display, then it’s an excellent option.',
    image:
      'https://cdn.pocket-lint.com/r/s/970x/assets/images/145870-smart-home-review-nest-thermostat-e-review-image1-bd1t9aufkq-jpg.webp',
    numberTag: '03',
    thumbnail:
      'https://lh3.googleusercontent.com/iO-KzBIjhHDRsfiE_SZVJt4fRj6XRcR9bQq0dyWcnHpam8QTDvLGedRRbseNr8VNMtpQ=w250-rwa',
    video: 'https://www.youtube.com/embed/TooKLnkGgag',
    creationDate: Date.now(),
  })

  // Work vision
  const invation15 = await Invation.create({
    name: 'Cloud storage solutions',
    subtitle: 'Do others have clouds? We have the whole storm!',
    overview:
      'The cloud has dramatically changed the way companies store and access data.',
    concept:
      'Cloud solutions let companies keep data and applications on remote, secure servers, which allows for rapid scalability, quick deployment of new solutions, and better information management.',
    more:
      'Employees can easily access information from wherever they are. Usually managed by third parties, cloud computing gives you the flexibility to build, store, and launch new applications, store ever-evolving amounts of data, and adapt quickly to changing needs.',
    image:
      'https://store.hp.com/app/assets/images/uploads/prod/top-cloud-storage-providers-2019-hero156346484495488.jpg?impolicy=prdimg&imdensity=1&imwidth=600',
    numberTag: '01',
    thumbnail:
      'https://soaringeagle.biz/wp-content/uploads/2018/04/What-is-Cloud-Storage.png',
    video: 'https://www.youtube.com/embed/VDBhvexAj8I',
    creationDate: Date.now(),
  })

  const invation16 = await Invation.create({
    name: 'C&C tools',
    subtitle: "Let's work together!",
    overview:
      'With more employees working remotely than ever before, collaboration and communication among team members, partners, suppliers, and customers is essential.',
    concept:
      'Collaboration suites are crucial to making this happen, as they allow teams to store, edit, manage, and share documents widely. These products mean employees can access needed information no matter where they are, as long as they are connected to the internet.',
    more:
      'The top collaboration suites also include functions for easy communication, either via instant messaging or video calls for multiple users.',
    image:
      'https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2019/04/10061221/communicate-remote-team.png',
    numberTag: '02',
    thumbnail:
      'https://standardbeagle.com/wp-content/uploads/2020/04/remote-com-illustration.jpg',
    video: 'https://www.youtube.com/embed/fU7Dk8ZZSLY',
    creationDate: Date.now(),
  })

  const invation17 = await Invation.create({
    name: 'CRM solutions',
    subtitle: "Let's get these relationships!",
    overview:
      'CRM leads to shorter sales cycles, sales automation, faster responses, better retention, and a more in-depth analysis of what works to move leads to make purchases.',
    concept:
      "With a CRM, sales teams, marketing teams, and the accounting department can work together seamlessly to ensure a customer's needs are met—even when they're remote. Since digital CRM solutions' data is hosted on a cloud, it can be accessed from anywhere.",
    more:
      'An ideal digital CRM solution can pay dividends for a company when it helps them efficiently manage customer relations and improve their bottom line, even during a pandemic.',
    image:
      'https://www.crmpartners.it/wp-content/uploads/2020/11/CRM-che-cose.png',
    numberTag: '03',
    thumbnail: 'https://agislab.it/images/articoli/immagine-news-crm.png',
    video: 'https://www.youtube.com/embed/hnEQq7kNFWo',
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
    bigImage: 'https://imgur.com/H6qYZgB.png',
    video:
      'https://www.youtube.com/embed/nmu7kEzAQus?autoplay=1&mute=1&controls=0&loop=1',
  })
  const vision2 = await Vision.create({
    numberTag: '03',
    name: 'Smart Home',
    description:
      'Your home is part of your life, leaving in an intelligent and smart environment is essential for your quality of life.',
    image: 'https://imgur.com/D5Dxd2p.png',
    bigImage: 'https://imgur.com/G3EVNQx.png',
    video:
      'https://www.youtube.com/embed/nmu7kEzAQus?autoplay=1&mute=1&controls=0&loop=1',
  })
  const vision3 = await Vision.create({
    numberTag: '04',
    name: 'Work',
    description:
      'The Covid-19 pandemic has accelerated an inevitable trend in which giving new opportunities for an efficient work indipendently from where you are is fundamental.',
    image: 'https://imgur.com/4UTHf9K.png',
    bigImage: 'https://imgur.com/ejjzJXM.png',
    video:
      'https://www.youtube.com/embed/nmu7kEzAQus?autoplay=1&mute=1&controls=0&loop=1',
  })

  const technology1 = await Technology.create({
    name: 'Virtual & Augmented Reality',
    description:
      'Virtual Reality is the technology that provides almost real and/or believable experiences in a synthetic or virtual way, while Augmented Reality enhances the real world by superimposing computer-generated information on top of it.',
    image: 'To be added',
    color: 'tag-color1',
  })

  const technology2 = await Technology.create({
    name: 'Internet of Things',
    description:
      'The Internet of Things (IoT) describes the network of physical objects—“things”—that are embedded with sensors, software, and other technologies for the purpose of connecting and exchanging data with other devices and systems over the internet. These devices range from ordinary household objects to sophisticated industrial tools.',
    image: 'To be added',
    color: 'tag-color2',
  })

  const technology3 = await Technology.create({
    name: 'Conversational Agents',
    description:
      'A conversational agent is a software program which interprets and responds to statements made by users in ordinary natural language. It integrates computational linguistics techniques with communication over the internet.',
    image: 'To be added',
    color: 'tag-color3',
  })

  // Hard Skills
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

  // Soft Skills
  const skill4 = await Skill.create({
    name: 'Problem Solving',
    image: 'https://image.flaticon.com/icons/png/128/2618/2618497.png',
  })
  const skill5 = await Skill.create({
    name: 'Critical Thinking',
    image: 'https://image.flaticon.com/icons/png/128/2755/2755549.png',
  })
  const skill6 = await Skill.create({
    name: 'Team Management',
    image: 'https://image.flaticon.com/icons/png/128/1283/1283187.png',
  })

  const invationer0 = await Invationer.create({
    name: 'Clarke',
    surname: 'Griffin',
    role: 'Software Engineer',
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
    age: 45,
    nationality: 'Italian',
    overview:
      'Extrovert italian guy who always makes fun of himself and others and keeps the mood funny',
    quote: 'There is nothing so stable as change',
    image: 'https://imgur.com/xEWu3ZB.png',
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
    image: 'https://imgur.com/lMFJIE9.png',
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
    role: 'Project Manager',
    gender: 'Female',
    age: 35,
    nationality: 'French',
    overview: 'Extrovert and determined frech woman, feminist activist',
    quote: "I'm tough, I'm ambitious, and I know exactly what I want",
    image: 'https://imgur.com/dhMbxQf.png',
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
  const invationer4 = await Invationer.create({
    name: 'Massimiliano',
    surname: 'Allegri',
    role: 'Marketing Coordinator',
    badge: 'https://imgur.com/2iyaenU.png',
    gender: 'Male',
    age: 53,
    nationality: 'Italian',
    overview:
      'Funny italian man, known for his ability to brighten the working atmosphere',
    quote: 'The only thing we have to fear is fear itself.',
    image: 'https://imgur.com/QUrrTIG.png',
    sport: 'Football',
    hobby: 'Phishing',
    musical: 'Pop music',
    preferred: 'Entertainment',
    telephone: '+39 3337865096',
    email: 'massimiliano.allegri@invation.com',
    fax: '887416 4737598',
    linkedin: 'massimiliano.allegri',
    instagram: '#acciughina67',
  })
  const invationer5 = await Invationer.create({
    name: 'Carlo',
    surname: 'Rovelli',
    role: 'Software Engineer',
    badge: 'https://imgur.com/2iyaenU.png',
    gender: 'Male',
    age: 27,
    nationality: 'Italian',
    overview:
      'Introvert italian guy who likes spending time at home with his books',
    quote: 'Il mondo è fatto di reti di baci, non di sassi',
    image: 'https://imgur.com/k12fR9w.png',
    sport: 'No please!',
    hobby: 'Reading, Writing',
    musical: 'Folk Music',
    preferred: 'Work',
    telephone: '+39 3337065096',
    email: 'carlo.rovelli@invation.com',
    fax: '876516 4730988',
    linkedin: 'carlo.rovelli',
    instagram: '#carlitorovelli',
  })
  const invationer6 = await Invationer.create({
    name: 'Zac',
    surname: 'Efron',
    role: 'Product Designer',
    badge: 'https://imgur.com/2iyaenU.png',
    gender: 'Male',
    age: 34,
    nationality: 'USA',
    overview:
      'Pationate american guy who loves having an active life full of new experiences',
    quote: 'Every day is a new experience and I take it as it comes',
    image: 'https://imgur.com/4STq2Hi.png',
    sport: 'Basket',
    hobby: 'Climbing, Drawing',
    musical: 'Rock Music',
    preferred: 'Work',
    telephone: '+39 3337098594',
    email: 'zac.efron@invation.com',
    fax: '856516 4709878',
    linkedin: 'zac.efron',
    instagram: '#zacfword',
  })
  const invationer7 = await Invationer.create({
    name: 'Vanessa',
    surname: 'Hudgens',
    role: 'Psychologist',
    badge: 'https://imgur.com/2iyaenU.png',
    gender: 'Female',
    age: 33,
    nationality: 'USA',
    overview:
      'Determined girl who loves her pets and her family more than anything else',
    quote:
      'Being cool is being your own self, not doing something that someone else is telling you to do',
    image: 'https://imgur.com/Am5eqQK.png',
    sport: 'No please!',
    hobby: 'Dancing, Reading',
    musical: 'Pop Music',
    preferred: 'Entertainment',
    telephone: '+39 3337067044',
    email: 'vanessa.hudgens@invation.com',
    fax: '856987 4709878',
    linkedin: 'vanessa.hudgens',
    instagram: '#vanessahudgens',
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
  await vision1.addInvation(invation6.id)
  await vision1.addInvation(invation7.id)
  await vision1.addInvation(invation8.id)
  await vision1.addInvation(invation9.id)
  await vision1.addInvation(invation10.id)
  await vision1.addInvation(invation11.id)
  await vision2.addInvation(invation12.id)
  await vision2.addInvation(invation13.id)
  await vision2.addInvation(invation14.id)
  await vision3.addInvation(invation15.id)
  await vision3.addInvation(invation16.id)
  await vision3.addInvation(invation17.id)
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
  await invation6.addTechnology(technology1.id)
  await invation7.addTechnology(technology1.id)
  await invation8.addTechnology(technology1.id)
  await invation9.addTechnology(technology1.id)
  await invation10.addTechnology(technology1.id)
  await invation11.addTechnology(technology1.id)
  await invation12.addTechnology(technology2.id)
  await invation13.addTechnology(technology2.id)
  await invation13.addTechnology(technology3.id)
  await invation14.addTechnology(technology2.id)
  await invation15.addTechnology(technology1.id)
  await invation16.addTechnology(technology2.id)
  await invation17.addTechnology(technology3.id)
  // Invationers --> Visions
  await vision0.addInvationer(invationer0.id)
  await vision0.addInvationer(invationer1.id)
  await vision0.addInvationer(invationer2.id)
  await vision0.addInvationer(invationer3.id)
  await vision1.addInvationer(invationer4.id)
  await vision1.addInvationer(invationer5.id)
  await vision2.addInvationer(invationer6.id)
  await vision3.addInvationer(invationer7.id)

  // Invations --> Invationers
  await invationer0.addInvation(invation0.id)
  await invationer0.addInvation(invation1.id)
  await invationer0.addInvation(invation3.id)
  await invationer0.addInvation(invation6.id)
  await invationer0.addInvation(invation12.id)
  await invationer0.addInvation(invation16.id)
  await invationer1.addInvation(invation0.id)
  await invationer1.addInvation(invation1.id)
  await invationer1.addInvation(invation3.id)
  await invationer1.addInvation(invation5.id)
  await invationer1.addInvation(invation6.id)
  await invationer1.addInvation(invation9.id)
  await invationer1.addInvation(invation13.id)
  await invationer2.addInvation(invation0.id)
  await invationer2.addInvation(invation2.id)
  await invationer2.addInvation(invation4.id)
  await invationer2.addInvation(invation5.id)
  await invationer2.addInvation(invation8.id)
  await invationer2.addInvation(invation15.id)
  await invationer3.addInvation(invation2.id)
  await invationer3.addInvation(invation3.id)
  await invationer3.addInvation(invation4.id)
  await invationer3.addInvation(invation7.id)
  await invationer3.addInvation(invation10.id)
  await invationer3.addInvation(invation14.id)
  await invationer3.addInvation(invation16.id)
  await invationer4.addInvation(invation6.id)
  await invationer4.addInvation(invation7.id)
  await invationer4.addInvation(invation8.id)
  await invationer4.addInvation(invation9.id)
  await invationer4.addInvation(invation10.id)
  await invationer4.addInvation(invation13.id)
  await invationer4.addInvation(invation15.id)
  await invationer5.addInvation(invation7.id)
  await invationer5.addInvation(invation9.id)
  await invationer5.addInvation(invation10.id)
  await invationer5.addInvation(invation11.id)
  await invationer5.addInvation(invation14.id)
  await invationer6.addInvation(invation8.id)
  await invationer6.addInvation(invation9.id)
  await invationer6.addInvation(invation10.id)
  await invationer6.addInvation(invation12.id)
  await invationer6.addInvation(invation13.id)
  await invationer6.addInvation(invation14.id)
  await invationer6.addInvation(invation16.id)
  await invationer7.addInvation(invation6.id)
  await invationer7.addInvation(invation7.id)
  await invationer7.addInvation(invation10.id)
  await invationer7.addInvation(invation12.id)
  await invationer7.addInvation(invation15.id)
  await invationer7.addInvation(invation16.id)
  await invationer7.addInvation(invation17.id)

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
  await invation6.addInvationer(invationer0.id)
  await invation6.addInvationer(invationer1.id)
  await invation6.addInvationer(invationer7.id)
  await invation6.addInvationer(invationer4.id)
  await invation7.addInvationer(invationer3.id)
  await invation7.addInvationer(invationer4.id)
  await invation7.addInvationer(invationer5.id)
  await invation7.addInvationer(invationer7.id)
  await invation8.addInvationer(invationer2.id)
  await invation8.addInvationer(invationer4.id)
  await invation8.addInvationer(invationer6.id)
  await invation9.addInvationer(invationer1.id)
  await invation9.addInvationer(invationer4.id)
  await invation9.addInvationer(invationer5.id)
  await invation9.addInvationer(invationer6.id)
  await invation10.addInvationer(invationer3.id)
  await invation10.addInvationer(invationer5.id)
  await invation10.addInvationer(invationer7.id)
  await invation11.addInvationer(invationer4.id)
  await invation11.addInvationer(invationer5.id)
  await invation11.addInvationer(invationer6.id)
  await invation12.addInvationer(invationer0.id)
  await invation12.addInvationer(invationer6.id)
  await invation12.addInvationer(invationer7.id)
  await invation13.addInvationer(invationer1.id)
  await invation13.addInvationer(invationer4.id)
  await invation13.addInvationer(invationer6.id)
  await invation14.addInvationer(invationer3.id)
  await invation14.addInvationer(invationer5.id)
  await invation14.addInvationer(invationer6.id)
  await invation15.addInvationer(invationer2.id)
  await invation15.addInvationer(invationer4.id)
  await invation15.addInvationer(invationer7.id)
  await invation16.addInvationer(invationer0.id)
  await invation16.addInvationer(invationer3.id)
  await invation16.addInvationer(invationer6.id)
  await invation16.addInvationer(invationer7.id)
  // Skills --> Invationers
  await invationer0.addSkill(skill1.id)
  await invationer0.addSkill(skill2.id)
  await invationer0.addSkill(skill3.id)
  await invationer1.addSkill(skill1.id)
  await invationer1.addSkill(skill2.id)
  await invationer1.addSkill(skill3.id)
  await invationer2.addSkill(skill2.id)
  await invationer2.addSkill(skill1.id)
  await invationer2.addSkill(skill3.id)
  await invationer3.addSkill(skill4.id)
  await invationer3.addSkill(skill5.id)
  await invationer3.addSkill(skill6.id)
  await invationer4.addSkill(skill2.id)
  await invationer4.addSkill(skill6.id)
  await invationer5.addSkill(skill1.id)
  await invationer5.addSkill(skill2.id)
  await invationer5.addSkill(skill3.id)
  await invationer6.addSkill(skill2.id)
  await invationer6.addSkill(skill6.id)
  await invationer7.addSkill(skill5.id)
  await invationer7.addSkill(skill6.id)

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
