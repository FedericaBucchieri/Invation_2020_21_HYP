import express from 'express'
import initializeDatabase from '../db-conn'
const app = express()

// We need this one if we send data inside the body as JSON
app.use(express.json())

async function init() {
  // Call the init function that returns the Database
  const db = await initializeDatabase()
  // Let's extract all the objects we need to perform queries inside the endpoints
  const { Invation, Vision, Invationer, Technology, Skill, Review } = db._tables

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
      include: { model: Invation },
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
      ],
      attributes: {
        exclude: ['thumbnail'],
      },
    })
    return res.json(invation)
  })

  // API to get an invationer by ID.
  app.get('/invationer/:id', async (req, res) => {
    const { id } = req.params
    const invationer = await Invationer.findOne({
      where: { id },
      include: { model: Skill },
    })
    return res.json(invationer)
  })

  // This one is just an example
  app.get('/ad', (req, res) => {
    return res.json({
      url:
        'https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/media/images/google-display-ads-example-2-final.png?oV7qevVB2XtFyF_O64TG6L27AFM3M2oL&itok=TBfuuTM_',
    })
  })

  app.post('/review', async (req, res) => {
    const body = req.body

    const newReview = await Review.create({
      author: body.author,
      body: body.body,
      invation_id: body.invation_id,
    })

    return res.send(newReview)
  })
}

init()

export default app
