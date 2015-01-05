'use strict';

angular.module('angularFireChat',
	['ui.router',
	 'angularFireChat.controllers',
	 'angularFireChat.directives',
	 'angularFireChat.filters',
	 'angularFireChat.services'])

.value('version','1.0.1')

.config([
	        '$stateProvider', '$urlRouterProvider',
	function($stateProvider ,  $urlRouterProvider) {
		$urlRouterProvider.otherwise('/chat');
}]);
