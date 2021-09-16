const a = 1;
const b = 5;
const c = -4;
const d = -3;

var result = function(a, b, c, d) {
	if ((c < a && c < b && d < a && d < b) || (c > a && c > b && d > a && d > b)) return true;
	else return false;
};

result(a, b, c, d);

document.getElementById('app').innerHTML = result(a, b, c, d);
