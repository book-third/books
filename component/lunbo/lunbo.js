app.directive("lunbo", function() {
	return {
		restrict: "E",
		replace: true,
		templateUrl: "components/lunbo/lunbo.html",
		scope: {
			imgs: "=",
			time: "="
		},
		link: function($scope, el) {
			var n = 0;
			var next = 0;
			function lunbo() {
				next = n + 1;
				if(next >= $(el).find(".lunbo").length) {
					next = 0;
				}
				$(el).find(".lunbo").eq(n).css("opacity", "0");
				$(".circles").eq(n).removeClass("yanse");
				$(el).find(".lunbo").eq(next).css("opacity", "1");
				$(".circles").eq(next).addClass("yanse");
				n = next;
			}
			var t=setInterval(lunbo, $scope.time);
		}
	}
})