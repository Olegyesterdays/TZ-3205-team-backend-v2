CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    number VARCHAR(20) NOT NULL
);

INSERT INTO users (email, number) VALUES
('jim@gmail.com', '221122'),
('jam@gmail.com', '830347'),
('john@gmail.com', '221122'),
('jams@gmail.com', '349425'),
('jams@gmail.com', '141424'),
('jill@gmail.com', '822287'),
('jill@gmail.com', '822286');
