'use strict'

const store = require('../store.js')

const signUpSuccess = function (data) {
  $('#feedback').html('Sign up successful')
  // $('#feedback').css('font-size: 30px')
  // $('#sign-up-message').html('Sign up successful')
  // $('#sign-up-message').css('color', 'green')
  $('#sign-up-form').trigger('reset')
  // $('#loadGame').hide()
}

const signUpFailure = function () {
  $('#feedback').html('Something went wrong, please try again')
  // $('#feedback').css('font-size: 30px')
  // $('#sign-up-messagee').html('Something went wrong, please try again')
  // $('#sign-up-message').css('color', 'green')
  $('#sign-up-form').trigger('reset')
  // $('#loadGame').hide()
}

const signInSuccess = function (response) {
  // $('#hidebeforesignin').show()
  $('#feedback').html('User Signed In, Start Game')
  // $('#feedback').css('font-size: 30px')
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').show()
  $('.actionbutton').show()
  $('#sign-up-form').hide()
  store.user = response.user
  $('#sign-in-form').hide()
  // $('#sign-in-form').addClass('hidden')
  // $('#change-password-form').removeClass('hidden')
  $('#sign-out-button').removeClass('hidden')
  $('#create-example-form').removeClass('hidden')
  $('#container').html('Game Board').hide()
  // $('#loadGame').hide()
}

const signInFailure = function () {
  $('#feedback').html('Something went wrong, please try again')
  // $('#feedback').css('font-size: 30px')
  // $('#feedback').css('color', 'green')
  // $('#sign-in-message').html('Something went wrong, please try again')
  // $('#sign-in-message').css('color', 'green')
  $('#sign-in-form').trigger('reset')
}

const changeedPassword = function () {
  $('#feedback').html('Password Changed successful')
  // $('#feedback').css('color', 'green')
  // $('#change-password-message').html('Password Changed successful')
  // $('#feedback').css('color', 'green')
  // $('#change-password-message').css('color', 'green')
  // $('#loadGame').hide()
  $('#change-password-form').trigger('reset')
}

const signOutSuccess = function () {
  // $('#feedback').html('<h2>Game Board</h2>')
  $('#feedback').html('Sign Out successful')
  // $('#feedback').css('color', 'green')
  $('#loadGame').hide()
  $('#change-password-form').trigger('reset')
  $('#change-password-form').hide()
  $('.actionbutton').hide()
  $('#sign-up-form').show()
  $('#sign-in-form').show()
  // $('#sign-out-message').html('Sign Out successful')
  // $('#sign-out-message').css('color', 'green')
}

// Hide the game board on loading page
$(document).ready(function () {
  $('#hidebeforesignin').hide()
  $('#loadGame').hide()
  $('#change-password-form').hide()
  $('.actionbutton').hide()
})

const createGameSuccess = function (response) {
  $('#loadGame').show()
  $('#feedback').html('Start your game')
  store.counter = 0
  store.game = response.game
}

const getGameSuccess = function (response) {
  // $('#loadGame').hide()
  // $('#feedback').html('Game Loaded')
  // store.games = response.game
  $('#feedback').html(`You have ${response.games.length} games`)
}

const updateGameSuccess = function (response) {
  store.game = response.game
  // console.log(store.game)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changeedPassword,
  signOutSuccess,
  createGameSuccess,
  getGameSuccess,
  updateGameSuccess
}
