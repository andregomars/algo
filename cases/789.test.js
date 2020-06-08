const { escapeGhosts } = require('./789');

test('should know if pacman can escape or not', () => {
  expect(escapeGhosts([[1, 0], [0, 3]], [0, 1])).toBeTruthy();
  expect(escapeGhosts([[1, 0]], [2, 0])).toBeFalsy();
  expect(escapeGhosts([[2, 0]], [1, 0])).toBeFalsy();
});