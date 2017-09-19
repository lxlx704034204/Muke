var myModule = angular.module("MyModule", []);

myModule.controller('MyCtrl', ['$scope', function ($scope) {
    $scope.loadData = function () {
        console.log("加载数据中...");
    }
}]);

myModule.controller('MyCtrl2', ['$scope', function ($scope) {
    $scope.loadData2 = function () {
        console.log("加载数据中...22222");
    }
}]);

myModule.directive("loader", function () {
    return {
        restrict: "AE",
        //link操作DOM
        link: function (scope, element, attrs) {
            element.bind('mouseenter', function (event) {
                //1 调用controller里的函数
                // scope.loadData();

                //2 调用controller里的函数
                // scope.$apply("loadData()");

                // attrs属性，html标签里的属性处理
                // 指令和控制器交互
                // 注意这里的坑，howToLoad属性会被转换成小写的howtoload
                // 指令的复用
                // $apply刷新绑定的值,脏值检测
                scope.$apply(attrs.howtoload);
            });
        }
    }
});
