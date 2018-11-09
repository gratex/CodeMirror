var profile = (function() {
	var testResourceRe = /^code-mirror\/test\//;

	var COPY_ONLY_LIST = [
		"code-mirror/code-mirror.profile",
		"code-mirror/package.json"
	];

	var copyOnly = function(filename, mid) {
		return (COPY_ONLY_LIST.indexOf(mid) > -1) || !(/js$/.test(filename) || /css$/.test(filename));
	};

	var notAmdList = [
		"code-mirror/addon/mode/multiplex_test",
		"code-mirror/addon/runmode/runmode-standalone",
		"code-mirror/addon/runmode/runmode.node",
		"code-mirror/doc/activebookmark",
		"code-mirror/mode/clike/test",
		"code-mirror/mode/css/gss_test",
		"code-mirror/mode/css/less_test",
		"code-mirror/mode/css/scss_test",
		"code-mirror/mode/css/test",
		"code-mirror/mode/gfm/test",
		"code-mirror/mode/haml/test",
		"code-mirror/mode/javascript/test",
		"code-mirror/mode/markdown/test",
		"code-mirror/mode/mscgen/mscgen_test",
		"code-mirror/mode/mscgen/msgenny_test",
		"code-mirror/mode/mscgen/xu_test",
		"code-mirror/mode/php/test",
		"code-mirror/mode/ruby/test",
		"code-mirror/mode/rust/test",
		"code-mirror/mode/shell/test",
		"code-mirror/mode/slim/test",
		"code-mirror/mode/stex/test",
		"code-mirror/mode/textile/test",
		"code-mirror/mode/verilog/test",
		"code-mirror/mode/xml/test",
		"code-mirror/mode/xquery/test"
	];

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
