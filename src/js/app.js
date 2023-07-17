export default function sortHeroes(data) {
  return data.sort((a, b) => b.health - a.health);
}
