function formatName(name) {
  const formatted = name
    .trim()
    .replace(/\s{2,}/g, " ")
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
  return formatted;
}


function checkExercise(exercise) {
  const newExercise = {
    name: formatName(exercise.name),
    type: exercise.type,
    muscle: exercise.muscle,
    equipment: exercise.equipment,
    difficulty: exercise.difficulty,
    instructions: exercise.instructions,
  };
  return newExercise;
}

module.exports = checkExercise;
