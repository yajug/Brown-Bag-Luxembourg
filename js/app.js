angular
    .module('baggercatApp', ['ui.router'])

    .controller('baggerListCtrl', function ($scope, $http) {
        $http.get('js/baggers.json')
            .success(function (data) {
                $scope.baggers = data;
            }, function () {
                console.debug('Could not find JSON')
            });

        $scope.orderProp = 'name';
    });