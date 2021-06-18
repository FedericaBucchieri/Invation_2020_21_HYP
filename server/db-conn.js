const { Sequelize, DataTypes } = require("sequelize");

// Development
// const db = new Sequelize(
//   // 'postgres://postgres:11235813@localhost:5432/InvationDB',
//   "postgres://postgres:federica140798@localhost:5432/InvationDB",
//   // 'postgres://postgres:password@localhost:5432/InvationDB',
//   { logging: false }
// );

// Production
const pg = require('pg')
pg.defaults.ssl = true
const db = new Sequelize(process.env.DATABASE_URL, {
  ssl: true,
  dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
})

/**
 * Function to define the structure of the database
 */
function defineDatabaseStructure() {
  // ------------- ENTITIES DEFINITION --------------
  const Invation = db.define(
    "invation",
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
      isActive: DataTypes.BOOLEAN,
      developmentDate: DataTypes.DATE,
    },
    {
      underscored: true,
    }
  );
  const Vision = db.define(
    "vision",
    {
      numberTag: DataTypes.STRING,
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      image: DataTypes.STRING,
      bigImage: DataTypes.STRING,
      video: DataTypes.STRING,
      isActive: DataTypes.BOOLEAN,
    },
    {
      underscored: true,
    }
  );
  const Invationer = db.define(
    "invationer",
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
  );
  const Technology = db.define(
    "technology",
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      image: DataTypes.STRING,
      color: DataTypes.STRING,
      relatedPath: DataTypes.STRING,
    },
    {
      underscored: true,
    }
  );

  const Skill = db.define(
    "skill",
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      underscored: true,
    }
  );

  const Review = db.define(
    "review",
    {
      author: DataTypes.STRING,
      body: DataTypes.STRING,
    },
    {
      underscored: true,
    }
  );

  // --------------- ASSOCIATIONS -------------------
  // More on association: https://sequelize.org/master/manual/assocs.html

  // Composition between Vision and Invations
  Vision.hasMany(Invation, { foreignKey: "vision_id" });
  Invation.belongsTo(Vision);
  // 'Prefers' relationship One-To-Many
  Vision.hasMany(Invationer, { foreignKey: "vision_id" });
  Invationer.belongsTo(Vision);
  // 'Develops' relationship Many-To-Many
  Invationer.belongsToMany(Invation, { through: "InvationInvationer" });
  Invation.belongsToMany(Invationer, { through: "InvationInvationer" });
  // 'Based on' relationship Many-To-Many
  Invation.belongsToMany(Technology, { through: "TechnologyInvation" });
  Technology.belongsToMany(Invation, { through: "TechnologyInvation" });
  // 'Capabilities' relationship Many-To-Many
  Invationer.belongsToMany(Skill, { through: "InvationerSkill" });
  Skill.belongsToMany(Invationer, { through: "InvationerSkill" });
  // 'Write' relationship One-To-Many
  Invation.hasMany(Review, { foreignKey: "invation_id" });
  Review.belongsTo(Invation);

  db._tables = {
    Invation,
    Vision,
    Invationer,
    Technology,
    Skill,
    Review,
  };
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
  } = db._tables;

  // Education Vision

  const invation0 = await Invation.create({
    name: "MuseX",
    subtitle: "Smart space experience",
    overview:
      "MuseX is a smart space software, aimed at differentiating the teaching proposal in elementary schools, offering a special experience to children. It proposes a 360° experience inside a Natural History Museum.",
    concept:
      "In a smart interactive multi-sensory room, children can play, socialize, learn and test their knowledge about mammals, birds and geology. Our goal is to bring a fully interactive museum inside a school, where teachers can bring their students in a totally save an engaging environment. MuseX combines the features of interactive technologies and multi sensory experiences. It uses technologies such as projectors, smart objects, body movement recognition technologies and smart lights. Other than exploring the museum and its dioramas, three mini game are available. Children can deal with rock categorization to make a volcano erupt, habitat recognition working in team to beat the rivals and guessing the correct specie of bird collaborating to catch the right bird.",
    more:
      "All those activities are designed to improve self-movement recognition, ability to work in group, reasoning skills and test contents learning. MuseX has a full body interaction paradigm with drag &amp; drop, RFID reader, walk around interaction and posting gesture recognition. The Magic Room provides both audible and visual feedback that enrich MuseX experience and all the activities can be managed by the teacher using a dedicated app.",
    image: "https://imgur.com/wlpQq36.png",
    numberTag: "01",
    thumbnail: "https://imgur.com/K4TqLLA.png",
    video: "https://www.youtube.com/embed/Io4tcn5UZQc",
    isActive: true,
    developmentDate: Date.UTC(2021, 6, 14, 0, 0, 0, 0),
  });

  const invation1 = await Invation.create({
    name: "Ludomi",
    subtitle: "Learning through play",
    overview:
      "Magika is the innovative technological solution that allows to transform any room into a “smart” space in which lights, immersive projections on walls and floors, music, sounds, aromas, and physical materials are digitally controllable, programmable, and interactive.",
    concept:
      "The result is a “Magic Room” where children are exposed to multisensory stimuli and can interact with physical materials and multimedia contents through movements, gestures, and manipulation of objects. Magika allows to perform playful and educational activities (individual or collective) that stimulate all senses and are engaging. Compared to traditional multi-sensory rooms like Snoezelen, the playful-educational experiences in the Magic Room have greater potential for children with cognitive disabilities because they are more customizable, stimulating and engaging.",
    more:
      "Through a tablet, teachers can control and configure each activity and personalize the experience according to the specific needs of children. Magika can be controlled and configured through a tablet. Thanks to an easy and intuitive control panel, the teacher can monitor, select, and improve the activities of the room. It takes just a few steps to choose activities and to keep an eye on what’s happening. Through the tablet you can start or end the activity any time, thus teachers can manage children inside the room better.",
    image: "https://i3lab.polimi.it/wp-content/uploads/2020/06/IMG_5770.jpg",
    numberTag: "02",
    thumbnail: "https://imgur.com/L7UE0Z4.png",
    video: "https://www.youtube.com/embed/EQh3K9SFUtI",
    isActive: true,
    developmentDate: Date.UTC(2020, 6, 14, 0, 0, 0, 0),
  });

  const invation2 = await Invation.create({
    name: "Emoty",
    subtitle: "A voice-based Italian speaking Dialog System",
    overview:
      "This research project aims at exploiting the advances in conversational technology to support people with Neurodevelopmental Disorder (NDD). NDD is a group of conditions that are characterized by severe deficits in the cognitive, emotional, and motor areas and produce severe impairments in communication and social functioning. In particular, we investigate the use of spoken Conversational Agents to mitigate the impairments of people with NDD related to the difficulty of recognizing and expressing emotions – a problem clinically referred to as Alexithymia.",
    concept:
      "The project is carried out in close collaboration with psychologists, neurological doctors, and caregivers who actively participated in eliciting the key requirements, evaluating iterative prototypes, and performing an empirical evaluation. The main result of this work is the web application called Emoty. ",
    more:
      "Emoty is a voice-based Italian speaking Dialog System able to converse with the users in ordinary natural language and to entertain them with small talks and educational games. Emoty does not act as a virtual assistant for daily life support but aims at helping people with NDD to develop better emotional control and self-awareness, which would lead them to enhance their communication capabilities and consequently to improve their quality of life. Emoty exploits conversational technologies, Machine Learning and Deep Learning techniques for emotion recognition from the text and the voice based on the processing of user’s audio pitch.",
    image:
      "https://i3lab.polimi.it/wp-content/uploads/2020/06/emoty_screenshot.png",
    numberTag: "03",
    thumbnail: "https://imgur.com/YV2Hweq.png",
    video: "https://www.youtube.com/embed/t6_KgKP-uZE",
    isActive: true,
    developmentDate: Date.UTC(2020, 5, 31, 0, 0, 0, 0),
  });

  const invation3 = await Invation.create({
    name: "Puffy",
    subtitle: "A robotic companion",
    overview:
      "Puffy is meant to support educational and therapeutic interventions for children with NDD, particularly those with perceptual and sensory processing impairments and deficits in the cognitive, social and behavioral spheres.",
    concept:
      "The design of the physical and interaction characteristics of Puffy is informed by: general design guidelines reported in the current literature on socially assistive robots for autistic children; lessons learned from our own previous experience on robots for children with NDD; feedbacks and suggestions on the progressive prototypes of Puffy offered by a team of 15 therapists (psychologists, neuro-psychiatrists, and special educators) from two different rehabilitation centers who have long-term, everyday experience of NDD subjects (children and adults) and have been collaborating with our research in the last 5 years.",
    more:
      "Puffy is a robotic companion for children with Neurodevelopmental Disorders that has been developed in cooperation with a team of therapists and special educators. Puffy has a combination of features which makes it unique with respect to existing robots for this target group. Puffy is mobile and its egg-shaped body is inflatable and soft. Puffy can interpret children's gestures and movements, facial expressions and emotions. It communicates using voice, lights, movements in space, as well as inside-out projections in its body.",
    image:
      "https://i3lab.polimi.it/wp-content/uploads/2020/06/DSC0099-scaled.jpg",
    numberTag: "04",
    thumbnail: "https://imgur.com/yUqWBOl.png",
    video: "https://www.youtube.com/embed/VKXVqiWGNTM",
    isActive: true,
    developmentDate: Date.UTC(2021, 4, 8, 0, 0, 0, 0),
  });
  const invation4 = await Invation.create({
    name: "Leggo Facile",
    subtitle: "The perfect online program to effectively treat dislexia",
    overview:
      "Leggo Facile gives you the chance to stimulate the lexical way, so the direct visible access to the word. The first results arise in few weeks of treatment",
    concept:
      "A single exercise to gain confidence in reading, explained with a precise and complete rehabilitation protocol. You can practice where you want and when you want, a pc and a connection are enough. The fundamental parameter for Leggo Facile is Reading frequency. This parameter indicates the reading speed of a text measured in syllables / second and it will not be necessary to set it",
    more:
      "In addition to the passages written and calibrated to the difficulty of each class, Leggo Facile allows you to insert and read your personal passages: whether it is a newspaper article, a sports magazine or your favorite book, you can use Leggo Facile to practice reading . ",
    image:
      "https://leggofacile.com/wp-content/uploads/2020/04/Leggofacile-desktop-set-1.png",
    numberTag: "05",
    thumbnail: "https://imgur.com/yW851Cf.png",
    video: "https://www.youtube.com/embed/-EgFVj92Wbo",
    isActive: true,
    developmentDate: Date.UTC(2002, 2, 23, 0, 0, 0, 0),
  });

  const invation5 = await Invation.create({
    name: "PLET",
    subtitle: "The digital core of next generation Smart Toys",
    overview:
      "PLET has been designed and developed by Politecnico di Milano to: “smartify” physical toys and transform them into “e-toys” (i.e., digitally controlled interactive objects); connect e-toys with the PLET service management platform, therefore bridging the system embedded in e-toys with the applications for the toy manufacturer.",
    concept:
      "This technology is the digital core of next generation Smart Toys, being responsible of managing the e-toy interactive behaviour and transmitting (via Wi-Fi) the interaction data to the back end of the PLET service platform in a configurable, robust, and optimised way (e.g., pre-processing some raw data received from e-toy embedded devices such as RFIDs).",
    more:
      "This technology consists of an embedded platform that includes various hardware components and a software middleware. The embedded platform integrates different technologies, involving commercial sensors and actuators, orchestrated by a powerful and yet low-cost microcontroller, managed by software components that have been designed ad hoc to be as efficient and performant as possible and to maximize the potential of the hardware capabilities embedded in the e-toy.",
    image: "https://i3lab.polimi.it/wp-content/uploads/2020/06/IMG_0124.jpg",
    numberTag: "06",
    thumbnail: "https://imgur.com/jLAXNgq.png",
    video: "https://www.youtube.com/embed/qoIh8ITv9IU",
    isActive: true,
    developmentDate: Date.UTC(2020, 10, 27, 0, 0, 0, 0),
  });

  // Entertainment vision

  const invation6 = await Invation.create({
    name: "Astro Bot Rescue Mission",
    subtitle: "Rescue your mates!",
    overview:
      "In this action platformer, you must rescue the various members of your crew, which is scattered across space. Are you a good friend? Will the others count on you, willl you count on the others? Find it through this game.",
    concept:
      'The game offers 20 different main levels and 26 challenge levels, which should keep you entertained for a long time. If not, there are many expansions that allows you to play as long as you want: alone with your grandpa, with the postman, with your cat, with whoever or whatever you want. Friendship is a relationship of mutual affection between people. It is a stronger form of interpersonal bond than an association, and has been studied in academic fields such as communication, sociology, social psychology, anthropology, and philosophy. Various academic theories of friendship have been proposed, including social exchange theory, equity theory, relational dialectics, and attachment styles. Are you ready? Watch the video on the "Show more" section to have an idea!',
    more:
      "This isn’t a simple platforming title. The game features 360-degree worlds and offers several different weapons, including throwing stars, a water gun, and a hook shot.",
    image:
      "https://images.everyeye.it/img-articoli/astro-bot-rescue-mission-recensione-massima-espressione-platform-vr-recensione-v10-40991-1280x960.jpg",
    numberTag: "01",
    thumbnail: "https://imgur.com/8x45is9.png",
    video: "https://www.youtube.com/embed/GVcm9yZ4Ml4",
    isActive: true,
    developmentDate: Date.UTC(2021, 1, 12, 0, 0, 0, 0),
  });

  const invation7 = await Invation.create({
    name: "Beat Saber",
    subtitle: "Create music with laser swords!",
    overview:
      "Beat Saber is a music and rhythm game with an active twist. Feed your creativity through this game! You will create rythms with your arms, this game is freaking cool! Post your tracks on Instagram or TikTok and become the ner Beat Sabaer star.",
    concept:
      'The setup is similar to other music games, such as Audiosurf, Guitar Hero, and Rock Band, but instead of controlling a virtual ship or using fake instruments, you slash your way through a song with virtual laser swords. Beat Saber replaces the classic notes of a music track with a steady stream of floating cubes that fly towards your screen. You need to cut them, usually in a specific direction indicated by an arrow, to score points. To facilitate this, your VR controllers become red and blue neon sabers, which you must swing at the corresponding coloured boxes. Though there’s no official Star Wars licensing, you can’t help but feel like a Jedi Knight brandishing two lightsabers. Even if you don’t care for Star Wars, the flurries of sparks and light effects as you carve through each cube is sure to impress and entice you. To have an idea, watch the video below on the "Show More" section!',
    more:
      " As the music plays, Beat Saber generates different patterns of color-coded blocks on the screen that you must hit with the correct controller (right or left) as they slide towards you. Obstacles also appear at times that require you to duck or slide away. Make no mistake, Beat Saber is not a game you can play sitting down; it’s a very active experience. If you love music and motion, Beat Saber is definitely worth exploring.",
    image:
      "https://www.vgn.it/wp-content/uploads/2018/12/Beat-Saber-Recensione-PSVR.jpg",
    numberTag: "02",
    thumbnail: "https://imgur.com/yoX6UnW.png",
    video: "https://www.youtube.com/embed/aW8APlZpiKo",
    isActive: true,
    developmentDate: Date.UTC(2021, 5, 3, 0, 0, 0, 0),
  });

  const invation8 = await Invation.create({
    name: "Budget Cuts",
    subtitle: "Get rid of robots!",
    overview:
      "Will you let robots take your all-important paper-stamping and document-filing job? In this game, cost-cutting robots try to terminate your employment by any means necessary. Do you want to save the human race or are you a robot snitch?",
    concept:
      'You must fight your way through an office environment to save your job (and your life) using stealth tactics or by resorting to aggressive violence. From the time of ancient civilization, there have been many accounts of user-configurable automated devices and even automata resembling humans and other animals, designed primarily as entertainment. As mechanical techniques developed through the Industrial age, there appeared more practical applications such as automated machines, remote-control and wireless remote-control. How much do you believe on your human skills? Are you sure that you are necessary in this planet? Then show us on "Budget Costs"!',
    more:
      "AI and automation technologies are certainly poised to take over some real-world jobs previously filled by humans, so this game's hook is all too real. Be sure to check out the sequel, Budget Cuts 2: Mission Insolvency.",
    image:
      "https://www.vr-italia.org/wp-content/uploads/2018/07/BudgetCuts_Stealth.jpg",
    numberTag: "03",
    thumbnail: "https://imgur.com/LaOsDOQ.png",
    video: "https://www.youtube.com/embed/O1tXkZ_BxI0",
    isActive: true,
    developmentDate: Date.UTC(2020, 12, 11, 0, 0, 0, 0),
  });

  const invation9 = await Invation.create({
    name: "Danger Goat",
    subtitle: "Be the G.O.A.T.",
    overview:
      "The life of a goat has never been easy, as you may have experienced first-hand in the one-of-a-kind Goat Simulator. Michael Jordan is obviously the Greatest Of All Times, but how do you live being a G.O.A.T.? Find it with this game.",
    concept:
      "Danger Goat is arguably less bizarre, but with traps, missiles, and robots standing in your way, your escape is anything but assured. You can't eat meat, but you can eat grass and never forget to use your horns. At surface level, it makes for harmless puzzling fun. Danger Goat is an early example of how intuitive the Daydream controller really is, allowing for an accessible point and click experience that anyone could get to grips with, even if it’s necessary to recenter your view after every level. The worlds are colorful and inviting, too, though this is one mobile VR experience in which I really missed positional tracking, as I couldn’t lean down further into these worlds and at times the camera didn’t get close enough to the action. In fact, generally speaking, there really isn’t any reason for Danger Goat to be in VR. How far can you reach? Be the new G.O.A.T.",
    more:
      "Don’t be fooled by the bright and pleasant environments; danger lurks at every turn. For the most part, Danger Goat‘s traps will involve you accidentally walking onto a marked tile and subsequently watching your goat get obliterated. Later levels introduce a few other concepts like switches that activate gates and weapons, or rivers that carry you downstream, but the basic threats don’t really change until the final seven challenges. You’ll quickly learn that many of the traps laid out in a level are nothing more than red herrings. They’re there to trick you into tossing a boulder on them to crush them, when really you needed the rock to cross a canyon. Slip up and you’ll have to start the level from scratch if you want a three star rating. But with Danger Goat‘s love of deception established so early on, you’ll find you never really fall for the perils it lays down in its first 25 levels or so. Every time I saw a trap in front of me I’d scan the environment and quickly find a way round it. That’s what you’re meant to do, of course, but I was going through levels with such ease I started to wonder what the point in it was. What makes this even more frustrating is that the final three levels bring together the game’s mechanics for some truly challenging trials. They genuinely stumped me for some time and had me going round in circles and I really enjoyed systematically solving them. If the game had reached this point, say, halfway in and not spent so much time coddling the player this would be a very different review.",
    image:
      "https://www.gamelegends.it/wp-content/uploads/2016/11/Danger-Goat-Screenshot-01-970x570.jpg",
    numberTag: "04",
    thumbnail: "https://imgur.com/HhlsCvD.png",
    video: "https://www.youtube.com/embed/XomyEi1iYVA",
    isActive: true,
    developmentDate: Date.UTC(2019, 5, 25, 0, 0, 0, 0),
  });

  const invation10 = await Invation.create({
    name: "Everybody's Golf VR",
    subtitle: "Golf for everyone!",
    overview:
      "If you can't get to a real golf course, the next best thing is a virtual golf game. You can become the new Tiger Woods but from your living room! Be the next king of the green!  A good golf partner is one who's always slightly worse than you. Play with your friends!",
    concept:
      "Everybody's Golf VR is the series' (formerly known as Hot Shots Golf) first VR entry. Play any of three included courses alongside a virtual caddy or practice your skills on the putting green or at the driving range. You don’t even need to guess when Everybody’s Golf VR is; this latest game from Clap Hanz and Japan Studio does precisely what it says on the tin. This VR spin-off feels far more condensed than 2017’s Everybody’s Golf, hacking away non-essentials such as social hubs and mini-games – basically, any part that isn’t focused on the golfing itself – and losing the key multiplayer features that Everybody’s Golf has long been known for is a shame, but there’s still an engrossing fun factor here.",
    more:
      "The game supports the PlayStation Move controller for more dynamic golfing action.",
    image:
      "https://blog.playstation.com/tachyon/sites/12/2019/05/EverybodysGolfVR.jpg",
    numberTag: "05",
    thumbnail: "https://imgur.com/NlvVl41.png",
    video: "https://www.youtube.com/embed/Rwgl4AdYybo",
    isActive: true,
    developmentDate: Date.UTC(2019, 3, 6, 0, 0, 0, 0),
  });

  const invation11 = await Invation.create({
    name: "Half-Life: Alyx",
    subtitle: "Half-life saga is back!",
    overview:
      "It's not Half-Life 3 or Half-Life 2: Episode Three, but Half-Life: Alyx is the first full-fledged Half Life game that Valve has released in a long time. VR here is brought to the next level: shoot to monsters, heal yourself, and orient yourself inside this totally digital world.",
    concept:
      "The game's events take place after the original Half Life, but before Half-Life 2. As the title suggests, you play fan-favorite character Alyx Vance. Throughout the roughly 11-hour campaign, you take on enemy. Combine forces and seek to advance research on their weaknesses. Even the act of healing is gross, as you insert a glass cylinder containing a living alien grub into a wall-mounted health station and watch as it's crushed into a bilious liquid just inches from your face, followed by skittering needles jabbing into the backs of your fingers as the machine knits health back into your veins. Not to mention the lengthy stealth sequence where you are stalked by a creature who insta-kills me by vomiting gallons of black slime directly onto your face. While the grossness feels overdone at times, it's also pretty neat that headcrabs and barnacles and other creatures you'll be shooting at since 1998 are now freshly creepy and repulsive in VR.",
    more:
      "Valve built this experience specifically for VR, so expect impressive physics mechanics and top-tier graphics. A stunningly rich experience from start to finish, Half-Life: Alyx is one of the best VR titles available, a perfect showcase for what VR gaming is capable of. It doesn’t exactly break new ground, instead providing familiar Half-Life gameplay all wrapped up in a highly polished VR gift bag. Let’s just hope this is the start of things to come and Valve decides to make another Half-Life: Alyx.",
    image:
      "https://www.gamesoul.it/wp-content/uploads/2019/11/half-life-alyx-trailer-1.jpg",
    numberTag: "06",
    thumbnail: "https://imgur.com/mjs33WW.png",
    video: "https://www.youtube.com/embed/30v1UWkMBlU",
    isActive: true,
    developmentDate: Date.UTC(2018, 8, 28, 0, 0, 0, 0),
  });

  // Smart home vision

  const invation12 = await Invation.create({
    name: "Eufy Video Doorbell 2K",
    subtitle: "Look at who's there!",
    overview:
      "The Eufy Video Doorbell is the best wireless smart doorbell camera on the market in terms of price, reliability and performance.",
    concept:
      "It blows the competition away thanks to the fact it records in 2K, so the footage is extremely detailed, and a 4:3 aspect ratio means you can pretty much see the full length of the person on your doorstep.",
    more:
      "The battery-powered doorbell is good if you’re renting a place and can’t take out the old doorbell that’s already installed - it works wirelessly with the help of a hub that connects to your router, you can simply throw it on any outdoor surface and get it to work for up to six months at a time.",
    image:
      "https://www.the-ambient.com/media/imager/202009/30005-posts.homepage_preview_md.jpg",
    numberTag: "01",
    thumbnail: "https://imgur.com/xYnau3D.png",
    video: "https://www.youtube.com/embed/hcdDl8n-vV4",
    isActive: false,
    developmentDate: Date.UTC(2001, 6, 14, 0, 0, 0, 0),
  });

  const invation13 = await Invation.create({
    name: "Amazon Echo Studio",
    subtitle: "Stay away from the imitations!",
    overview:
      "For years, we gave smart speakers a pass in the audio department because we figured there was just no way for a speaker to both be smart and sound good. That was, until we created the Amazzon Echo Studio",
    concept:
      "In the Echo Studio, Amazon has made its best speaker yet. It's ambitious, flexible, serves multiple purposes and comes at a low price point that only a company with the scale of Amazon could competitively achieve.",
    more:
      "It’s a bombastic speaker, packed full of not just smart home and assistant tech, but smart audio considerations too. At its best, its 3D audio effects breathe new life into your favorite songs, and that's saying nothing of its ability to connect to your Amazon Fire TV devices to offer more immersive sound.",
    image:
      "https://m.media-amazon.com/images/G/29/kindle/dp/2019/090790/9893/ts_it_v1._CB452492311_.jpg",
    numberTag: "02",
    thumbnail: "https://imgur.com/m0aalfh.png",
    video: "https://www.youtube.com/embed/MU207ge4xW4",
    isActive: false,
    developmentDate: Date.UTC(2001, 6, 14, 0, 0, 0, 0),
  });

  const invation14 = await Invation.create({
    name: "Nest Thermostat E",
    subtitle: "Cold? Hot? Now you are smart!",
    overview:
      "The Nest Thermostat E proves that you don’t have to shell out for a smart thermostat.",
    concept:
      "It does away with a few, unnecessary features, but it keeps the majority of the smarts and saves you a whole lot of money.",
    more:
      "Still, if the Nest Thermostat E is compatible with your setup and you don’t care about the lack of farsight or slightly lower quality display, then it’s an excellent option.",
    image:
      "https://cdn.pocket-lint.com/r/s/970x/assets/images/145870-smart-home-review-nest-thermostat-e-review-image1-bd1t9aufkq-jpg.webp",
    numberTag: "03",
    thumbnail: "https://imgur.com/LYZt9T9.png",
    video: "https://www.youtube.com/embed/TooKLnkGgag",
    isActive: false,
    developmentDate: Date.UTC(2001, 6, 14, 0, 0, 0, 0),
  });

  // Work vision
  const invation15 = await Invation.create({
    name: "Cloud storage solutions",
    subtitle: "Do others have clouds? We have the whole storm!",
    overview:
      "The cloud has dramatically changed the way companies store and access data.",
    concept:
      "Cloud solutions let companies keep data and applications on remote, secure servers, which allows for rapid scalability, quick deployment of new solutions, and better information management.",
    more:
      "Employees can easily access information from wherever they are. Usually managed by third parties, cloud computing gives you the flexibility to build, store, and launch new applications, store ever-evolving amounts of data, and adapt quickly to changing needs.",
    image:
      "https://store.hp.com/app/assets/images/uploads/prod/top-cloud-storage-providers-2019-hero156346484495488.jpg?impolicy=prdimg&imdensity=1&imwidth=600",
    numberTag: "01",
    thumbnail: "https://imgur.com/KCW6Sw8.png",
    video: "https://www.youtube.com/embed/VDBhvexAj8I",
    isActive: false,
    developmentDate: Date.UTC(2001, 6, 14, 0, 0, 0, 0),
  });

  const invation16 = await Invation.create({
    name: "C&C tools",
    subtitle: "Let's work together!",
    overview:
      "With more employees working remotely than ever before, collaboration and communication among team members, partners, suppliers, and customers is essential.",
    concept:
      "Collaboration suites are crucial to making this happen, as they allow teams to store, edit, manage, and share documents widely. These products mean employees can access needed information no matter where they are, as long as they are connected to the internet.",
    more:
      "The top collaboration suites also include functions for easy communication, either via instant messaging or video calls for multiple users.",
    image:
      "https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2019/04/10061221/communicate-remote-team.png",
    numberTag: "02",
    thumbnail: "https://imgur.com/JUElaGf.png",
    video: "https://www.youtube.com/embed/fU7Dk8ZZSLY",
    isActive: false,
    developmentDate: Date.UTC(2001, 6, 14, 0, 0, 0, 0),
  });

  const invation17 = await Invation.create({
    name: "CRM solutions",
    subtitle: "Let's get these relationships!",
    overview:
      "CRM leads to shorter sales cycles, sales automation, faster responses, better retention, and a more in-depth analysis of what works to move leads to make purchases.",
    concept:
      "With a CRM, sales teams, marketing teams, and the accounting department can work together seamlessly to ensure a customer's needs are met—even when they're remote. Since digital CRM solutions' data is hosted on a cloud, it can be accessed from anywhere.",
    more:
      "An ideal digital CRM solution can pay dividends for a company when it helps them efficiently manage customer relations and improve their bottom line, even during a pandemic.",
    image:
      "https://www.crmpartners.it/wp-content/uploads/2020/11/CRM-che-cose.png",
    numberTag: "03",
    thumbnail: "https://imgur.com/1Op8bxP.png",
    video: "https://www.youtube.com/embed/hnEQq7kNFWo",
    isActive: false,
    developmentDate: Date.UTC(2001, 6, 14, 0, 0, 0, 0),
  });

  const vision0 = await Vision.create({
    numberTag: "01",
    name: "Education",
    description:
      "A new way of learning in a more effective way. Discover ourproposals about a new experience in the world of education.",
    image: "/visions/online-learning-icon.png",
    bigImage: "https://imgur.com/YrfS90S.png",
    video:
      "https://www.youtube.com/embed/nmu7kEzAQus?autoplay=1&mute=1&controls=0&loop=1",
    isActive: true,
  });
  const vision1 = await Vision.create({
    numberTag: "02",
    name: "Entertainment",
    description:
      "The world of entertainment is ready to embrace the new technologies about VR and AR where Reality merges with immagination.",
    image: "/visions/entertainment-icon.png",
    bigImage: "https://imgur.com/SG6Q2ZL.png",
    video:
      "https://www.youtube.com/embed/nmu7kEzAQus?autoplay=1&mute=1&controls=0&loop=1",
    isActive: true,
  });
  const vision2 = await Vision.create({
    numberTag: "03",
    name: "Smart Home",
    description:
      "Your home is part of your life, leaving in an intelligent and smart environment is essential for your quality of life.",
    image: "/visions/smart-house-icon.png",
    bigImage: "https://imgur.com/25DAOUV.png",
    video:
      "https://www.youtube.com/embed/nmu7kEzAQus?autoplay=1&mute=1&controls=0&loop=1",
    isActive: false,
  });
  const vision3 = await Vision.create({
    numberTag: "04",
    name: "Work",
    description:
      "The Covid-19 pandemic has accelerated an inevitable trend in which giving new opportunities for an efficient work indipendently from where you are is fundamental.",
    image: "/visions/working-icon.png",
    bigImage: "https://imgur.com/DM2O414.png",
    video:
      "https://www.youtube.com/embed/nmu7kEzAQus?autoplay=1&mute=1&controls=0&loop=1",
    isActive: false,
  });

  const technology1 = await Technology.create({
    name: "Virtual & Augmented Reality",
    description:
      "Virtual Reality is the technology that provides almost real and/or believable experiences in a synthetic or virtual way, while Augmented Reality enhances the real world by superimposing computer-generated information on top of it.",
    image: "To be added",
    color: "tag-color1",
    relatedPath: "VR",
  });

  const technology2 = await Technology.create({
    name: "Internet of Things",
    description:
      "The Internet of Things (IoT) describes the network of physical objects—“things”—that are embedded with sensors, software, and other technologies for the purpose of connecting and exchanging data with other devices and systems over the internet. These devices range from ordinary household objects to sophisticated industrial tools.",
    image: "To be added",
    color: "tag-color2",
    relatedPath: "IOT",
  });

  const technology3 = await Technology.create({
    name: "Conversational Agents",
    description:
      "A conversational agent is a software program which interprets and responds to statements made by users in ordinary natural language. It integrates computational linguistics techniques with communication over the internet.",
    image: "To be added",
    color: "tag-color3",
    relatedPath: "CA",
  });

  // Hard Skills
  const skill1 = await Skill.create({
    name: "SQL",
    image: "https://imgur.com/1vjWTuM.png",
  });

  const skill2 = await Skill.create({
    name: "Javascript",
    image: "https://imgur.com/NH9ba8K.png",
  });

  const skill3 = await Skill.create({
    name: "HTML",
    image: "https://imgur.com/HIOIBUo.png",
  });

  // Soft Skills
  const skill4 = await Skill.create({
    name: "Problem Solving",
    image: "https://imgur.com/nQBiG66.png",
  });
  const skill5 = await Skill.create({
    name: "Critical Thinking",
    image: "https://imgur.com/WTu2rQ0.png",
  });
  const skill6 = await Skill.create({
    name: "Team Management",
    image: "https://imgur.com/LZWyVie.png",
  });

  const invationer0 = await Invationer.create({
    name: "Clarke",
    surname: "Griffin",
    role: "Software Engineer",
    badge: "https://imgur.com/0aLvSQU.png",
    gender: "Female",
    age: 32,
    nationality: "Irish",
    overview:
      "Hi everyone! My name is Clarke Griffin and I am an Invationer since 2018. I try to innovate leveraging on my Computer Science background, working for Invation as a Software Engineer. Wanna know more? Scroll down!",
    quote:
      "Never say never because limits, like fears, are often just an illusion",
    image: "https://imgur.com/yxtU2Lm.png",
    sport: "No please!",
    hobby: "Gaming, Cooking, Reading",
    musical: "Pop music",
    preferred: "Education",
    telephone: "+39 389932321",
    email: "clarke.griffin@invation.com",
    fax: "88776 5432325",
    linkedin: "clarke.griffin",
    instagram: "#clarkeGriffin",
  });

  const invationer1 = await Invationer.create({
    name: "Marco",
    surname: "Bianchi",
    role: "Graphic Designer",
    badge: "https://imgur.com/PMiRZ1e.png",
    gender: "Male",
    age: 28,
    nationality: "Italian",
    overview:
      "Extrovert italian guy who always makes fun of himself and others and keeps the mood funny",
    quote: "There is nothing so stable as change",
    image: "https://imgur.com/d1ZJD5x.png",
    sport: "No please!",
    hobby: "Gaming, Drawing, Playing Music",
    musical: "Rock music",
    preferred: "Education",
    telephone: "+39 3899528421",
    email: "marco.bianchi@invation.com",
    fax: "887456 5437368",
    linkedin: "marco.bianchi",
    instagram: "#iMBianchino",
  });

  const invationer2 = await Invationer.create({
    name: "Lorenzo",
    surname: "Verdi",
    role: "Software Engineer",
    badge: "https://imgur.com/0aLvSQU.png",
    gender: "Male",
    age: 31,
    nationality: "Italian",
    overview:
      "Friendly and generous italian guy always polite with friends and colleagues",
    quote: "Concentrate all your thoughts upon the work in hand",
    image: "https://imgur.com/WIdUywG.png",
    sport: "Football",
    hobby: "Playing football, Watching TV Series",
    musical: "Classical Music",
    preferred: "Education",
    telephone: "+39 3898250521",
    email: "lorenzo.verdi@invation.com",
    fax: "889856 5436539",
    linkedin: "lorenzo.verdi",
    instagram: "#lolloVerdi",
  });

  const invationer3 = await Invationer.create({
    name: "Nathalie",
    surname: "Dubois",
    role: "Project Manager",
    badge: "https://imgur.com/YeBOmpm.png",
    gender: "Female",
    age: 25,
    nationality: "French",
    overview: "Extrovert and determined frech woman, feminist activist",
    quote: "I'm tough, I'm ambitious, and I know exactly what I want",
    image: "https://imgur.com/368MRQF.png",
    sport: "Ski",
    hobby: "Reading,Writing, Watching TV Series",
    musical: "Pop music",
    preferred: "Education",
    telephone: "+39 345825621",
    email: "nathalie.dubois@invation.com",
    fax: "888856 5436569",
    linkedin: "nathalie.dubois",
    instagram: "#nathalie_dubois",
  });
  const invationer4 = await Invationer.create({
    name: "Massimiliano",
    surname: "Allegri",
    role: "Marketing Coordinator",
    badge: "https://imgur.com/IzpJHM4.png",
    gender: "Male",
    age: 38,
    nationality: "Italian",
    overview:
      "Funny italian man, known for his ability to brighten the working atmosphere",
    quote: "The only thing we have to fear is fear itself.",
    image: "https://imgur.com/ck7LkGI.png",
    sport: "Football",
    hobby: "Phishing",
    musical: "Pop music",
    preferred: "Entertainment",
    telephone: "+39 3337865096",
    email: "massimiliano.allegri@invation.com",
    fax: "887416 4737598",
    linkedin: "massimiliano.allegri",
    instagram: "#acciughina67",
  });
  const invationer5 = await Invationer.create({
    name: "Carlo",
    surname: "Rovelli",
    role: "Software Engineer",
    badge: "https://imgur.com/0aLvSQU.png",
    gender: "Male",
    age: 24,
    nationality: "Italian",
    overview:
      "Introvert italian guy who likes spending time at home with his books",
    quote: "Il mondo è fatto di reti di baci, non di sassi",
    image: "https://imgur.com/TwwmnbH.png",
    sport: "No please!",
    hobby: "Reading, Writing",
    musical: "Folk Music",
    preferred: "Work",
    telephone: "+39 3337065096",
    email: "carlo.rovelli@invation.com",
    fax: "876516 4730988",
    linkedin: "carlo.rovelli",
    instagram: "#carlitorovelli",
  });
  const invationer6 = await Invationer.create({
    name: "Zac",
    surname: "Efron",
    role: "Graphic Designer",
    badge: "https://imgur.com/PMiRZ1e.png",
    gender: "Male",
    age: 34,
    nationality: "USA",
    overview:
      "Pationate american guy who loves having an active life full of new experiences",
    quote: "Every day is a new experience and I take it as it comes",
    image: "https://imgur.com/xJGXER7.png",
    sport: "Basket",
    hobby: "Climbing, Drawing",
    musical: "Rock Music",
    preferred: "Work",
    telephone: "+39 3337098594",
    email: "zac.efron@invation.com",
    fax: "856516 4709878",
    linkedin: "zac.efron",
    instagram: "#zacfword",
  });
  const invationer7 = await Invationer.create({
    name: "Vanessa",
    surname: "Hudgens",
    role: "Human Resources",
    badge: "https://imgur.com/jS8DNmJ.png",
    gender: "Female",
    age: 30,
    nationality: "USA",
    overview:
      "Determined girl who loves her pets and her family more than anything else",
    quote: "Being cool is being your own self, just as you are.",
    image: "https://imgur.com/pGAPhG3.png",
    sport: "No please!",
    hobby: "Dancing, Reading",
    musical: "Pop Music",
    preferred: "Entertainment",
    telephone: "+39 3337067044",
    email: "vanessa.hudgens@invation.com",
    fax: "856987 4709878",
    linkedin: "vanessa.hudgens",
    instagram: "#vanessahudgens",
  });

  // review for invation 0
  const review1 = await Review.create({
    author: "User 1",
    body: "This invation is amazing. It really interested me!",
  });

  const review2 = await Review.create({
    author: "User 2",
    body: "Omg I want to play with it!",
  });

  //  review for invation 1
  const review3 = await Review.create({
    author: "User 3",
    body: "Never tried Smart Space before but now I am super interested",
  });

  const review4 = await Review.create({
    author: "User 1",
    body: "Amazing for children! Really recommended",
  });

  const review5 = await Review.create({
    author: "User 6",
    body:
      "Magic Room is a really representative name of the amazing and fantasious journey that my child had while palying inside with his friends",
  });

  //  review for invation 2
  const review6 = await Review.create({
    author: "User 3",
    body: "A boost for emotions in children with NDD. Really a great job",
  });

  const review7 = await Review.create({
    author: "User 5",
    body: "My child used it and it helped a lot!",
  });

  //  review for invation 3
  const review8 = await Review.create({
    author: "User 4",
    body:
      "Interesting for children with NDD and also for their schoolmates to play all together in a safe way",
  });

  const review9 = await Review.create({
    author: "User 9",
    body: "Its shape reminds my of Big Hero. My son would loke it!",
  });

  const review10 = await Review.create({
    author: "User 2",
    body:
      "In my opinion, all rehabilitation centres shoudl by one to deal with special children",
  });

  //  review for invation 4
  const review11 = await Review.create({
    author: "User 1",
    body: "I can confirm! The first result came really fast. Recommended!",
  });

  const review12 = await Review.create({
    author: "User 4",
    body: "Interesting tool!",
  });

  //  review for invation 5
  const review13 = await Review.create({
    author: "User 5",
    body: "My daugther is in love with this dolfin, where can I get one?",
  });

  const review14 = await Review.create({
    author: "User 2",
    body: "Is a single player activity or the dolphins connect to each other?",
  });

  //  review for invation 6
  const review15 = await Review.create({
    author: "User 5",
    body: "My daugther is in love with this game.",
  });

  const review16 = await Review.create({
    author: "User 2",
    body: "Really funny and the main character is amazing!",
  });

  //  review for invation 7
  const review17 = await Review.create({
    author: "User 5",
    body:
      "I am 27 years old and this game freaked me out. Amazing for all the ages.",
  });

  const review18 = await Review.create({
    author: "User 2",
    body: "do you have the rhythm? Let's compete!",
  });

  //  review for invation 8
  const review19 = await Review.create({
    author: "User 5",
    body: "Suspance and fun mixed in an incredible game! Well done Invation.",
  });

  const review20 = await Review.create({
    author: "User 2",
    body: "I hate robots!",
  });

  //  review for invation 9
  const review21 = await Review.create({
    author: "User 5",
    body: "so funny! I love this goat.",
  });

  const review22 = await Review.create({
    author: "User 2",
    body: "I love games in Vr and this one is my favourite.",
  });

  //  review for invation 10
  const review23 = await Review.create({
    author: "User 5",
    body: "I am defenetely the new Tiger Woods",
  });

  const review24 = await Review.create({
    author: "User 2",
    body: "An amazing VR experience. Really Recommended",
  });

  //  review for invation 11
  const review25 = await Review.create({
    author: "User 5",
    body: "It's disgusting when enemies vomits on you but ... I loved it!",
  });

  const review26 = await Review.create({
    author: "User 2",
    body: "I was so scared! One of the best VR games ever!",
  });

  // Invations --> Visions
  await vision0.addInvation(invation0.id);
  await vision0.addInvation(invation1.id);
  await vision0.addInvation(invation2.id);
  await vision0.addInvation(invation3.id);
  await vision0.addInvation(invation4.id);
  await vision0.addInvation(invation5.id);
  await vision1.addInvation(invation6.id);
  await vision1.addInvation(invation7.id);
  await vision1.addInvation(invation8.id);
  await vision1.addInvation(invation9.id);
  await vision1.addInvation(invation10.id);
  await vision1.addInvation(invation11.id);
  await vision2.addInvation(invation12.id);
  await vision2.addInvation(invation13.id);
  await vision2.addInvation(invation14.id);
  await vision3.addInvation(invation15.id);
  await vision3.addInvation(invation16.id);
  await vision3.addInvation(invation17.id);
  // Technology --> Invations
  await invation0.addTechnology(technology1.id);
  await invation0.addTechnology(technology2.id);
  await invation1.addTechnology(technology1.id);
  await invation1.addTechnology(technology2.id);
  await invation2.addTechnology(technology3.id);
  await invation3.addTechnology(technology2.id);
  await invation3.addTechnology(technology3.id);
  await invation4.addTechnology(technology3.id);
  await invation5.addTechnology(technology2.id);
  await invation6.addTechnology(technology1.id);
  await invation7.addTechnology(technology1.id);
  await invation8.addTechnology(technology1.id);
  await invation9.addTechnology(technology1.id);
  await invation10.addTechnology(technology1.id);
  await invation11.addTechnology(technology1.id);
  await invation12.addTechnology(technology2.id);
  await invation13.addTechnology(technology2.id);
  await invation13.addTechnology(technology3.id);
  await invation14.addTechnology(technology2.id);
  await invation15.addTechnology(technology1.id);
  await invation16.addTechnology(technology2.id);
  await invation17.addTechnology(technology3.id);
  // Invationers --> Visions
  await vision0.addInvationer(invationer0.id);
  await vision1.addInvationer(invationer4.id);
  await vision2.addInvationer(invationer6.id);
  await vision3.addInvationer(invationer7.id);

  // Invations --> Invationers
  await invationer0.addInvation(invation0.id);
  await invationer0.addInvation(invation1.id);
  await invationer0.addInvation(invation3.id);
  await invationer0.addInvation(invation6.id);
  await invationer0.addInvation(invation12.id);
  await invationer0.addInvation(invation16.id);
  await invationer1.addInvation(invation0.id);
  await invationer1.addInvation(invation1.id);
  await invationer1.addInvation(invation3.id);
  await invationer1.addInvation(invation5.id);
  await invationer1.addInvation(invation6.id);
  await invationer1.addInvation(invation9.id);
  await invationer1.addInvation(invation13.id);
  await invationer2.addInvation(invation0.id);
  await invationer2.addInvation(invation2.id);
  await invationer2.addInvation(invation4.id);
  await invationer2.addInvation(invation5.id);
  await invationer2.addInvation(invation8.id);
  await invationer2.addInvation(invation15.id);
  await invationer3.addInvation(invation2.id);
  await invationer3.addInvation(invation3.id);
  await invationer3.addInvation(invation4.id);
  await invationer3.addInvation(invation7.id);
  await invationer3.addInvation(invation10.id);
  await invationer3.addInvation(invation14.id);
  await invationer3.addInvation(invation16.id);
  await invationer4.addInvation(invation6.id);
  await invationer4.addInvation(invation7.id);
  await invationer4.addInvation(invation8.id);
  await invationer4.addInvation(invation9.id);
  await invationer4.addInvation(invation10.id);
  await invationer4.addInvation(invation13.id);
  await invationer4.addInvation(invation15.id);
  await invationer5.addInvation(invation7.id);
  await invationer5.addInvation(invation9.id);
  await invationer5.addInvation(invation10.id);
  await invationer5.addInvation(invation11.id);
  await invationer5.addInvation(invation14.id);
  await invationer6.addInvation(invation8.id);
  await invationer6.addInvation(invation9.id);
  await invationer6.addInvation(invation10.id);
  await invationer6.addInvation(invation12.id);
  await invationer6.addInvation(invation13.id);
  await invationer6.addInvation(invation14.id);
  await invationer6.addInvation(invation16.id);
  await invationer7.addInvation(invation6.id);
  await invationer7.addInvation(invation7.id);
  await invationer7.addInvation(invation10.id);
  await invationer7.addInvation(invation12.id);
  await invationer7.addInvation(invation15.id);
  await invationer7.addInvation(invation16.id);
  await invationer7.addInvation(invation17.id);

  // Invationers --> Invations
  await invation0.addInvationer(invationer0.id);
  await invation0.addInvationer(invationer1.id);
  await invation0.addInvationer(invationer2.id);
  await invation1.addInvationer(invationer0.id);
  await invation1.addInvationer(invationer1.id);
  await invation2.addInvationer(invationer2.id);
  await invation2.addInvationer(invationer3.id);
  await invation3.addInvationer(invationer0.id);
  await invation3.addInvationer(invationer1.id);
  await invation3.addInvationer(invationer3.id);
  await invation4.addInvationer(invationer2.id);
  await invation4.addInvationer(invationer3.id);
  await invation5.addInvationer(invationer1.id);
  await invation5.addInvationer(invationer2.id);
  await invation6.addInvationer(invationer0.id);
  await invation6.addInvationer(invationer1.id);
  await invation6.addInvationer(invationer7.id);
  await invation6.addInvationer(invationer4.id);
  await invation7.addInvationer(invationer3.id);
  await invation7.addInvationer(invationer4.id);
  await invation7.addInvationer(invationer5.id);
  await invation7.addInvationer(invationer7.id);
  await invation8.addInvationer(invationer2.id);
  await invation8.addInvationer(invationer4.id);
  await invation8.addInvationer(invationer6.id);
  await invation9.addInvationer(invationer1.id);
  await invation9.addInvationer(invationer4.id);
  await invation9.addInvationer(invationer5.id);
  await invation9.addInvationer(invationer6.id);
  await invation10.addInvationer(invationer3.id);
  await invation10.addInvationer(invationer5.id);
  await invation10.addInvationer(invationer7.id);
  await invation11.addInvationer(invationer4.id);
  await invation11.addInvationer(invationer5.id);
  await invation11.addInvationer(invationer6.id);
  await invation12.addInvationer(invationer0.id);
  await invation12.addInvationer(invationer6.id);
  await invation12.addInvationer(invationer7.id);
  await invation13.addInvationer(invationer1.id);
  await invation13.addInvationer(invationer4.id);
  await invation13.addInvationer(invationer6.id);
  await invation14.addInvationer(invationer3.id);
  await invation14.addInvationer(invationer5.id);
  await invation14.addInvationer(invationer6.id);
  await invation15.addInvationer(invationer2.id);
  await invation15.addInvationer(invationer4.id);
  await invation15.addInvationer(invationer7.id);
  await invation16.addInvationer(invationer0.id);
  await invation16.addInvationer(invationer3.id);
  await invation16.addInvationer(invationer6.id);
  await invation16.addInvationer(invationer7.id);
  // Skills --> Invationers
  await invationer0.addSkill(skill1.id);
  await invationer0.addSkill(skill2.id);
  await invationer0.addSkill(skill3.id);
  await invationer1.addSkill(skill1.id);
  await invationer1.addSkill(skill2.id);
  await invationer1.addSkill(skill3.id);
  await invationer2.addSkill(skill2.id);
  await invationer2.addSkill(skill1.id);
  await invationer2.addSkill(skill3.id);
  await invationer3.addSkill(skill4.id);
  await invationer3.addSkill(skill5.id);
  await invationer3.addSkill(skill6.id);
  await invationer4.addSkill(skill2.id);
  await invationer4.addSkill(skill6.id);
  await invationer5.addSkill(skill1.id);
  await invationer5.addSkill(skill2.id);
  await invationer5.addSkill(skill3.id);
  await invationer6.addSkill(skill2.id);
  await invationer6.addSkill(skill6.id);
  await invationer7.addSkill(skill5.id);
  await invationer7.addSkill(skill6.id);

  await invation0.addReview(review1.id);
  await invation0.addReview(review2.id);

  await invation1.addReview(review3.id);
  await invation1.addReview(review4.id);
  await invation1.addReview(review5.id);

  await invation2.addReview(review6.id);
  await invation2.addReview(review7.id);

  await invation3.addReview(review8.id);
  await invation3.addReview(review9.id);
  await invation3.addReview(review10.id);

  await invation4.addReview(review11.id);
  await invation4.addReview(review12.id);

  await invation5.addReview(review13.id);
  await invation5.addReview(review14.id);

  await invation6.addReview(review15.id);
  await invation6.addReview(review16.id);

  await invation7.addReview(review17.id);
  await invation7.addReview(review18.id);

  await invation8.addReview(review19.id);
  await invation8.addReview(review20.id);

  await invation9.addReview(review21.id);
  await invation9.addReview(review22.id);

  await invation10.addReview(review23.id);
  await invation10.addReview(review24.id);

  await invation11.addReview(review25.id);
  await invation11.addReview(review26.id);
}
/**
 * Function to initialize the database. This is exported and called in the main api.js file
 */
async function initializeDatabase() {
  // Call the function for the database structure definition-----
  defineDatabaseStructure();

  // Synchronize Sequelize with the actual database--------------

  // force = true drops the existent tables
  await db.sync({ force: true });
  // await db.sync()

  // Call the function to insert some fake data -----------------

  await insertFakeData();
  return db;
}

export default initializeDatabase;
