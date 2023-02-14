const express = require("express");
const exercises = express.Router();
const {
  getAllExercises,
  getOneExercise,
  updateOneExercise,
  deleteExercise,
  createExercise,
} = require("../queries/exercises");
const checkExercise = require("../utils/exerciseCheck");

exercises.get("/", async (req, res) => {
  try {
    const exercises = await getAllExercises();
    res.json(exercises);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "something went wrong!" });
  }
});

exercises.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const exercise = await getOneExercise(id);
    res.json(exercise);
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: "That Exercise doesn't exist!!" });
  }
});

exercises.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const exercise = checkExercise(req.body);
    const updatedexercise = await updateOneExercise(id, exercise);
    res.json(updatedexercise);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Cannot update Exercise" });
  }
});

exercises.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedExercise = await deleteExercise(id);
    res.json(deletedExercise);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Something went wrong!" });
  }
});

exercises.post("/", async (req, res) => {
  try {
    const exercise = checkExercise(req.body);
    const createdExercise = await createExercise(exercise);
    res.json(createdExercise);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: `Malformed post body: ${req.body}` });
  }
});

module.exports = exercises;
