// Harris-Benedict Equation for Basal Metabolic Rate
const bmrFx = (gender, inchHeight, lbWeight, age) => {
  if (gender == 'male') {
      return  parseFloat((66.5 + (13.75 * lbWeight / 2.2) +(inchHeight * 2.54 * 5.003) - (6.775 * age)).toFixed(0));
  } else if (gender =="female") {
      return  parseFloat((655.1 + (9.563 * lbWeight / 2.2) +(inchHeight * 2.54 * 1.85) - (4.676 * age)).toFixed(0));
  }
}

export default bmrFx;