'use strict';

const app = require('../app.js');
$('#posts').hide();
$('#change-password').hide();
$('#sign-out').hide();
const success = (data) => {
  if (data) {
    $('#posts').hide();
    $('#change-password').show();

    console.log(data);
  } else {
    console.log('Success');
    $('#login-prompt').text('Welcome ' + data.user.email + '!')

  }
};

const failure = (error) => {
  console.error(error);
  $('#change-password').text('Try again ' + data.user.email + '!')

};

const signInSuccess = (data) => {
  app.user = data.user;
  console.log('this Success')
  $('#login-prompt').text('Welcome ' + data.user.email + '!')
  $('#change-password').show();
  $('#posts').show();
  $('#sign-in').hide();
  $('#sign-out').show();
  $('#sign-up').hide();

  console.log(app.user);
};

const signUpSuccess = (data) => {
  app.user = data.user;
  $('#posts').show();

  console.log(app.user);
};
const signOutSuccess = () => {
  console.log('User signed out successfully');

  app.user = null;
};

module.exports = {
  success,
  failure,
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
};
