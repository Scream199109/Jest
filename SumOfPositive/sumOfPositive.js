

function sumOfPositive(arr) {

	if (arr.length == 0) {
		return 0
	}
	return arr.filter((item) => item >= 0).reduce((acc, num) => acc + num)
}

module.exports = sumOfPositive;
