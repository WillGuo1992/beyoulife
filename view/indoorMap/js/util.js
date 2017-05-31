Array.prototype.indexOf = function(elem) {
	for (var i = 0; i < this.length; i++) {
		if (this[i] == elem) {
			return i;
		}
	}
	return -1;
};