//依赖那些模块
var bookStoreApp = angular.module('bookStoreApp', [
    'ngRoute', 'ngAnimate', 'bookStoreCtrls', 'bookStoreFilters',
    'bookStoreServices', 'bookStoreDirectives'
]);

//$routeProvider路由 根据地址不同展示不同界面
bookStoreApp.config(function($routeProvider) {
    $routeProvider.when('/hello', {
        templateUrl: 'tpls/hello.html',
        controller: 'HelloCtrl'
    }).when('/list',{
    	templateUrl:'tpls/bookList.html',
    	controller:'BookListCtrl'
    }).otherwise({
        redirectTo: '/hello'
    })
});

