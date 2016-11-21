app.controller('bijiCtrl',['$scope',function($scope){
	$scope.a='sss';
}])
//弹出
app.directive('zhezhao',[
	function(){
		return{
			restrict:'A',
			replace:true,			
			template:'<div>·查看全部·</div>',
			link:function($scope,el){
				$(el).on('click',function(){
					console.log($('#box .zz'))
						$('#box .zz').css('display','block');
//						return false;
					})
//					$('.box .zz').on('click',false);
					$('#box .zz').on('click',function(){
						$('#box .zz').css('display','none');
					})
			}
		}
	}
])