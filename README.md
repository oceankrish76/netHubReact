# REPORT NetHub: A Social networking Platform for People in Finland

A platform for NetHub community to connect and share information, find jobs, business partners, and just post like in other social medias. Business people and companies can create their portofolio by adding their experience, education, skills, interests and other important information of their professional career.

Users can also create small posts and like/dislike and comment on other posts.

Demo: [demo video](https://www.youtube.com/embed/GQI95Q5AQU4)
---

## Quick Start

```bash
# Install dependencies
cd NetHubs && npm install

# create a .env file in root of your project
touch .env
```

In the .env file create the below 2 enviroment varieables. Make sure it is exactly as shown below. No special charecters or spaces must be there.

```
DB_URL=YOUR_OWN_MONGO_URI
TOKEN_SECRET=YOUR_OWN_SECRET


CLOUD_NAME=YOUR_OWN
API_ID=YOUR_OWN
API_SECRET=YOUR_OWN
CLOUDINARY_URL=YOUR_OWN

cloud_name=YOUR_OWN
api_key=YOUR_OWN
api_secret=YOUR_OWN
cloudinary_url=YOUR_OWN

```

To run the development server:

```bash
# the development server runs on port 3000
npm run dev
```

To run production build:

```bash
# create code bundle
npm run build

# run production server
npm run prod
```

<<<<<<< HEAD
# if you run into some issues with new clone
sudo npm install -g --force nodemon
npm install --save-dev @babel/register

=======
>>>>>>> e28666c5f6603fb52761a18c779764d4079dea77
In the project a `Procfile` has also been provided. This file is used by Heroku.

### To deploy this project to heroku see steps below:

You will need to install the [heroku-cli]

Afer installing heroku-cli run the following commands in terminal

```bash
# login locally
heroku login
```

You will be prompted to enter your email and password which is the same the email and password used when you sign up for Heroku

```bash
# create your app
heroku create

# set enviroment vareiables
heroku config:set DB_URL=YOUR_OWN_DB_URI
heroku config:set TOKEN_SECRET=YOUR_OWN_SECRET
```

Try to keep your production DB different from development DB

```bash
# bundle code for production
npm run build

# deploy code to heroku
git push heroku master:master
```


## Main Technologies

### Client Side

- [x] **[React](https://github.com/facebook/react)**
- [x] **[Redux](https://github.com/reactjs/redux)**
- [x] **[Twitter Bootstap 4](https://github.com/twbs/bootstrap/tree/v4-dev)**
- [x] **[React-Router-DOM](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**

#### Libraries used in Client-side

- [x] **[axios](https://github.com/axios/axios)**
- [x] **[classnames](https://github.com/JedWatson/classnames)**
- [x] **[react-moment](https://github.com/headzoo/react-moment)**
- [x] **[react-redux](https://github.com/reduxjs/react-redux)**
- [x] **[redux-thunk](https://github.com/reduxjs/redux-thunk)**
- [x] **[validator](https://github.com/chriso/validator.js)**

### Server Side

- [x] **[Node.js / Express](https://github.com/expressjs/express)**
- [x] **[MongoDB](https://github.com/mongodb/mongo)**
- [x] **[JWT](https://github.com/auth0/node-jsonwebtoken)**
- [x] **[Passport](http://www.passportjs.org/)**
- [x] **[Passport-jwt](https://github.com/themikenicholson/passport-jwt)**

#### Libraries used in Server-side

- [x] **[bcryptjs](https://github.com/dcodeIO/bcrypt.js)**
- [x] **[bluebird](http://bluebirdjs.com/docs/getting-started.html)**
- [x] **[gravatar](https://github.com/emerleite/node-gravatar)**
- [x] **[mongoose](http://mongoosejs.com/)**
- [x] **[jwt-decode](https://github.com/auth0/jwt-decode)**
- [x] **[moment](https://momentjs.com/)**
- [x] **[validator](https://github.com/chriso/validator.js)**

Server API Endpoints
We now need to add the API endpoint routes so the server can be used to perform CRUD operations.

 First we’ll tell the server to use the routes we created. Toward the end of server.js
 const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

The first two lines load the routers from other files. Then the routers are added as middleware.

## Images are stored in cloudinary cloud, which helps 
save your space and make the app running fast as we are not
storing our images to database or server ****

**Cloudinary and multer for images are in the folder handlers**

**Models have mongoose schema to make mongodb store our data**

```bash
# MARKETPLACE MarketPLace THINGS TO DO
**1. IMAGES are stored in cloudinary and paths and titles are stored in mongodb database**

**2. Just Display them then it's fine**
**3. Add few more fields for price and contact **


 MOST OF MY TIME IN JANUARY WENT FOR FINDIND AND MAKING USE OF THE PROPER WAY OF STORING IMAGES IN MERN AND I HAVE TRIED MANY WAYS AND NOW THIS IS ONE OF THE GOOD WAYS.

<<<<<<< HEAD
BASIC INFO

- It is using Babel for compiling stuff and Webpack for bundling.
- The react stuff is in 'src/' directory. Where file 'index.js' renders everything to the node with id 'root' defined in 'views/index.hbs'
- A file named 'main.js' in 'src/' directory is importing 'index.js' (which renders everything) is used for configuration of Webpack in both 'config/webpack.dev.js' and 'config/webpack.prod.js' as shown in the screenshot.
- When you run the server using 'npm run dev' babel and webpack do their work and spits the output of react to 'views/index.hbs'.

The reason why there is only one PORT is that 'views' folder is set as a PUBLIC STATIC folder in 'server.js' 
and browser can access any file of that folder

For the react components there is nothing special. Everthing seems to be working just like in 'create-react-app'
- We have a directory called 'actions/' where the action creators for redux are exported
- 'components/' directiory which contains a bunch of subdirectories. Let's consider 'commons/' directory in 'components/', this commons directory contains an 'index.js' file which is doing nothing but importing all the commons components and exporting them out. Same goes for 'containers, layout and views' directories.
- 'constants/' directory contains action types that are used in both reducers and action creators.
- 'reducers/' directory contains all the redux state reducers combine them and export them in 'index.js'.
- 'utils' directory 
=======
>>>>>>> e28666c5f6603fb52761a18c779764d4079dea77
