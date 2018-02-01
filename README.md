# SlugPings
A live, interactive map where users place markers to ping an event occuring on campus.

Live demo: https://slugpings.herokuapp.com/

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
- LeafletJS - OpenStreetMap library

## Development
Ideally, we want everyone to work in the `dev` branch. So everyone working directly in the `dev` branch is perfectly fine. But this can cause a lot of merge conflicts if we are all pushing and pulling frequently.

Another option would be to branch from the `dev` branch and work in your own branch. However, this means that you will have to pull from the `dev` branch often to get the latest changes. 

When you are done with some work in your own branch, merge your changes back to the `dev` branch. Resolve any merge conflict and related problems.

There will be a `master` branch that will always have a working release. Only the owner of the repository will merge the changes from the `dev` branch to the `master` branch.

Clone the repository
```bash
git clone https://github.com/hueyjj/SlugPings
```

Check what branches exist
```bash
git branch -a
```

You should see something like

```bash
huey@huey-Aspire-E5-571:~/github/SlugPings$ git branch -a
* master
  remotes/github/dev
  remotes/github/form
  remotes/github/master
```

If you do not see the master branch nor the dev branch, contact the owner of the repository. Examples of `dev` and `master` branches. It may look different. Do not worry.
```bash
  remotes/github/dev
  remotes/github/master
```
This is an example of a branch that was branched from the `dev` branch

```bash
  remotes/github/form
```

Create your own branch
```bash
git checkout -b NAME_OF_YOUR_BRANCH dev
```
Then commit to that branch and the changes and branches will be visible on Github.

Push to your own branch
```bash
git push NAME_OF_REMOTE YOUR_BRANCH_NAME
```
For example, mine would look like:
```bash
git push github dev-huey
```

## Verify branching with Github
`https://github.com/hueyjj/SlugPings/network`
