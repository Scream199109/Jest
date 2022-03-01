const oppositeNumber = require('./oppositeNumber')
test('Expects -5 : 5', () => {
	expect(oppositeNumber(5)).toBe(-5)
});
test('Expects 1 : -1', () => {
	expect(oppositeNumber(1)).toBe(-1)
});
test('Expects -34 : 34', () => {
	expect(oppositeNumber(-34)).toBe(34)
});
