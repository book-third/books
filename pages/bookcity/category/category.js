//$(document).ready(function(){
//	$(".navs").on("click",function(){
//		var index=$(this).index();
//		$(".navs").find(".navss").removeClass("active");
//		$(this).find(".navss").addClass("active");
//		$(".xuan").css({"opacity":"0"})
//		$(".xuan").eq(index).css({"opacity":"1"})
//	})
//	var n=0;
//	var next=0;
//	function lunbo(){
//		next=n+1;
//		if(next>=$(".lunbo").length){
//			next=0;
//		}
//		$(".lunbo").eq(n).css("opacity","0");
//		$(".circles").eq(n).removeClass("yanse");
//		$(".lunbo").eq(next).css("opacity","1");
//		$(".circles").eq(next).addClass("yanse");
//		n=next
//	}
//	var t=setInterval(lunbo,1500)
//		
//	
//})
app.controller("categoryCtrl",["$scope",function($scope){
	
}])
app.directive("max", function() {
	return {
		restrict: "E",
		replace: true,
		templateUrl: "pages/bookcity/category/category.html",
		link: function($scope, el) {
			$(".navs").on("touchend", function() {
				var index = $(this).index();
				$(".navs").find(".navss").removeClass("active");
				$(this).find(".navss").addClass("active");
				$(".xuan").css({
					"display":"none"
				})
				$(".xuan").eq(index).css({
					"display":"block"
				})
			})
			var n = 0;
			var next = 0;
			function lunbo() {
				next = n + 1;
				if(next >= $(".lunbo").length) {
					next = 0;
				}
				$(".lunbo").eq(n).css("opacity", "0");
				$(".circles").eq(n).removeClass("yanse");
				$(".lunbo").eq(next).css("opacity", "1");
				$(".circles").eq(next).addClass("yanse");
				n = next;
			}
			var t=setInterval(lunbo, 1500);
		}
	}
})