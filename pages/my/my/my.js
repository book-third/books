app.controller("myCtrl",["$scope",function($scope){
	$scope.aa=1;
}])
app.directive('sex',[function(){
	return{
				restrict:'A',
				replace:true,
				template:'<div class="set-list-right iconfont">&#xe662;</div>',
				
				link:function($scope,el){
					var drop=$('.xuanxingb');
					console.log(drop);
					$(el).on('click',function(){
						drop.css('display','block');
						$('.tc-profile-bot').css('display','block');
						return false;
						console.log(1);
					})
					drop.on('click',false);
					$(document).on('click',function(){
						drop.css('display','none');
						$('.tc-profile-bot').css('display','none');
					})
				}
			}
}])
app.directive('toux',[function(){
	return{
				restrict:'A',
				replace:true,
				template:'<div class="set-list-right"><a href="" class="iconfont">&#xe662;</a></div>',
				
				link:function($scope,el){
					var drop2=$('.touxi');
					console.log(drop2);
					$(el).on('click',function(){
						drop2.css('display','block');
						$('.tc-profile-bot').css('display','block');
						return false;
						console.log(1);
					})
					drop2.on('click',false);
					$(document).on('click',function(){
						drop2.css('display','none');
						$('.tc-profile-bot').css('display','none');
					})
				}
			}
}])
