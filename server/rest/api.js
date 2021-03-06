import express from "express";
import initializeDatabase from "../db-conn";
const app = express();

// We need this one if we send data inside the body as JSON
app.use(express.json());

async function init() {
  // Call the init function that returns the Database
  const db = await initializeDatabase();
  // Let's extract all the objects we need to perform queries inside the endpoints
  const {
    Invation,
    Vision,
    Invationer,
    Technology,
    Skill,
    Review,
  } = db._tables;

  // Get all the visions
  app.get("/visions", async (req, res) => {
    const visions = await Vision.findAll({
      attributes: [
        "id",
        "name",
        "numberTag",
        "image",
        "description",
        "isActive",
      ],
    });
    return res.json(visions);
  });

  // Get all the invationers
  app.get("/invationers", async (req, res) => {
    const invationers = await Invationer.findAll({
      include: {
        model: Skill,
        attributes: ["id", "name"],
      },
      attributes: ["id", "name", "surname", "thumbnail", "quote", "role"],
    });
    return res.json(invationers);
  });

  // Get all the invations
  app.get("/invations", async (req, res) => {
    const invations = await Invation.findAll({
      include: {
        model: Vision,
        attributes: ["id", "name"],
      },
      attributes: ["name", "id", "thumbnail", "overview", "isActive"],
    });
    return res.json(invations);
  });

  // Get the 3 last invations
  app.get("/invations_last", async (req, res) => {
    const invations = await Invation.findAll({
      limit: 3,
      order: [["developmentDate", "DESC"]],
      include: {
        model: Vision,
        attributes: ["id", "name"],
      },
      attributes: ["name", "id", "thumbnail", "overview", "developmentDate"],
    });
    return res.json(invations);
  });

  // API to get a vision by ID.
  app.get("/visions/:id", async (req, res) => {
    const { id } = req.params;
    const vision = await Vision.findOne({
      where: { id },
      include: [
        {
          model: Invation,
          attributes: [
            "id",
            "name",
            "subtitle",
            "overview",
            "image",
            "numberTag",
            "thumbnail",
          ],
          order: ["numberTag", "ASC"],
        },
        {
          model: Invationer,
          attributes: ["id", "thumbnail", "name", "surname", "role", "quote"],
          include: { model: Skill },
        },
      ],
    });
    return res.json(vision);
  });

  // API to get an invation by ID.
  app.get("/invation/:id", async (req, res) => {
    const { id } = req.params;
    const invation = await Invation.findOne({
      where: { id },
      include: [
        {
          model: Invationer,
          attributes: ["id", "name", "surname", "quote", "role", "thumbnail"],
          include: { model: Skill },
        },
        {
          model: Technology,
          attributes: ["id", "name", "color", "relatedPath"],
        },
        { model: Review },
        {
          model: Vision,
          attributes: ["id", "name"],
        },
      ],
      attributes: {
        exclude: ["thumbnail"],
      },
    });

    return res.json(invation);
  });

  // API to get a vision by ID with all the related invations for guided tour navigation.
  app.get("/invations_for_vision/:id", async (req, res) => {
    const { id } = req.params;
    const invations = await Invation.findAll({
      where: { vision_id: id },
      attributes: ["id"],
      order: ["id"],
    });
    return res.json(invations);
  });

  // API to get an invationer by ID.
  app.get("/invationers/:id", async (req, res) => {
    const { id } = req.params;
    const invationer = await Invationer.findOne({
      where: { id },
      include: [
        { model: Skill },
        { model: Vision, attributes: ["id", "name", "isActive"] },
        {
          model: Invation,
          include: { model: Vision, attributes: ["id", "name"] },
        },
      ],
    });
    return res.json(invationer);
  });

  // API to create a new review
  app.post("/review", async (req, res) => {
    const body = req.body;

    const newReview = await Review.create({
      author: body.author,
      body: body.body,
      invation_id: body.invation_id,
    });

    return res.send(newReview);
  });

  // API to get all the technologies
  app.get("/technologies", async (req, res) => {
    const technologies = await Technology.findAll({
      include: {
        model: Invation,
        attributes: ["name", "id", "thumbnail", "overview", "isActive"],
      },
    });
    return res.json(technologies);
  });
}

init();

export default app;
