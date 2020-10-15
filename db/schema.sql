DROP DATABASE IF EXISTS eatDemBurgersDB;

CREATE DATABASE eatDemBurgersDB;

USE eatDemBurgersDB;

CREATE TABLE dem_burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(128) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT FALSE,
    PRIMARY KEY (id)
);