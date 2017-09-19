var myModule = angular.module("MyModule", []);

//run()注射器加载完所有模块时，此方法执行一次
//$templateCache 模板缓存起来,方便多个指令使用他
myModule.run(function($templateCache){
	$templateCache.put("hello.html","<div>Hello everyone</div>");
});

myModule.directive("hello", function($templateCache) {
    return {
        restrict: 'AECM',
        //使用templatecache方法的缓存
        template: $templateCache.get("hello.html"),
        //
        replace: true
    }
});

