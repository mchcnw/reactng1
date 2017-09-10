import angular from 'angular';
import './ngroot.component.js';


angular
.module('single-spa-app')
.config(($stateProvider, $locationProvider) => {
	$locationProvider.html5Mode({
		enabled: false,
		requireBase: false,
	});

	$stateProvider
	.state('ngroot', {
		url: '/app1',
		template: '<ngroot />',
	})
});
