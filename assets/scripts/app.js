'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const authEvents = require('./auth/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

// Creating matrix board

$(() => {
  // your JS code goes here
  // const matrix = []
  // for (let i = 0; i < 3; i++) {
  //   matrix[i] = []
  //   console.log(matrix[i])
  //   for (let j = 0; j < 3; j++) {
  //     matrix[i][j] = undefined
  //     console.log(matrix[i])
  //   }
  // }

  $('#sign-up-form').on('submit', authEvents.onSignUp) // .hide()
  $('#sign-in-form').on('submit', authEvents.onSignIn) // .hide()
  $('#change-password-form').on('submit', authEvents.onChangePassword) // .hide()
  $('#sign-out-button').on('click', authEvents.onSignOut) // .hide()

  // $('#box1').on('click', authEvents.onClickBox1(1)) // .hide()
  // $('#box2').on('click', authEvents.onClickBox2(2)) // .hide()
  // $('#box3').on('click', authEvents.onClickBox3(3)) // .hide()
  // $('#box4').on('click', authEvents.onClickBox4(4)) // .hide()
  // $('#box5').on('click', authEvents.onClickBox5(5)) // .hide()
  // $('#box6').on('click', authEvents.onClickBox6(6)) // .hide()
  // $('#box7').on('click', authEvents.onClickBox7(7)) // .hide()
  // $('#box8').on('click', authEvents.onClickBox8(8)) // .hide()
  // $('#box9').on('click', authEvents.onClickBox9(9)) // .hide()
})
