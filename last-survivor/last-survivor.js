//kata: https://www.codewars.com/kata/609eee71109f860006c377d1

const lastSurvivor = (letters, coords) => {
  for (const coord of coords) {
    letters = letters.slice(0, coord) + letters.slice(coord + 1);
  }

  return letters;
};

module.exports = lastSurvivor;
