(function(){
	"use strict";
	angular
	.module('app', ['ngMaterial'])
	.config(function ($mdThemingProvider) {
		$mdThemingProvider
		.theme('default')
		.primaryPalette('indigo')
		.accentPalette('pink')
		.warnPalette('red')
		.backgroundPalette('deep-purple');
	});
})();
