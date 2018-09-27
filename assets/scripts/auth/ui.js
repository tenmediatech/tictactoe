'use strict'

const store = require('../store.js')

const signUpSuccess = function (data) {
  $('#sign-up-message').html('Sign up successful')
  $('#sign-up-message').css('color', 'green')
  $('#sign-up-form').trigger('reset')
}

const signUpFailure = function () {
  $('#sign-up-messagee').html('Something went wrong, please try again')
  $('#sign-up-message').css('color', 'green')
  $('#sign-up-form').trigger('reset')
}

const signInSuccess = function (response) {
  $('#sign-in-message').html('Sign in successful')
  $('#sign-in-message').css('color', 'green')
  $('#container').html('Game Board')


  $('#sign-in-form').trigger('reset')
  store.user = response.user
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
  $('#change-password-form').removeClass('hidden')
  $('#sign-out-button').removeClass('hidden')
  $('#create-example-form').removeClass('hidden')
  $('#container').html('Game Board').hide()
}

const signInFailure = function () {
  $('#sign-in-message').html('Something went wrong, please try again')
  $('#sign-in-message').css('color', 'green')
  $('#sign-in-form').trigger('reset')
}

const changeedPassword = function () {
  $('#change-password-message').html('Password Changed successful')
  $('#change-password-message').css('color', 'green')
  $('#change-password-form').trigger('reset')
}

const signOutSuccess = function () {
  $('#sign-out-message').html('Sign Out successful')
  $('#sign-out-message').css('color', 'green')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changeedPassword,
  signOutSuccess
}
