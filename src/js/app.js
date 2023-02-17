export default function sortHeroes(data) {
  return data.sort((a, b) => {
    if (a.health < b.health) {
      return 1;
    }
    if (a.health > b.health) {
      return -1;
    }
    // a должно быть равным b
    return 0;
  });
}
