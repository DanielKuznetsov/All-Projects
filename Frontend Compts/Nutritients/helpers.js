export const capitalize = (word) => {
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
};

export const calculateCalories = (carbs = 0, protein = 0, fat = 0) => {
  return carbs * 4 + protein * 4 + fat * 9;
};
