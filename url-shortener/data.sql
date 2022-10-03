CREATE TABLE links (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
url TEXT(300) NOT NULL,
title VARCHAR(8)
);
INSERT INTO links (`url`, `title`)
    VALUES ('https://www.google.com', 'Google');
    
/* Import this file to your database created for url shortner. */
