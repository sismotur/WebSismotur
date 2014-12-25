Web Sismotur (staging)
============================

THANKS TO: Express JS Static Boilerplate

To launch: 
Commit everything you need in git before launching

$ heroku login

Assume you are working in the development branch in git
We always push to master branch of heroku

$ git push heroku staging:master

Connect to URL: https://test-smt.herokuapp.com/
or
$ heroku open


==================================================
EXPRESS BOILERPLATE - THANKS TO MICHAEL LANCASTER
==================================================

http://www.bymichaellancaster.com/blog/deploying-nodejs-on-heroku-cloud/

Express.js 4.0 Static Boilerplate is a simple Node.js Server using static files and directories for quick quality development and/or production.

Features
-----------
- Static directory and files
- Server watch for changes (Nodemon)
- Grunt JS (Files Watch, CSS min, JS uglify)
- no Jade

Usage
-----------
On your terminal.

Install the node packages.
$ sudo npm install

Run the server
$ nodemon server.js


To watch and run the Grunt.js task on any change to your main files "app.js, app.css"
$ grunt watch

Want to do manually?! no problem.
$ grunt build

Open your browser on the address 'localhost:xxxx' (xxxx=port chosen in server.js file)

Done!
