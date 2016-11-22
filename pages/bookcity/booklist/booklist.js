app.controller("booklistCtrl", ["$scope", function($scope) {

}])
app.directive("maxb", function() {
	return {
		restrict: "E",
		replace: true,
		templateUrl: "pages/bookcity/booklist/booklist.html",
		link: function($scope, el) {

		}
	}
})