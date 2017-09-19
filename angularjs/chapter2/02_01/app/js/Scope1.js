//$rootScope根作用域
function GreetCtrl($scope, $rootScope) {
    $scope.name = 'World';
    $rootScope.department = 'Angular';
}

function ListCtrl($scope) {
    $scope.names = ['Igor', 'Misko', 'Vojta'];
}

