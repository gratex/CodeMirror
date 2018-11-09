var profile = (function() {
	var testResourceRe = /^code-mirror\/test\//;

	var COPY_ONLY_LIST = [
		"code-mirror/code-mirror.profile",
		"code-mirror/package.json"
	];

	var copyOnly = function(filename, mid) {
		return (COPY_ONLY_LIST.indexOf(mid) > -1) || !(/js$/.test(filename) || /css$/.test(filename));
	};

	var notAmdList = [];

	var ignorePatternList = [];

	return {
		resourceTags : {
			test : function(filename, mid) {
				return testResourceRe.test(mid);
			},

			copyOnly : function(filename, mid) {
				return copyOnly(filename, mid);
			},

			ignore : function(filename, mid) {
				for (var i = 0, l = ignorePatternList.length; i < l; i++) {
					if (mid.indexOf(ignorePatternList[i]) > -1) {
						return true;
					}
				}
				return false;
			},

			amd : function(filename, mid) {
				if (notAmdList.indexOf(mid) > -1) {
					return false;
				}
				return /js$/.test(filename) && !copyOnly(filename, mid);
			}
		}
	};
})();
