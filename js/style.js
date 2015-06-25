angular.module('mapp', ['ionic'])
.controller('apCtrl', function($scope, $ionicActionSheet,$http) {
		/**
	 *  下拉刷新
	  $scope.doRefresh = function() {
	    $http.get('/new-items')
	     .success(function(newItems) {
	       $scope.items = newItems;
	     })
	     .finally(function() {
	       // Stop the ion-refresher from spinning
	       $scope.$broadcast('scroll.refreshComplete');
	     });
	  };
	  */
});