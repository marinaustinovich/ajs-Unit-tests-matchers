export default function sortHeroes(data) {
  const sortedData = [...data];
  return sortedData.sort((a, b) => b.health - a.health);
}
