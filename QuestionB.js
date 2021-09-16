const a = '17.15.666';
const b = '17.15.666.6';

const compareResult = function(a, b) {
	const arrA = a.split('.');
	const arrB = b.split('.');
	var n = Math.max(arrA.length, arrB.length);
	for (let i = 0; i < n; i++) {
		if (arrA[i] > arrB[i] || arrB[i] == null) return 'a > b';
		if (arrB[i] > arrA[i] || arrA[i] == null) return 'b > a';
	}
	return 'a = b';
};

document.getElementById('app').innerHTML = compareResult(a