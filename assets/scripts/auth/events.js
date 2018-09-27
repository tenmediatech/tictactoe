'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

// SignUp
const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

// SignIn
const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.onChangePassword(data)
    .then(ui.changeedPassword)
    .catch(ui.changeedPasswordFailure)
}

const onSignOut = function (event) {
  const data = getFormFields(event.target)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

// Functions for each box
// Function for Box1
const onClickBox1 = function (b1) {
  event.preventDefault()
  api.onClickBox1(b1)
    .then(ui.onClickBox1)
    // .catch(ui.signUpFailure)
}

// Function for Box1
const onClickBox2 = function (b2) {
  event.preventDefault()
  api.onClickBox1(b2)
    .then(ui.onClickBox2)
    // .catch(ui.signUpFailure)
}

// Function for Box1
const onClickBox3 = function (b3) {
  event.preventDefault()
  api.onClickBox1(b3)
    .then(ui.onClickBox3)
    // .catch(ui.signUpFailure)
}

// Function for Box1
const onClickBox4 = function (b4) {
  event.preventDefault()
  api.onClickBox1(b4)
    .then(ui.onClickBox4)
    // .catch(ui.signUpFailure)
}
// Function for Box1
const onClickBox5 = function (b5) {
  event.preventDefault()
  api.onClickBox5(b5)
    .then(ui.onClickBox5)
    // .catch(ui.signUpFailure)
}

// Function for Box1
const onClickBox6 = function (b6) {
  event.preventDefault()
  api.onClickBox5(b6)
    .then(ui.onClickBox6)
    // .catch(ui.signUpFailure)
}

// Function for Box1
const onClickBox7 = function (b7) {
  event.preventDefault()
  api.onClickBox7(b7)
    .then(ui.onClickBox7)
    // .catch(ui.signUpFailure)
}

// Function for Box1
const onClickBox8 = function (b8) {
  event.preventDefault()
  api.onClickBox5(b8)
    .then(ui.onClickBox6)
    // .catch(ui.signUpFailure)
}

const onClickBox9 = function (b9) {
  event.preventDefault()
  api.onClickBox5(b9)
    .then(ui.onClickBox6)
    // .catch(ui.signUpFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onClickBox1,
  onClickBox2,
  onClickBox3,
  onClickBox4,
  onClickBox5,
  onClickBox6,
  onClickBox7,
  onClickBox8,
  onClickBox9
}
