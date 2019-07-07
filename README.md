# Tweeter

Twitter scrapper

http://cryptic-stream-42501.herokuapp.com/

This web application scrape tweets content for a specified user by using Cheerio npm pakage.

Once the scrape is complete, the application follows an MVC model to save all data to mongoDB

It makes validations by using Mongoose npm pakage, and performs the communication with database.

Once this task is complete. The app will grab the data and render the homepage by using Handlebars.

Handlebars will update the client view to show the required tweets.

The application and the database are deployed on Heroku.

