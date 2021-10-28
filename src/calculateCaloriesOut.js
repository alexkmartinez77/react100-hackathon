import calculateCalorieTotal from "./calculateCalorieTotal";

const calculateCalorieProfile = (calorieProfile) => {
  let array = [];
  let obj = {};
  let {bmr} = calorieProfile;
  let baseActivityLevel = parseFloat((bmr * .2).toFixed(0));

  let BMR =  {
      name: 'Basal Metabolic Rate',
      calories: bmr,
  };

  let activityLevel = {
      name: 'Base Activity Level',
      calories: baseActivityLevel,
  };

  array.push(BMR);
  array.push(activityLevel);
  
  obj.total = calculateCalorieTotal(array);
  obj.item = {};
  obj.array = array;

  return obj;
}
export default calculateCalorieProfile;