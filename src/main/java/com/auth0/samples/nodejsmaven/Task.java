package com.auth0.samples.nodejsmaven;

import lombok.EqualsAndHashCode;
import lombok.Getter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter
@EqualsAndHashCode
public class Task {

	@Id
	@GeneratedValue
	private long id;

	private String title;
	private String description;

	protected Task() {
	}
}
