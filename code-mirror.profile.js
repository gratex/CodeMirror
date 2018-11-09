var profile = (function() {
	function copyOnly(filename, mid) {
		return true;
	}
	function amd(filename, mid) {
		return false;
	}

	return {
		resourceTags : {
			amd : amd,
			copyOnly : copyOnly
		}
	};
})();
