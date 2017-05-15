(function(angular) {
	var app = angular.module('app');

	var mainController = function ($http) {
		var ctrl = this;

		ctrl.tasks = [];
		ctrl.task = {};

		loadTasks();

		ctrl.addTask = function() {
			$http.post('/api/task', ctrl.task).then(function() {
				alert('Task added');
				ctrl.task = {};
				loadTasks();
			}, function(error) {
				alert(error);
			});
		};

		ctrl.removeTask = function(task) {
			$http.delete('/api/task/' + task.id).then(function() {
				alert('Task removed');
				loadTasks();
			}, function(error) {
				alert(error);
			});
		};

		function loadTasks() {
			$http.get('/api/tasks').then(function(response) {
				ctrl.tasks = response.data;
			}, function(error) {
				alert(error);
			});
		}
	};
	mainController.$inject = ['$http'];
	app.controller('mainController', mainController);
}(angular));
