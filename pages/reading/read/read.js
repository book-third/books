
app.controller('readCtrl',['$scope',function($scope){
		$scope.a=1;
}])
//设置
app.directive('chose',[
	function(){
		return{
			restrict:'A',
			replace:true,			
			template:'<a href="#"><span class="iconfont">&#xe603;</span><span>设置</span></a>',
			link:function($scope,el){
				$(el).on('click',function(){
						$('.rSet').css('display','block');
						return false;
					})
					$('.rSet').on('click',false);
					$(document).on('click',function(){
						$('.rSet').css('display','none');
					})
			}
		}
	}
])
//亮度
app.directive('choseTwo',[
	function(){
		return{
			restrict:'A',
			replace:true,			
			template:'<a href="#"><span class="iconfont">&#xe643;</span><span>亮度</span></a>',
			link:function($scope,el){
				$(el).on('click',function(){
						$('.rLight').css('display','block');
						return false;
					})
					$('.rLight').on('click',false);
					$(document).on('click',function(){
						$('.rLight').css('display','none');
					})
			}
		}
	}
])
