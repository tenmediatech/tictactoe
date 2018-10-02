'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const authEvents = require('./auth/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

// Creating matrix board

$(() => {
  // Form event listeners
  $('#sign-up-form').on('submit', authEvents.onSignUp) // .hide()
  $('#sign-in-form').on('submit', authEvents.onSignIn) // .hide()
  $('#change-password-form').on('submit', authEvents.onChangePassword) // .hide()
  $('#sign-out-button').on('click', authEvents.onSignOut) // .hide()

  // Create game event listeners
  $('#newGame').on('click', authEvents.onCreateGame) // calls events.js
  $('#getGames').on('click', authEvents.ongetGame) // calls events.js

  // Boxes event listeners
  // if board[box-number] is '', then do hte click handler

  // if ($('#box1') !== '') {
  //   $('#box1').on('click', authEvents.onClickBox)
  // }
  $('#box1').on('click', authEvents.onClickBox)
  // $('#box1').on('click', function () {
  //   $(this).off('click') // or $(this).unbind()
  // })
  $('#box2').on('click', authEvents.onClickBox)
  // $('#box2').on('click', function () {
  //   $(this).off('click') // or $(this).unbind()
  // })
  $('#box3').on('click', authEvents.onClickBox)
  // $('#box3').on('click', function () {
  //   $(this).off('click') // or $(this).unbind()
  // })
  $('#box4').on('click', authEvents.onClickBox)
  // $('#box4').on('click', function () {
  //   $(this).off('click') // or $(this).unbind()
  // })
  $('#box5').on('click', authEvents.onClickBox)
  // $('#box5').on('click', function () {
  //   $(this).off('click') // or $(this).unbind()
  // })
  $('#box6').on('click', authEvents.onClickBox)
  // $('#box6').on('click', function () {
  //   $(this).off('click') // or $(this).unbind()
  // })
  $('#box7').on('click', authEvents.onClickBox)
  // $('#box7').on('click', function () {
  //   $(this).off('click') // or $(this).unbind()
  // })
  $('#box8').on('click', authEvents.onClickBox)
  // $('#box8').on('click', function () {
  //   $(this).off('click') // or $(this).unbind()
  // })
  $('#box9').on('click', authEvents.onClickBox)
  // $('#box9').on('click', function () {
  //   $(this).off('click') // or $(this).unbind()
  // })
})
