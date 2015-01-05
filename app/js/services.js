'use strict'

angular.module('angularFireChat.services', ["firebase"]);

angular.module('angularFireChat.services').service("messageService",
	[  			"$firebase",
		function($firebase) {
			var ref = new Firebase("https://crackling-torch-3186.firebaseio.com/messages");
			var messages = $firebase(ref).$asArray();

			this.getAll = function() {
				return messages;
			};

			this.add = function(item) {
				messages.$add(item);
			};
}]);
