
var v1, v2, v3, v4, v5, v6, v7, v8, v9;

var turn = 0;

var board = new Array();

for (let index = 0; index < 3; index++) {
     const element = board[index];
     board[index] = [0, 0, 0];
}

var gameOver = 1;

var player1Win = [1, 1, 1];
var player2Win = [2, 2, 2];


const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);

function getTurn(t) {
     if (t === 0) {
          to.style.backgroundColor = "lightgreen";
          tx.style.backgroundColor = "white";
     } else {
          to.style.backgroundColor = "white";
          tx.style.backgroundColor = "lightgreen";
     }
     console.log("Board: ");
     console.log(board);
     console.log("Game Over: ");
     console.log(gameOver);
}

function getMark(i, j) {
     if (gameOver === 1) {
          if (turn === 0) {
               board[i][j] = 1;
               if (equals(board[i], player1Win)) {
                    gameOver = 0;
               } else {
                    turn = 1;
                    getTurn(turn);
               }
               console.log(board[i] + "  " + player1Win + "");
               return "O";
          } else {
               board[i][j] = 2;
               if (equals(board[i], player2Win)) {
                    gameOver = 0;
               } else {
                    turn = 0;
                    getTurn(turn);
               }
               console.log(board[i] + "  " + player2Win + "");
               return "X";
          }
     }
}

getTurn(turn);

g1.addEventListener("click", function () {
     if (v1 !== 1 && gameOver === 1) {
          v1 = 1;
          b1.innerHTML = getMark(0, 0);
     }
});

g2.addEventListener("click", function () {
     if (v2 !== 2 && gameOver === 1) {
          v2 = 2;
          b2.innerHTML = getMark(0, 1);
     }
});

g3.addEventListener("click", function () {
     if (v3 !== 3 && gameOver === 1) {
          v3 = 3;
          b3.innerHTML = getMark(0, 2);
     }
});

g4.addEventListener("click", function () {
     if (v4 !== 4 && gameOver === 1) {
          v4 = 4;
          b4.innerHTML = getMark(1, 0);
     }
});

g5.addEventListener("click", function () {
     if (v5 !== 5 && gameOver === 1) {
          v5 = 5;
          b5.innerHTML = getMark(1, 1);
     }
});

g6.addEventListener("click", function () {
     if (v6 !== 6 && gameOver === 1) {
          v6 = 6;
          b6.innerHTML = getMark(1, 2);
     }
});

g7.addEventListener("click", function () {
     if (v7 !== 7 && gameOver === 1) {
          v7 = 7;
          b7.innerHTML = getMark(2, 0);
     }
});

g8.addEventListener("click", function () {
     if (v8 !== 8 && gameOver === 1) {
          v8 = 8;
          b8.innerHTML = getMark(2, 1);
     }
});

g9.addEventListener("click", function () {
     if (v9 !== 9 && gameOver === 1) {
          v9 = 9;
          b9.innerHTML = getMark(2, 2);
     }
});