const db = require("../db/dbConfig.js");

const getAllExercises = async () => await db.any("SELECT * FROM exercises");

const getOneExercise = async (id) =>
  await db.one("SELECT * FROM exercises WHERE id=$1", id);

const updateOneExercise = async (id, exercise) => {
  const { name, type, muscle, equipment, difficulty, instructions } = exercise;

  return await db.one(
    "UPDATE exercises SET name=$1, type=$2, muscle=$3, equipment=$4, difficulty=$5, instructions=$6 WHERE id=$7 RETURNING *",
    [name, type, muscle, equipment, difficulty, instructions, id]
  );
};

const deleteExercise = async (id) =>
  await db.one("DELETE FROM exercises WHERE id = $1 RETURNING *", id);

const createExercise = async (exercise) =>
  await db.one(
    "INSERT INTO exercises (name, type, muscle, equipment, difficulty, instructions) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
    [
      exercise.name,
      exercise.type,
      exercise.muscle,
      exercise.equipment,
      exercise.difficulty,
      exercise.instructions,
    ]
  );

module.exports = {
  getAllExercises,
  getOneExercise,
  deleteExercise,
  createExercise,
  updateOneExercise,
};
