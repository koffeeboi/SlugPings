# SlugPings
A live, interactive map where users place markers to ping an event occuring on campus.

Live demo: https://slugpings.herokuapp.com/

Two main source directories: 

    SlugPings (https://github.com/hueyjj/SlugPings)

## Setting up SlugPings
```bash
git clone https://github.com/hueyjj/SlugPings
cd SlugPings
npm install
```

## Set up Heroku (command line interface)
- Go to https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up
- Click on the dropdown arrow next to "Download the Heroku CLI for..."
- Select the option for your operating system
- Download your installer

![Heroku CLI Download](https://raw.githubusercontent.com/hueyjj/SlugPings/master/screenshots/HerokuCLI.PNG)

- Open up a terminal
- Enter the command below to check if Heroku has been installed
```bash
heroku --version
```

## Running
```bash
cd SlugPings
heroku local web
```

## Technology Stack
- MongoDB - back-end database
- ExpressJs - back-end framework
- React + Redux - front-end framework
- NodeJS - back-end written on NodeJs engine

## APIs
- LeafletJS - OpenStreetMap wrapper library

## Libraries
- Font Awesome
- Bootstrap