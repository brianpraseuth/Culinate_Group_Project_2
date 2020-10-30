DROP DATABASE IF EXISTS recipes_db;

CREATE DATABASE recipes_db;
USE recipes_db;

CREATE TABLE recipes
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
    recipeImage TEXT,
	instructions TEXT,
	PRIMARY KEY (id)
);
