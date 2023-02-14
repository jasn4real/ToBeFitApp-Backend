DROP DATABASE IF EXISTS exercises_log;
CREATE DATABASE exercises_log; 

\c exercises_log;

CREATE TABLE exercises (
  id SERIAL PRIMARY KEY,
  name         VARCHAR(255) NOT NULL,
  type         TEXT NOT NULL,
  muscle       TEXT NOT NULL,
  equipment    TEXT NOT NULL,
  difficulty   TEXT NOT NULL,
  instructions TEXT NOT NULL
);