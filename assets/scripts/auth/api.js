'use strict'

const config = require('../config.js')
const store = require('../store.js')

const signUp = function (userData) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: userData
  })
}

const signIn = function (userData) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: userData
  })
}

const onChangePassword = function (passwordData) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'PATCH',
    data: passwordData
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'DELETE'
  })
}

// Calling Api for each box
// Box1
// const onClickBox1 = function (b1) {
//   return $.ajax({
//     url: config.apiUrl + '/onClickBox',
//     method: 'POST',
//     data: b1
//   })
// }
const win = {
  row1: [0, 1, 2],
  row2: [3, 4, 5],
  row3: [6, 7, 8],
  col1: [0, 3, 6],
  col2: [1, 4, 7],
  col3: [2, 5, 8],
  diag1: [0, 4, 8],
  diag2: [2, 4, 6]
}

module.exports = {
  signUp,
  signIn,
  onChangePassword,
  signOut
  // onClickBox1,
  // getWinner
}
