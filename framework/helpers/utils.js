function getRandomIntFromLength(length = 10) {
    const random = Math.floor(10 ** length - 1 + Math.random() * 9 * (10 ** length - 1))
    console.log(random)
    return random;
  }
export default getRandomIntFromLength;