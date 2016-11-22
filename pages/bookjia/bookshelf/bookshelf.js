app.controller("bookshelfCtrl", ["$scope", function($scope) {

}])
app.directive("box", function() {
	return {
		restrict: "E",
		replace: true,
		templateUrl: "pages/bookjia/My Bookshelf.html",
		link: function($scope, el) {

		}
	}
})
