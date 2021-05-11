import express from 'express'
import initializeDatabase from '../db-conn'
const app = express()

// We need this one if we send data inside the body as JSON
app.use(express.json())

async function init() {
  // Call the init function that returns the Database
  const db = await initializeDatabase()
  // Let's extract all the objects we need to perform queries inside the endpoints
  const {
    Invation,
    Vision,
    Invationer,
    Technology,
    Skill,
    Review,
    User,
  } = db._tables

  // Get all the visions
  app.get('/visions', async (req, res) => {
    const visions = await Vision.findAll()
    return res.json(visions)
  })

  // Get all the invationers
  app.get('/invationers', async (req, res) => {
    const invationers = await Invationer.findAll()
    return res.json(invationers)
  })

  // Get all the invations
  app.get('/invations', async (req, res) => {
    const invations = await Invation.findAll()
    return res.json(invations)
  })

  // Get 10 invations' images and use their overview as alt attribute
  // https://sequelize.org/v5/manual/models-usage.html#manipulating-the-dataset-with-limit--offset--order-and-group
  app.get('/invations10', async (req, res) => {
    const invations = await Invation.findAll({ limit: 10 })

    let invationImgs = []

    invations.forEach((invation) => {
      let item = {
        id: invation.id,
        name: invation.name,
        alt: invation.overview,
        imgPath: invation.thumbnail,
        detailPage: `/invation/${invation.id}`,
      }
      invationImgs.push(item)
    })

    return res.json(invationImgs)
  })

  // Get the 3 last invations
  app.get('/invations_last', async (req, res) => {
    const invations = await Invation.findAll({
      limit: 3,
      order: [['createdAt', 'DESC']],
    })
    return res.json(invations)
  })

  // API to get a vision by ID.
  app.get('/visions/:id', async (req, res) => {
    const { id } = req.params
    const vision = await Vision.findOne({
      where: { id },
      include: {
        model: Invation,
        attributes: ['name', 'subtitle', 'overview', 'image', 'numberTag'],
      },
    })
    return res.json(vision)
  })

  // API to get an invation by ID.
  app.get('/invation/:id', async (req, res) => {
    const { id } = req.params
    const invation = await Invation.findOne({
      where: { id },
      include: [
        {
          model: Invationer,
          attributes: ['id', 'name', 'surname', 'role', 'image'],
        },
        { model: Technology, attributes: ['id', 'name', 'color'] },
        { model: Review },
        { model: User, attributes: ['id'] },
      ],
      attributes: {
        exclude: ['thumbnail'],
      },
    })
    return res.json(invation)
  })

  // API to get an invationer by ID.
  app.get('/invationers/:id', async (req, res) => {
    const { id } = req.params
    const invationer = await Invationer.findOne({
      where: { id },
      include: { model: Skill },
    })
    return res.json(invationer)
  })

  // API to get a user by ID.
  app.get('/users/:id', async (req, res) => {
    const { id } = req.params
    const user = await User.findOne({
      where: { id },
      include: { model: Invation },
    })
    return res.json(user)
  })

  // API to create a new review
  app.post('/review', async (req, res) => {
    const body = req.body

    const newReview = await Review.create({
      author: body.author,
      body: body.body,
      invation_id: body.invation_id,
    })

    return res.send(newReview)
  })

  // API for handling login request
  app.post('/login', async (req, res) => {
    const body = req.body

    const user = await User.findOne({
      where: { username: body.username },
    })

    if (user === null) {
      console.log('null')
      const error = 'Username not found. Try again'
      return res.status(404).json(error)
    }
    if (user.password === body.password) {
      console.log('user')
      return res.send(user)
    } else {
      console.log('pass')
      const error = 'Wrong password. Try again'
      return res.status(404).json(error)
    }
  })

  // API for handling registration request
  app.post('/registration', async (req, res) => {
    const body = req.body
    const password = req.password
    const repeat = req.repeat

    if (password === repeat) {
      const user = await User.create({
        username: body.username,
        email: body.email,
        password: body.password,
      })

      return res.send(user)
    } else {
      const error = 'The two password are not matching. Please retry.'
      return res.status(404).json(error)
    }
  })

  // API for modifying the user profile
  app.put('/updateProfile/:id', async (req, res) => {
    const { id } = req.params
    const body = req.body

    const updated = await User.update(body, {
      where: { id: id },
    })

    return res.send(updated)
  })

  app.post('/saveInvation/:idInvation/:idUser', async (req, res) => {
    const { idUser, idInvation } = req.params

    const user = await User.findOne({
      where: { id: idUser },
    })

    const invation = await Invation.findOne({
      where: { id: idInvation },
    })

    await user.addInvation(invation)
  })

  app.post('/unSaveInvation/:idInvation/:idUser', async (req, res) => {
    const { idUser, idInvation } = req.params

    const user = await User.findOne({
      where: { id: idUser },
    })

    const invation = await Invation.findOne({
      where: { id: idInvation },
    })

    await user.removeInvation(invation)
  })
}

init()

export default app
