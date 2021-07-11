CREATE DATABASE jwtpern;

CREATE TABLE users(
  user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(), -- CREATE EXTENSION "uuid-ossp";
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL,
  user_password VARCHAR(255) NOT NULL
);

INSERT INTO users (user_name, user_email, user_password)
VALUES ('john', 'john@example.com', 'password');