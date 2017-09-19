var myModule = angular.module("MyModule", []);
myModule.directive("hello", function() {
    return {
        restrict: 'AECM',
        //转到特定的页面
        templateUrl: 'hello.html',
        replace: true
    }
});