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

<<<<<<< HEAD
	company.name 		= 'dokify';
	company.employees 	= [
		{name: 'pepe', surname:"lopez perez", vat: '1234'},
		{name: 'luis', surname:"perez fernandez",vat: '5678'},
		{name: 'pedro', surname:"garcia gonzalez",vat: '9234'}
	];

	$scope.company = company;
});
=======
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
>>>>>>> b29fa11697ea6175a6c25352b935a9364b80f53c
