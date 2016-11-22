app.controller("shezhiCtrl",["$scope",function($scope){
	$scope.aa=1;
}])
app.directive('clockes',[function(){
	return{
				restrict:'A',
				replace:true,
				template:"<li><b class='iconfont'>&#xe611;</b><a href=''><h6>阅读休息提醒</h6><span class='eng'>READ THE REST REMINDERS</span></a><a href='' class='you iconfont'>&#xe662;</a><p>关闭</p></li>",
				
				link:function($scope,el){
					var drop=$('.clockss');
					console.log(drop);
					$(el).on('click',function(){
						drop.css('display','block');
						return false;
					})
					drop.on('click',false);
					$(document).on('click',function(){
						drop.css('display','none');
					})
				}
			}
}])
app.directive('clearhc',[function(){
	return{
				restrict:'A',
				replace:true,
				template:"<a href='' class='you iconfont'>&#xe662;</a>",
				
				link:function($scope,el){
					var drop2=$('.tc-profile2');
					console.log(drop2);
					$(el).on('click',function(){
						drop2.css('display','block');
						return false;
					})
					drop2.on('click',false);
					$(document).on('click',function(){
						drop2.css('display','none');
					})
				}
			}
}])