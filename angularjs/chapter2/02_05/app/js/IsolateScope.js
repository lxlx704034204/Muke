var myModule = angular.module("MyModule", []);
myModule.directive("hello", function() {
    return {
        restrict: 'AE',
        //独立空间,指令互相独立,不影响
        scope:{},
        template: '<div><input type="text" ng-model="userName"/>{{userName}}</div>',
        replace: true
    }
});
