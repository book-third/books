app.config([
	'$routeProvider',
	function($routeProvider){
		$routeProvider.when('/',{
			templateUrl:'pages/main/index/index.html',
			controller:'indexCtrl'
		}).when('/book',{
			templateUrl:'pages/main/book/book.html',
			controller:'bookCtrl'
		})
	}
	
	
	
	
	
	
])
