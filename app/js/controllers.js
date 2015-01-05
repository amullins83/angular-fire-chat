'use strict'

angular.module('angularFireChat.controllers', ["ui", "ui.router", "angularFireChat.services"]);

angular.module('angularFireChat.controllers')

.config([   '$stateProvider',
	function($stateProvider) {
		$stateProvider.state("chat", {
			url: "/chat",
			templateUrl: "views/chat.html",
			controller: "ChatController"
		});
}])

.controller('ChatController',
           ["$scope", "messageService",
	function($scope ,  messageService) {
		$scope.user = "";
		$scope.text = "";
		$scope.messages = messageService.getAll();

		$scope.addMessage = function() {
			var user = $scope.user || "anonymous";
			if ($scope.text != "") {
				messageService.add({user: user, text: $scope.text});
			}
			
			$scope.text = "";
		};
}]);
