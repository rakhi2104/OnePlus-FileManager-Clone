const getRandomValue = (min = 0, max = 2000, rounding = 0) => {
  const powerValue = Math.pow(10, rounding);
  let value = Math.round(Math.random(min, max) * max * powerValue) / powerValue;
  return value.toFixed(rounding);
};
export { getRandomValue };
