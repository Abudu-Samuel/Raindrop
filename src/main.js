
const rainDrops = (num) => {
  let output = '';
  if (!Number(num)) return 'Please enter a valid number';
  if (num % 3 === 0) {
    output += 'Pling';
  }
  if (num % 5 === 0) {
    output += 'Plang';
  }
  if (num % 7 === 0) {
    output += 'Plong';
  }
  if (output.length === 0) {
    return Number(num);
  }
  return output;
};

export default rainDrops;
