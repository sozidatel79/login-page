React / PHP Custom API | Login Application
-------------------


In order to install Client
--------------------------------------
1. Be sure node.js is installed
2. Be sure npm is installed
3. Go to the client folder in console
4. Run "npm i" in command line
5. Run "npm start"
6. The app will be available on PORT: 3000

!!! NOTES !!!
--------------------------------------
1. All requests on client pointed to webbox.live domain
2. Change the base url by you needs in client/src/components/api/api.jsx file

Apache
--------------------------------------
1. Configure you virtual host run content from root folder(.htaccess will do the rest).
2. Be shure apache rewrite_mode is enabled and rewrite for folder ( /var/www ) is allowed in apache config file.

PHP
--------------------------------------
1. Be shure modules pdo_mysql AND pdo_oci enabled in PHP config flie

DB
--------------------------------------
1. DB name: login
2. Table name: users

![23-12-2022 20-58-59](https://user-images.githubusercontent.com/3818335/209394785-b93323a1-2d25-4556-8a5f-2af2a327b9b4.png)

3. SQL Dump
[users.zip](https://github.com/sozidatel79/login-page/files/10298674/users.zip)
