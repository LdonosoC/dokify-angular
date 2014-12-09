var appControllers = angular.module('appControllers', []);



function CompanyCtrl ($scope) {
	console.log('CompanyCtrl');
	$scope.module = 'company';
};

appControllers.controller('CompanyCtrl', CompanyCtrl);




function EmployeeCtrl ($scope, $http, employeePromise) {
	console.log('EmployeeCtrl', employeePromise.data);
	$scope.employee = employeePromise.data;

	$http.get('/checkins.json').success(function (data) {
		console.log('checkins..');
		$scope.checkins = data;
	});
};

appControllers.controller('EmployeeCtrl', EmployeeCtrl);