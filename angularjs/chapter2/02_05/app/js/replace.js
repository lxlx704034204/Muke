var myModule = angular.module("MyModule", []);
myModule.directive("hello", function() {
    return {
    	restrict:"AE",
    	template:"<div>Hello everyone!</div>",
        //替换掉嵌套内容
    	replace:true
    } 
});
