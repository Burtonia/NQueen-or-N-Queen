/**
 * Created By: Rativardhan Singh Sengar
 * email: rativardhan@gmail.com
 *
 */

// variables and parameter:
var totalQueen = 8; // Modify this parameter for N queen

// Initialise rows and cols with nqueen number.
var rows =totalQueen,cols = totalQueen;
var queenArray = [], row = [];

// We will use this variable to store all solution of nQueen in 2DMatrix form
var placeQueenArray = [];

// Assign 0 inside of all blocks of a nQueen array
while (cols--) row.push(0);
while (rows--) queenArray.push(row.slice());

/**
 * This function use backtracking algorithm to solve a nQueen problem
 * @param queenArray
 * @param queenCounterRow
 */
function nQueenPlace(queenArray, queenCounterRow )
{

    // If all row of queenArray traverse then store possible solution in placeQueenArray
    if(queenCounterRow>= totalQueen)
    {

        // Javascript equal to= operator use pass by reference, so we have deep copy all value of an array
        var tempObject = [];
        for(var k1 in queenArray){
            tempObject[k1] = [];
            for(var k2 in queenArray[k1] )
            {
                tempObject[k1][k2] = queenArray[k1][k2];
            }
        }

        // Store solution in placeQueenArray
        placeQueenArray.push(tempObject)
        return;
    } // end of if

    // We are running loop about N, which is a number of totalQueen.
    for(var j =0;j< totalQueen;j++)
    {

        // check if queen exists in the same column then continue
        var isRowFill = false;
        var tempColumnCheck = queenCounterRow;
        while(tempColumnCheck > 0)
        {
            tempColumnCheck--;

            // if in same column continue;
                // Break loop and continue main loop
            if(queenArray[tempColumnCheck][j] == 1)
            {
                isRowFill = true;
                break;
            }
        }
        // If row already have queen
        if(isRowFill == true)
        {
            continue;
        }

        // check if queen exists in diagonal in both sides
        var isDiagonalFill = false;
        var tempColumnCheck = queenCounterRow;

        // We can check diagonally block from the left and right blocks and Because we are using Top-Down approaches for backtracking.
        // We don't need to check bottom blocks of 2DMatrix
        // If you are on 4,4 or your queen on d4,
        // so you have checked only left side [3,3],[2,2],[1,1],[0,0] or c3,b2,a1
        // and right side [3,5] ,[2,6],[1,7,[0,8] or e5,f6,g7,h8
        var tempColumnJLeft = j;
        var tempColumnJRight = j;
        while(tempColumnCheck > 0)
        {
            tempColumnCheck--;
            tempColumnJLeft--;
            tempColumnJRight++;

            // checking for left side blocks
            if(tempColumnJLeft >=0 && queenArray[tempColumnCheck][tempColumnJLeft] == 1)
            {
                isDiagonalFill = true;
                break;
            }

            // checking for right side blocks
            if(tempColumnJRight<totalQueen && queenArray[tempColumnCheck][tempColumnJRight] == 1)
            {
                isDiagonalFill = true;
                break;
            }
        } /// enf of diagonally loop

        // if Diagonal already have queen
        if(isDiagonalFill == true)
        {
            continue;
        }

        // Assign queenArray 1 which represent our queen
        queenArray[queenCounterRow][j] = 1;

        // Re call nQueenPlace for placing queen on next Row.
        nQueenPlace(queenArray, ++queenCounterRow );
        // Come back to same Row after calling this function.
        queenCounterRow--;

        // reset to 0 for more then N solutions
        queenArray[queenCounterRow][j] = 0; // because we are finding N number of solution and we have to reset with 0 for other solutions
    } // end of for loop

} // end of nQueenPlace function

nQueenPlace(queenArray, 0 )

// After running above function, You can use below variable to display nQueen solution as you want.
console.log(placeQueenArray);