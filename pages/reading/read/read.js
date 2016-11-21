
app.controller('readCtrl',['$scope',function($scope){
		$scope.a=1;
	}])
$(document).ready(function(){
	$('.rTubiao0').on('click',function(){
		$('.rSet').show();
	})
	$('.rSet').on('click',function(){
		$('.rSet').hide();
	})
	$('.rTubiao1').on('click',function(){
		$('.rLight').show();
	})
	$('.rLight').on('click',function(){
		$('.rLight').hide();
	})
})