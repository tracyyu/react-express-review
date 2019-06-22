## Express-React-Review
Express review with intro to axios

* npm install
[Express Docs](https://expressjs.com/en/guide/routing.html)
[Axios Docs](https://github.com/axios/axios)

### Exercise 1

* Create a basic express server in server/index.js
* Assign a port and begin listening
* Add a start script to start your server with nodemon

### Exercise 2

* Use express.static to serve our index.html in client/dist/
* Create a basic .get to path '/name' that sends a response with your name

### Exercise 3

* Build a controller that handles GET POST and DELETE and export it
* Your controller should send back a message indicating that it received the request
* Build a router using express.Router to use our controller
* Have your express server use your router for routes to '/api'

### Exercise 4

* npm run build to start webpack
* Add our bundle to index.html
* Create an array in your controller to represent your database of todos and give it some default todos
* Refactor your GET request to send your array of todos
* Use axios to add functionality to getTodos

### Exercise 5

* Refactor your POST request to add to our array of todos
* Use axios to add functionality to postTodo

### Exercise 6

* Refactor your DELETE request to remove from our array given an index
* Use axios to add functionality to deleteTodo