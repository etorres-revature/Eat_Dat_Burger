-- dropping the eatDemBurgersDB if it already exists
DROP DATABASE IF EXISTS eatDemBurgersDB;

-- creating the the eatDemBurgersDB
CREATE DATABASE eatDemBurgersDB;

-- using the eatDemBurgersDB
USE eatDemBurgersDB;

-- creating a dem_burgres table to hold burgers
CREATE TABLE dem_burgers (
    -- table schema for table
    -- id integer, can't be null, and auto increments on creation
    id INT NOT NULL AUTO_INCREMENT,
    -- burger name as a string, not null constraint
    burger_name VARCHAR(128) NOT NULL,
    -- devoured boolean, not null constraint, default value set to "false"
    devoured BOOLEAN NOT NULL DEFAULT FALSE,
    -- timestamp for the creation of an entry, not null constraint, defaults to current time
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    -- setting id column as the primary key for this table
    PRIMARY KEY (id)
);
