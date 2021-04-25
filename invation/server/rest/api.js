import express from 'express'
import initializeDatabase from '../db-conn'
const app = express()

// We need this one if we send data inside the body as JSON
app.use(express.json())

async function init() {
  // Call the init function that returns the Database
  const db = await initializeDatabase()
  // Let's extract all the objects we need to perform queries inside the endpoints
  const { Invation, Vision } = db._tables

  // API to get all the vision
  app.get('/visions', async (req, res) => {
    const vision = await Vision.findAll()
    return res.json(visions)
  })

  // API to get an invation by ID.
  app.get('/invation/:id', async (req, res) => {
    const { id } = req.params
    const invation = await Invation.findOne({
      where: { id },
    })
    return res.json(invation)
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
