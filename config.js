app.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/',{
			templateUrl:'pages/login/denglu/denglu.html',
			controller:'dengluCtrl'
		}).when('/xgmm',{
			templateUrl:'pages/login/xgmm/xgmm.html',
			controller:'xgmmCtrl'
		}).when('/zhmm',{
			templateUrl:'pages/login/zhmm/zhmm.html',
			controller:'zhmmCtrl'
		}).when('/zuche',{
			templateUrl:'pages/login/zuche/zuche.html',
			controller:'zucheCtrl'
		}).when('/read',{
			templateUrl:'pages/reading/read/read.html',
			controller:'readCtrl'
		}).when('/mulu',{
			templateUrl:'pages/reading/mulu/mulu.html',
			controller:'muluCtrl'
		}).when('/shuqian',{
			templateUrl:'pages/reading/shuqian/shuqian.html',
			controller:'shuqianCtrl'
		}).when('/biji',{
			templateUrl:'pages/reading/biji/biji.html',
			controller:'bijiCtrl'
		}).when('/readDetail',{
			templateUrl:'pages/reading/readDetail/readDetail.html',
			controller:'readDetailCtrl'
		}).when('/mynote',{
			templateUrl:'pages/reading/mynote/mynote.html',
			controller:'mynoteCtrl'
		}).when('/binding',{
			templateUrl:'pages/my/binding/binding.html',
			controller:'bindingCtrl'
		}).when('/myself',{
			templateUrl:'pages/my/myself/myself.html',
			controller:'myselfCtrl'
		}).when('/gengxin',{
			templateUrl:'pages/my/gengxin/gengxin.html',
			controller:'myselfCtrl'
		}).when('/shezhi',{
			templateUrl:'pages/my/shezhi/shezhi.html',
			controller:'shezhiCtrl'
		}).when('/copyright',{
			templateUrl:'pages/my/copyright/copyright.html',
			controller:'copyrightCtrl'
		}).when('/like',{
			templateUrl:'pages/my/like/like.html',
			controller:'likeCtrl'
		}).when('/my',{
			templateUrl:'pages/my/my/my.html',
			controller:'myCtrl'
		}).when('/myprofile',{
			templateUrl:'pages/my/myprofile/myprofile.html',
			controller:'myprofileCtrl'
		}).when('/setpassword',{
			templateUrl:'pages/my/setpassword/setpassword.html',
			controller:'setpasswordCtrl'
		}).when('/yijian',{
			templateUrl:'pages/my/yijian/yijian.html',
			controller:'yijianCtrl'
		}).when("/category",{
			templateUrl:"pages/bookcity/category/category.html",
			controller:"categoryCtrl"
		}).when("/bookname",{
			templateUrl:"pages/bookcity/bookname/bookname.html",
			controller:"booknameCtrl"
		}).when("/booklist",{
			templateUrl:"pages/bookcity/booklist/booklist.html",
			controller:"booklistCtrl"
		}).when("/bookshelf",{
			templateUrl:"pages/bookjia/bookshelf/bookshelf.html",
			controller:"bookshelfCtrl"
<<<<<<< HEAD
		}).when('/Bookmark',{//贾震宇
			templateUrl:'pages/Review/Bookmark/Bookmark.hrml',
			controller:'BookmarkCtrl'
		}).when('/BookReview',{
			templateUrl:'pages/Review/BookReview/BookReview.hrml',
			controller:'BookReviewCtrl'			
		}).when('/Five-star',{
			templateUrl:'pages/Review/Five-star/Five-star.hrml',
			controller:'Five-starCtrl'				
		}).when('/Five-star-failure',{
			templateUrl:'pages/Review/Five-star-failure/Five-star-failure.hrml',
			controller:'Five-star-failureCtrl'				
		}).when('/management',{
			templateUrl:'pages/Review/management/management.hrml',
			controller:'managementCtrl'				
		}).when('/pageMain',{
			templateUrl:'pages/Review/pageMain/pageMain.hrml',
			controller:'pageMainCtrl'				
=======
		}).when("/content",{
			templateUrl:"pages/bookjia/content/content.html",
			controller:"contentCtrl"
		}).when("/search",{
			templateUrl:"pages/bookjia/search/search.html",
			controller:"searchCtrl"
		}).when("/sort",{
			templateUrl:"pages/bookjia/sort/sort.html",
			controller:"sortCtrl"
>>>>>>> 23885c31bef4799f2a3329dfc0bc92e33b4def69
		})
		
		
		
		
		
	}	
])
