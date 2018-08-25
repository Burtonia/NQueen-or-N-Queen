# NQueen-or-N-Queen
NQueen Problem or Eight queens puzzle solution helps to understand about this algorithm. We are using backtracking algorithm to solve this problem. This is a core JavaScript code for this algorithm.

#Parameter and Output
we have one parameter in this source code   
var totalQueen = 8;   

if you want a solution for the more then 8x8 block or less then this block, you can modify number here.  

Out output format consists 0 and 1. 1 represents the position of a queen in NxN dimensional array which represents chess board.  
For placing a queen into the 2x2 chessboard, we have total 0 solutions.  
For placing a queen into the 3x3 chessboard, we have total 0 solutions.  
For placing a queen into the 4x4 chessboard, we have total 2 solutions.  
For placing a queen into the 5x5 chessboard, we have total 10 solutions.  
For placing a queen into the 6x6 chessboard, we have total 40 solutions.  
For placing a queen into the 8x8 chessboard, we have total 92 solutions.  
For placing a queen into the 9x9 chessboard, we have total 352 solutions.  
For placing a queen into the 10x10 chessboard, we have total 724 solutions.  


Output Format.  
[1, 0, 0, 0, 0, 0, 0, 0]  
[0, 0, 0, 0, 1, 0, 0, 0]  
[0, 0, 0, 0, 0, 0, 0, 1]  
[0, 0, 0, 0, 0, 1, 0, 0]   
[0, 0, 1, 0, 0, 0, 0, 0]  
[0, 0, 0, 0, 0, 0, 1, 0]  
[0, 1, 0, 0, 0, 0, 0, 0]  
[0, 0, 0, 1, 0, 0, 0, 0]  
