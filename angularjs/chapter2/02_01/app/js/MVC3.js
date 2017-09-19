//controller 业务逻辑处理
function CommonController($scope){
	$scope.commonFn=function(){
        //公共的东西写成service
    	alert("这里是公共功能！");
    };
}

function Controller1($scope) {
    $scope.greeting = {
        text: 'Hello1'
    };
    $scope.test1=function(){
    	alert("test1");
    };
}

function Controller2($scope) {
    $scope.greeting = {
        text: 'Hello2'
    };
    $scope.test2=function(){
    	alert("test2");
    }
}