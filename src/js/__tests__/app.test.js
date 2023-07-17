import sortHeroes from '../app';

test.each([
  ['positive', [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ], [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ],
  ],
  ['negative', [
    { name: 'мечник', health: -10 },
    { name: 'маг', health: -100 },
    { name: 'лучник', health: -80 },
  ], [
    { name: 'мечник', health: -10 },
    { name: 'лучник', health: -80 },
    { name: 'маг', health: -100 },
  ],
  ],
  ['same', [
    { name: 'мечник', health: 100 },
    { name: 'маг', health: 80 },
    { name: 'лучник', health: 20 },
  ], [
    { name: 'мечник', health: 100 },
    { name: 'маг', health: 80 },
    { name: 'лучник', health: 20 },
  ],
  ],
  ['all same', [
    { name: 'мечник', health: 100 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 100 },
  ], [
    { name: 'мечник', health: 100 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 100 },
  ],
  ],
])(('should sort from highest to lowest for %s health numbers'), (level, data, expected) => {
  const result = sortHeroes(data);

  expect(result).toEqual(expected);
});
