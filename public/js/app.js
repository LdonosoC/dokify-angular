var app = angular.module('dokifyApp', [
	'ngRoute',
	'appControllers'
]);

app.run(function ($rootScope) {
	$rootScope.$on('$routeChangeStart', function () {
		console.log('route change start');
	});

	$rootScope.$on('$routeChangeError', function () {
		console.log('route change error');
	});

	$rootScope.$on('$routeChangeSuccess', function () {
		console.log('route change success');
	});

	console.log('listo!');
});

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/company', {
			templateUrl: '/html/company.html',
			controller: 'CompanyCtrl'
		}).
		when('/employee', {
			templateUrl: '/html/employee.html',
			controller: 'EmployeeCtrl',
			resolve: {
				employeePromise: function ($http) {
					return $http.get('/employee.json');
				}
			}
		}).
		otherwise({
			redirectTo: '/company'
		});
}]);