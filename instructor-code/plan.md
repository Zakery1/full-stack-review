# Full stack review plan - Word Bank

## Front-end

* Pages
  * Profile
    * Name
    * Picture
    * Email address
  * Landing page / home page
  * List words
* Components
  * Header
  * Button
  * Navigation
  * Input
  * Footer
    * Copyright
    * Careers
* Redux
  * Store
  * Reducer
    * initial state
      * user
    * reducer function
    * action creators
      * login
      * logout
    * action type names
      * USER_LOGIN
      * USER_LOGOUT
* Routes
  * BrowserRouter
  * /
  * /login
  * /profile
  * /words

## Back-end

* Middleware
  * ensureLoggedIn
* Routes
  * /api/words
    * GET
    * POST
  * /api/profile
    * GET
  * /auth/callback
* auth
  * Auth0
* Files
  * /server
    * index.js
    * controller.js

## Database

* tables
  * users
    * id
    * auth0_id
    * name
    * picture_url
    * email
  * words
    * id
    * text
* files
  * /db
    * init.sql
    * read_words.sql
    * create_word.sql
    * create_user.sql
    * read_user.sql


## NPM Packages

* axios
* express
* massive
* body-parser
* dotenv
* express-session
* redux
* react-redux
* react-router-dom

## Third party

* Auth0
  * Application
  * Social connections
* GitHub
* Heroku
* Redux DevTools
* React DevTools
* Postman
* SQL Tabs
* Chrome
  * DevTools
    * Network tab

## Words

* photosynthesis
* oligarchy
