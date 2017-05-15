package com.auth0.samples.nodejsmaven;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TaskController {

	@Autowired
	private TaskRepository taskRepository;

	@PostMapping(path = "/api/task")
	public void addTask(@RequestBody Task task) {
		taskRepository.save(task);
	}

	@GetMapping(path = "/api/task/{id}")
	public Task getTask(@PathVariable long id) {
		return taskRepository.findOne(id);
	}

	@DeleteMapping(path = "/api/task/{id}")
	public void deleteTask(@PathVariable long id) {
		taskRepository.delete(id);
	}

	@GetMapping(path = "/api/tasks")
	public List<Task> getTasks() {
		return taskRepository.findAll();
	}
}
