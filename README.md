# Project-01
First project utilizing a Full-Stack based around getting seeded data from Bay Area Bikeshare and serving the information to the user to find information about bike availability and suggesting a new station to the system in my first web app.

[heroku link](https://fast-depths-9180.herokuapp.com/)

[github link](https://github.com/trebloc/project-01)

![screenshot]
(http://i.imgur.com/W3CMSYQ.png)

## Technologies Used in the Project:

* **Express API** - Utilized Expressto have HTML and JSON API endpoints.

###API Endpoints

Method | URL | Example
--- | --- | --- 
GET	| api/stations | read all the stations
GET	| api/stations/:id | read a single station
###Comments		
POST | api/stations/:id/comments/ | create a new comment
GET	| api/stations/:id/comments/ | read all comments
PUT	| api/stations/:id/comments/ | update comments #5
DELETE | api/stations/:id/comments/	| destroy comment #11
###Station Suggestion		
POST | api/new_station/:id | create a new station suggestion
GET	| api/new_station |	get all new stations 

* **RESTful Routes** - Used CRD for my project in the comment model, R for station model, and RD for the suggestion model.
* **AJAX** - Utilized AJAX to fetch JSON data on the backend of things.
* **jQuery** - jQuery was used to render on the client-side.
* **MongoDB** - Three models were used for Mongo.
* **Git** - Committed over the course of the project.
* **Visual Design** Utilized Bootstrap and CSS to style my Web App.
* **Heroku** - Successfully Deployed my Web App on Heroku.
* **Documentation** - Fully documented my Web App in the READ Me.



## CHALLENGE ADD-ONS

* **Templating** Utilized Handlebar templating on the Suggest a Station Page.
