var myServiceApp = angular.module("MyServiceApp", []);
myServiceApp.factory('userListService', ['$http',
    function($http) {
        var doRequest = function(username, path) {
            return $http({
                method: 'GET',
                url: 'users.json'
            });
        };
        return {
            userList: function(username) {
                return doRequest(username, 'userList');
            }
        };
    }
]);

myServiceApp.controller('ServiceController', ['$scope', '$timeout', 'userListService',
    function($scope, $timeout, userListService) {
        var timeout;
        //$watch 监控模型变化
        $scope.$watch('username', function(newUserName) {
            if (newUserName) {
                if (timeout) {
                    $timeout.cancel(timeout);
                }
                //防止抖动
                timeout = $timeout(function() {
                    userListService.userList(newUserName)
                        .success(function(data, status) {
                            $scope.users = data;
                        });
                }, 350);
            }
        });
    }
]);

//...