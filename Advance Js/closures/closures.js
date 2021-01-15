function f() {
	var pi = 3.141;
	function getPi() {
		return pi;
	}
	return getPi;
}
console.log(f()());
//console.log(p);