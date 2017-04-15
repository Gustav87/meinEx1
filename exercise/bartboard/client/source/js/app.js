'use strict';

var BartBoard = require('./BartBoard');

var board1 = document.querySelectorAll('.blackboard')[0];
var board2 = document.querySelectorAll('.blackboard')[1];
var board3 = document.querySelectorAll('.blackboard')[2];
var board4 = document.querySelectorAll('.blackboard')[3];

var myBoard1 = new BartBoard(board1);
var myBoard2 = BartBoard(board2);
var myBoard3 = new BartBoard(board3);
var myBoard4 = new BartBoard(board4);

console.log(myBoard1);
console.log(myBoard2);
console.log(myBoard3);
console.log(myBoard4);
