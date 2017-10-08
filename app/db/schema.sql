

CREATE DATABASE `newMoviesDb`;

USE `newMoviesDb`;

CREATE TABLE `movies` (

    `id` INTEGER(11) AUTO_INCREMENT NOT NULL,
    `movie_name` VARCHAR(120) NOT NULL,
    `watched` BOOLEAN DEFAULT false,
    `date` TIMESTAMP NOT NULL,

    PRIMARY KEY (`id`)
);