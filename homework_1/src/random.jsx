export function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

export function getRandomColor() {
  return `rgb(
      ${getRandomNumber(255)},
      ${getRandomNumber(255)},
      ${getRandomNumber(255)}
    )`;
}
