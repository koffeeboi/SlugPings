# SlugPings
A live, interactive map where users place markers to ping an event occuring on campus.

Live demo: https://slugpings.herokuapp.com/


Two main source directories: 

    SlugPings (https://github.com/hueyjj/SlugPings)
    SlugPingsDatabase (https://github.com/hueyjj/SlugPingsDatabase)

Both directories will be served on Heroku. The reason is because Heroku (free users at least) cannot use more than one port on one Heroku server.

Example

    our-heroku-name.herokuapps.com/
    our-heroku-name.herokuapps.com:1245/
We cannot use port 1245.

Our workaround will be to use one heroku server to serve our website front-end. This will also include some back-end logic.
And we will use one other heroku server to handle our database. The database we will use is redis (https://redis.io/).

## Setting up SlugPings (1/)
```bash
cd SlugPings_DIR
git clone https://github.com/hueyjj/SlugPings

cd SlugPings
npm install
```

## Setting up SlugPingsDatabase
```bash
cd SlugPingsDatabase_DIR
git clone https://github.com/hueyjj/SlugPingsDatabase

cd SlugPingsDatabase
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
cd SlugPings_DIR
heroku local web
```