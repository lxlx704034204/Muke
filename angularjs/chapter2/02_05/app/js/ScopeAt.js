var myModule = angular.module("MyModule", []);

myModule.controller('MyCtrl', ['$scope', function($scope){
	$scope.ctrlFlavor="百威";
}]);

myModule.directive("drink", function() {
    return {
    	restrict:'AE',
        scope:{
    	    //@ 把当前属性作为字符串来传递,等价于下面已经注释掉的link函数
        	flavor:'@'
        },
        template:"<div>{{flavor}}</div>"
        // ,
        // 指令与控制器的交互
        // link:function(scope,element,attrs){
        // 	scope.flavor=attrs.flavor;
        // }
    }
});


