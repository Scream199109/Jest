const repeatStr = require('./str')

test('Expects repeatStr(6, "I") : IIIIII', () => {
	expect(repeatStr(6, 'I')).toBe('IIIIII')
})
test('Expects repeatStr(5, "Hello") : HelloHelloHelloHelloHello', () => {
	expect(repeatStr(5, "Hello")).toBe("HelloHelloHelloHelloHello")
})
