import express from 'express'
import initializeDatabase from '../db-conn'
const app = express()

// We need this one if we send data inside the body as JSON
app.use(express.json())

async function init() {
  // Call the init function that returns the Database
  const db = await initializeDatabase()
  // Let's extract all the objects we need to perform queries inside the endpoints
  const { Invation, Vision, Invationer, Technology, Skill } = db._tables

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

  // API to get an invation by ID.
  app.get('/invation/:id', async (req, res) => {
    const { id } = req.params
    const invation = await Invation.findOne({
      where: { id },
      include: [{ model: Invationer }, { model: Technology }],
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
}

init()

export default app
