var myModule = angular.module("MyModule", []);
myModule.directive("hello", function() {
    return {
    	restrict:"AE",
        //提示ag,将内容放在哪里
    	transclude:true,
        //模板内容放置在div ng-transclude里面,为了实现标签嵌套
    	template:"<div>Hello everyone!<div ng-transclude></div></div>",

		// compile: function () {
		//		编译阶段自动运行调用内部的complie方法,建议不要自己自定义
		// },
		//
		// link: function () {
		//		在这里操作dom
		// }
    }
});