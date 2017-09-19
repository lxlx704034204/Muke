var myModule = angular.module("MyModule", []);
myModule.directive("hello", function() {
    return {
        //匹配模式
        //指令使用方式
        //A:属性
        //E:元素
        //C:样式
        //M:注释
        restrict: 'AEMC',
        //模板
        template: '<div>Hi everyone!</div>',
        replace: true
    }
});


