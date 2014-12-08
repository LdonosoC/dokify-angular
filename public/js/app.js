var app = angular.module('dokifyApp', []);




app.controller('CompanyCtrl', function ($scope) {
	var company = {};

	company.name 		= 'dokify';
	company.employees 	= [
		{name: 'pepe', surname:"lopez perez", vat: '1234'},
		{name: 'luis', surname:"perez fernandez",vat: '5678'},
		{name: 'pedro', surname:"garcia gonzalez",vat: '9234'}
	];

	$scope.company = company;
});