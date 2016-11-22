app.controller("myprofileCtrl",["$scope",function($scope){
	$scope.aa=1;
}])
app.directive('selecter',[function(){
	return{
				restrict:'A',
				replace:true,
				template:"<div class='file-left'><div class='file-left-top'>· · 系统信息 · · </div><div class='file-left-bottom'>INFORMATION</div></div>",
				
				link:function($scope,el){
					var tuijian=$('.tuijian');
					var right=$('.file-right');
					$(el).on('click',function(){
						$(el).addClass('backyanse');
						right.removeClass('backyanse');
						tuijian.css('display','block');
						$('.mine-info').css('display','none');
						return false;
					})
				
				}
			}
}])
app.directive('selecte',[function(){
	return{
				restrict:'A',
				replace:true,
				template:"<div class='file-right'><div class='file-left-top'>· · 我的信息 · · </div><div class='file-left-bottom'>MY INFORMATION</div></div>",
				
				link:function($scope,el){
					var mine=$('.mine-info');
					var left=$('.file-left');
					$(el).on('click',function(){
						$(el).addClass('backyanse');
						left.removeClass('backyanse');
						mine.css('display','block');
						$('.tuijian').css('display','none');
						return false;
						console.log(1);
					})
				
				}
			}
}])