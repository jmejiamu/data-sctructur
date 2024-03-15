const dominoCollision = (dominoes: number[]): number[] => {
  let collided = true;

  while (collided) {
    collided = false;

    for (let i = 0; i < dominoes.length - 1; i++) {
      if (dominoes[i] > 0 && dominoes[i + 1] < 0) {
        dominoes.splice(i + 1, 1);
        collided = true;
      } else if (dominoes[i] < 0 && dominoes[i + 1] > 0) {
        collided = true;
      } else if (Math.abs(dominoes[i]) === Math.abs(dominoes[i + 1])) {
        dominoes.splice(i, 2);
        collided = true;
      }
    }
  }
  return dominoes;
};

// Example usage:
const dominoes = [3, -3, 2, -2, 1, -1];
console.log(dominoCollision(dominoes));
