var myModule = angular.module("MyModule", []);

myModule.directive("superman", function() {
    return {
        //创建独立作用域
        scope: {},
        restrict: 'AE',

        //controller(指令) 暴露指令方法,给外界调用
        controller: function($scope) {
            $scope.abilities = [];
            this.addStrength = function() {
                $scope.abilities.push("strength");
            };
            this.addSpeed = function() {
                $scope.abilities.push("speed");
            };
            this.addLight = function() {
                $scope.abilities.push("light");
            };
        },

        //link()内部时间,绑定数据和事件,操作DOM,
        link: function(scope, element, attrs) {
            //bootstrap
            element.addClass('btn btn-primary');
            element.bind("mouseenter", function() {
                console.log(scope.abilities);
            });
        }
    }
});

myModule.directive("strength", function() {
    return {
        //require 依赖于。。。
        require: '^superman',
        //supermanCtrl 写了require后能够注入,目的是能调用controller()暴露的方法
        link: function(scope, element, attrs, supermanCtrl) {
            supermanCtrl.addStrength();
        }
    }
});

myModule.directive("speed", function() {
    return {
        require: '^superman',
        link: function(scope, element, attrs, supermanCtrl) {
            supermanCtrl.addSpeed();
        }
    }
});

myModule.directive("light", function() {
    return {
        require: '^superman',
        link: function(scope, element, attrs, supermanCtrl) {
            supermanCtrl.addLight();
        }
    }
});