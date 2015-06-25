angular.module('mapp', ['ionic'])
.controller('apCtrl', function($scope, $ionicActionSheet,$http) {
	$scope.showActionsheet = function() {
		$ionicActionSheet.show({
			titleText: '喜欢这个视频',
			buttons: [
				{text:'加入我的记录'},
				{text:'加入我的收藏'}
			],
			cancelText:'取消',
			buttonClicked:function(index){
				console.log(index);
				alert(index)
			}
		});
	}
});