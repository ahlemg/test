# Medeo API
## Setup
    npm i

### Dev
    npm start dev

### Swagger Doc

- Launch API
- In browser access: URL:PORT/api-docs

## Project structure

    |
    |- server.js : entry point to the API
    |- app.js : app config
    |- swagger.js : API docs
    |- .env : environment variables
    |- app
    	|- routes.js : main routes
    	|- api/v1/controllers : endpoints organized in modules
		    |- module
			    |- controller.js
			    |- router.js : module sub-routes
	    |- config
		    |- config.js : exports env variables in an object
		    |- database.js
		    |- multer.js
	    |- database/seeders
	    |- helpers
	    |- validations
	    |- middleware
	    |- models
	    |- services

