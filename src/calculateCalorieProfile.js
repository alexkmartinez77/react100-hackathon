import bmrFx from './bmrFx.js';

const calculateCalorieProfile = (userProfile) => {
  let {age, feet, inches, weight, gender, goals} = userProfile;
  let obj = {};
  obj.bmr = bmrFx(gender, parseFloat(feet) * 12 + parseFloat(inches), parseFloat(weight), parseFloat(age));
  obj.caloricNeeds = parseFloat((obj.bmr * 1.2).toFixed(0));
  obj.caloricGoals = (goals == 'weight loss') ? obj.caloricNeeds - 500 : obj.caloricNeeds;
  obj.caloriesRemaining = obj.caloricGoals;
  obj.percentRemaining = obj.caloriesRemaining/obj.caloricGoals*100;

  return obj;
}
export default calculateCalorieProfile;