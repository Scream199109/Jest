
const sumOfPositive = require('./sumOfPositive');
test('Expects sum of [1,2,3,4] = 10', () => {
	expect(sumOfPositive([1, 2, 3, 4])).toBe(10);
});
test('Expects sum of [1, -4, 7, 12] = 20', () => {
	expect(sumOfPositive([1, -4, 7, 12])).toBe(20);
});
test('Expects sum of [] = 0', () => {
	expect(sumOfPositive([])).toBe(0);
});
