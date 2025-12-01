
/*

    Valid Sudoku
    You are given a 9 x 9 Sudoku board board. A Sudoku board is valid if the following rules are followed:

    Each row must contain the digits 1-9 without duplicates.
    Each column must contain the digits 1-9 without duplicates.
    Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without duplicates.
    Return true if the Sudoku board is valid, otherwise return false

    Note: A board does not need to be full or be solvable to be valid.

    Example 1:



    Input: board = 
    [["1","2",".",".","3",".",".",".","."],
    ["4",".",".","5",".",".",".",".","."],
    [".","9","8",".",".",".",".",".","3"],
    ["5",".",".",".","6",".",".",".","4"],
    [".",".",".","8",".","3",".",".","5"],
    ["7",".",".",".","2",".",".",".","6"],
    [".",".",".",".",".",".","2",".","."],
    [".",".",".","4","1","9",".",".","8"],
    [".",".",".",".","8",".",".","7","9"]]

    Output: true
    Example 2:

    Input: board = 
    [["1","2",".",".","3",".",".",".","."],
    ["4",".",".","5",".",".",".",".","."],
    [".","9","1",".",".",".",".",".","3"],
    ["5",".",".",".","6",".",".",".","4"],
    [".",".",".","8",".","3",".",".","5"],
    ["7",".",".",".","2",".",".",".","6"],
    [".",".",".",".",".",".","2",".","."],
    [".",".",".","4","1","9",".",".","8"],
    [".",".",".",".","8",".",".","7","9"]]

    Output: false
    Explanation: There are two 1's in the top-left 3x3 sub-box.

    Constraints:

    board.length == 9
    board[i].length == 9
    board[i][j] is a digit 1-9 or '.'.

*/

/*

    Initial thought: 

        Can loop through row and columns in O(n^2) and check if check row, column and sub 3x3 grid has unique items and not exceeding 9 value;

*/


function isValidSudoku(board) {

    const rowItems = Array(9).fill(null).map(() => {return {}});
    const columnItems = Array(9).fill(null).map(() => {return {}});
    const subGridItems = Array(3).fill(null).map(() => Array(3).fill(null).map(() => {return {}}));

    for(let i = 0; i < 9; i++) {
        for( let j = 0; j < 9; j++) {
            const value = board[i][j];
            if(value !== '.') {
                const iSubgrid = Math.floor(i / 3);
                const jSubgrid = Math.floor(j / 3);
                if(rowItems[i][value] || columnItems[j][value] || subGridItems[iSubgrid][jSubgrid][value]) return false;
                rowItems[i][value] = true;
                columnItems[j][value] = true;
                subGridItems[iSubgrid][jSubgrid][value] = true;
            }
        }
    }
    return true;

}
