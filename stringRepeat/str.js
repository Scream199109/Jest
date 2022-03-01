const repeatStr = (n, str) => {
	let arr = [];
	for (let i = 0; i < n; i++) {
		arr.push(str)
	}
	return arr.join('')
}

module.exports = repeatStr;
