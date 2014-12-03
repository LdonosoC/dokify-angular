var app = angular.module('dokifyApp', []);




app.controller('CompanyCtrl', function ($scope) {
	var company = {};

	company.name 		= 'dokify';
	company.employees 	= [
		{name: 'pepe', vat: '1234'}
	];

	$scope.company = company;
});