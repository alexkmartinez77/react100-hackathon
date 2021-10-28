const calculateCalorieTotal = (array) => {
  let calorieTotal = 0;
  array.map(arrayItem =>{
    calorieTotal += arrayItem.calories;
  })
  return calorieTotal;
}

export default calculateCalorieTotal;