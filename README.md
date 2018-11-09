# Friend Finder

This is a full-stack web app, built from my full-stack web development bootcamp. In short, it's a survey based app that will compare your answers to all the other users' answers in the data object and after a series of comparison functions, it will provide you with a good match.

When I first started hacking this together, it seemed simple and a little tedious. So naturally, I procrastinated for a good chunk of the week before the due date. But upon actually diving in and getting started, it revealed itself as a daunting task. This was my first solo full-stack build and even though it has no formal database system—it writes all data to a `.txt` file—it was still very difficult to complete. 

Aside from implementing an Express server for the first time, the real challenge of this project was to modularize correctly. Separating the `post` and `get` Express routes from the `server.js` file took me a really long time. Exporting the logic from another JavaScript file to the `apiRoutes.js` file gave me a tough-love lesson on function scoping and local variables. Sadly, I couldn't figure out this last issue and had to simply scrap the other file and implement my logic directly in the `post` route. In the end, I was able to finish all the requirements and mount the working app on [Heroku](https://bootcamp-friend-finder-hw.herokuapp.com/). But due to time-constraints, I was unable to spruce up the front-end and make it look cool. Hopefully the back-end logic speaks for itself for this one.

_If you would like to run this locally, clone the repo and run_ `npm i` _in terminal. Then run_ `node server.js` _and you'll be set._
