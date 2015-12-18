# Project-01
First project utilizing a Full-Stack based around getting seeded data from Bay Area Bikeshare and serving the information to the user to find information about bike availability and suggesting a new station to the system in my first web app.

[heroku link](https://fast-depths-9180.herokuapp.com/)

[github link](https://github.com/trebloc/project-01)

![screenshot]
(http://i.imgur.com/W3CMSYQ.png)

# User Stories
* An App for Bay Area BikeShare System for Users
* User clicks from the main page with information about the system and then station links to a modal for each station.

![screenshot]
(http://i.imgur.com/ZWah1vx.png?2)

* Modal page will also contain user input in which they put down the Road Condition, Bike Lane on the Route, or Other.
* Station Information will contain information about the Station, is the Dock in Service, Bikes Available, Number of Docks, Google Map information of Longitude and Latitude.
* User will be able to create a comment about an existing station.
* A user will be able to comment based upon a pull-down menu for comment type, road condition, bike lane, bikeshop, or other for a specfic staiton.
* User can go into an existing comment and be able to edit the actual comment or delete it.

![screenshot]
(http://i.imgur.com/jip7wti.png)

* User will be able to suggest a station and post by putting in lattitude, longitude, and why along with deleting it.

### Mobile Responsive Rendering
![screenshot]
(http://i.imgur.com/WFNOYlz.png?3)
![screenshot]
(http://i.imgur.com/DQ7s9U2.png?2)

## Technologies Used in the Project:

* Express API - Utilized Expressto have HTML and JSON API endpoints.

###API Endpoints

Method | URL | Example
--- | --- | --- 
GET	| api/stations | read all the stations
GET	| api/stations/:id | read a single station
POST | api/stations/:id/comments/ | create a new comment
GET	| api/stations/:id/comments/ | read all comments
PUT	| api/stations/:id/comments/ | update comments #5
DELETE | api/stations/:id/comments/	| destroy comment #11
POST | /api/suggest/:id | create a new station suggestion
GET	| api/suggest |	get all new station suggestions 

* RESTful Routes - Used CRD for my project in the comment model, R for station model, and RD for the suggestion model.
* AJAX - Utilized AJAX to fetch JSON data on the backend of things.
* jQuery - jQuery was used to render on the client-side.
* MongoDB - Three models were used for Mongo.
* Git - Committed over the course of the project.
* Visual Design Utilized Bootstrap and CSS to style my Web App.
* Heroku - Successfully Deployed my Web App on Heroku.
* Documentation - Fully documented my Web App in the READ Me.

## CHALLENGE ADD-ONS
* **Templating** Utilized Handlebar templating on the Suggest a Station Page.

## Code Snippet - Handlebar Templating!
  ```              
                  <li class='list-group-item'>
                    <h4 class='inline-header'>User Name:</h4>
                      <span class='user-name'>{{userName}}</span>
                  </li>
  ```                
## Future Improvements
* Improve the Web App with Google Maps API and to dynamically render Station Locations
* Change the templating on the Index.html to include Handlebar Templating
* Improve the Bootstrap and CSS Front-End.

