Step Count Tracker - documentation in progress

<img src="./images/Screenshot 2022-08-12 at 19.42.05.png" alt="step tracker image"></img>

# School Of Code Dashboard Documentation

A note taking app for bootcampers at The School Of Code

## Author
- Arian Moossavi


## Overview

- One Step Ahead is a manual step tracker app, where you can record the number of steps you have achieved each day.

## Features/Functionality

- The main feature is the ability to select a particular day, input the number of steps you have completed for that day and 


- **Notes**:

## Quick Start Guide
1. Create a folder and clone down both repositories from GitHub:

        git clone https://github.com/Dinomouse/One-Step-Ahead

        git clone https://github.com/Dinomouse/One-Step-Ahead-backend


2. After doing this we want to npm i in both terminals so we download the dependencies for both the frontend (cd into soc-dasboard first) and backend  

   Start development servers:   

**Backend**

- To start up the backend, first you want to make a .env file to hold your database credentials. In the process of making this I used heroku, but feel free to use any other connection string.

- Add your connection string to your database in your .env file by writing PGURL and then assigning it the value of your connection string.
 
- Next we can run the scripts. In the backend terminal, enter npm run reset to start the process of creating the database

- Finally, enter npm run dev to start up the backend server.

**Frontend**:

- In the front end terminal, enter npm start and the app should open in your local host port 3001.


## Known Issues

- **Date Increments** There is a current issue whereby the date font will get smaller when too many entries have been made which can impact on the user experience. Look at future updates for upcoming features that will help improve this issue.


## Future Implementations

- **Toggle for day, week, month** - this should address the date increments issue

## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| SoC Blue | ![#32a3db](https://via.placeholder.com/10/32a3db?text=+) #32a3db |
| SoC Grey | ![#efefef](https://via.placeholder.com/10/efefef?text=+) #efefef |
| SoC White | ![#ffffff](https://via.placeholder.com/10/ffffff?text=+) #ffffff |
| SoC Grey | ![#5c5c5c](https://via.placeholder.com/10/5c5c5c?text=+) #5c5c5c |


