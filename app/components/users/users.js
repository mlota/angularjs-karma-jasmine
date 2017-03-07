(function() {
	'use strict';

	angular
		.module('components.users', [])
		.controller('UsersController', UsersController)
		.config(UsersControllerConfig);

	function UsersController(Users) {
		var vm = this;

		// Call all() and set it to users
		vm.users = Users.all();
	}

	function UsersControllerConfig($stateProvider) {
		$stateProvider
			.state('users', {
				url: '/users',
				templateUrl: 'components/users/users.html',
				controller: 'UsersController as uc'
			});
	}
})();