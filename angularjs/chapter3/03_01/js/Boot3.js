/**
 * 第一个APP
 * @type {[type]}
 */
var myModule1 = angular.module("MyModule1", []);
myModule1.controller('MyCtrl', ['$scope',
    function($scope) {
        $scope.gameName = "大漠吃豆子1";
    }
]);
// angular.element(document).ready(function() {
//     angular.bootstrap(app1, ['MyModule1']);
// });


/**
 * 第二个APP要手动启动
 * APP不能嵌套
 * APP最好只有一个
 * @type {[type]}
 */
var myModule2 = angular.module("MyModule2", []);
myModule2.controller('MyCtrl', ['$scope',
    function($scope) {
        $scope.gameName = "大漠吃豆子2";
    }
]);
angular.element(document).ready(function() {
    angular.bootstrap(app2, ['MyModule2']);
});
