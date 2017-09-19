var myModule = angular.module("MyModule", []);
myModule.controller('MyCtrl', ['$scope', function($scope){
	$scope.ctrlFlavor="百威";
}]);

myModule.directive("drink", function() {
    return {
    	restrict:'AE',
        scope:{
    	    //与scope中属性进行双向绑定
        	flavor:'='
        },
        template:'<input type="text" ng-model="flavor"/>'
    }
});


