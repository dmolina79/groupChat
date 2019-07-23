


# GroupChat - Social Work tool for teams

React Based Slack type chat app
Uses Firebase as a backend store and real time chat and authentication platform.
Uses Iframe.ly Api to get Slack like rich media experience into your chat rooms. (channels)



<a href="https://stablepay.herokuapp.com/checkout?data=%7B%22stablepay%22%3Atrue%2C%22payload%22%3A%7B%22type%22%3A%22Donation%22%2C%22source%22%3A%7B%22name%22%3A%22GroupChat%22%2C%22address%22%3A%220x8b59ae6ec3Ef31c796600373a0Add1d91bD1c00e%22%7D%2C%22amount%22%3A%7B%22total%22%3A5%2C%22options%22%3A%5B5%2C10%2C15%2C25%5D%2C%22currency%22%3A%22USD%22%2C%22sign%22%3A%22%24%22%7D%2C%22theme%22%3A%22colored%22%2C%22callbackURL%22%3A%22https%3A%2F%2Fgithub.com%2Fdmolina79%2FgroupChat%22%7D%7D">
    <img src="https://stablepay.herokuapp.com/static/DonationsButtonBlueWhite.svg" >
</a>









 stablepay.herokuapp.com
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. Note: this instructions assume you have a *NIX type terminal.

### Prerequisites
You need to have node and npm or yarn install in your local machine.
You can clone the repository or download the zip file.

```
git clone https://github.com/dmolina79/groupChat.git
```

### Installing

Once you have the code in your local machine follow these steps.

```
npm install or yarn install
```

Then you need to create in your development environment 
a file named development.env on a directory called config.

```
mkdir config
cd config
touch development.env
```

You will need to add the following API keys to the development.env file
to make it work on your local environment. Please note that the
value should not have any quotes or curly braces. e.g. API_KEY=asdqwe1kj1l2l1231231

API_KEY={replace with your firebase api data}

AUTH_DOMAIN={replace with your firebase api data}

DATABASE_URL={replace with your firebase api data}

STORAGE_BUCKET={replace with your firebase api data}

MESSAGING_SENDER_ID={replace with your firebase api data}

IFRAMELY_API_KEY={replace with your Iframe.ly api key}


## Running the tests

```
npm run test
```

## Deployment

The project is ready to deploy in Heroku or Dokku PAAS.
You should just add the API variables in your production environment.

## Built With

* [React](https://facebook.github.io/react/) - Awesome JS View Library
* [Redux](http://redux.js.org/docs/introduction/) - State Management
* [Firebase](https://firebase.google.com/) - Used for the store data backend
* [IFramely](https://iframely.com/) - For rich media content for chat room

## Authors

* **Doug Molina** - *lead contributor* - [dmolina79](https://github.com/dmolina79/)
* **Pamela Laitano** - *contributor* - [laitanop](https://github.com/laitanop)
* **Gabriel Molina** - *contributor* - [xgmolinax](https://github.com/xgmolinax)


See also the list of [contributors]() who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* This is a project for CoralBytes Studios (https://www.coralbytes.com)
* Facebook for an google for all the awesome modern tools for web developers
