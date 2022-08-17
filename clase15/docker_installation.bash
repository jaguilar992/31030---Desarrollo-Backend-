docker run --detach --name mariadb_server \
-p 3306:3306 \
--env MARIADB_USER=antonio \
--env MARIADB_PASSWORD=password1234 \
--env MARIADB_ROOT_PASSWORD=root_password \
 mariadb:latest