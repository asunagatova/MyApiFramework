function getRandomIntFromLength(length = 10) {
    const random = Math.floor(10 ** length - 1 + Math.random() * 9 * (10 ** length - 1))
    console.log(random)
    return random;
  }

const RandomNumber = {
  getRandomIntFromLength: (length = 10) => {
    const random = Math.floor(10 ** length - 1 + Math.random() * 9 * (10 ** length - 1));
    return random;
 },
  getRandomIntFromRange: (max) => {
    const r = Math.floor(Math.random() * Math.floor(max)) + 1;
    return r;
}
}

const utils = () => ({
  RandomNumber: () => ({ ...RandomNumber }),
});

export default utils;