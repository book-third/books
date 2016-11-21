app.directive('lunbo',[
	function(){
		return{
			restrict:'E',
			replace:true,
			scope:{
				pics:'='
			},
			templateUrl:'component/lunbo/lunbo.html',
			link:function($scope,el){
//				var chang=$(el).find('.chang')
			}
		}
	}
])
