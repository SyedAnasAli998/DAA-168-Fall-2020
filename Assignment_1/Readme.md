# DAA-105182 Fall 2020: Course Repository #
### Project Members ###
StdID | Name
------------ | -------------
**63022** | **Kiran Habib**
**62354** | **Sehar Saleem**
**62621** | **Ali Hunain**

## Complexity Of N-Queen Problem ##
### Brute Force ###
The worst case “brute force” solution for the N-queens puzzle has an O(n^n) time complexity. This means it will look through every position on an NxN board, N times, for N queens. It is by far the slowest and most impractical method.

### Backtracking ###
Number of possible arrangements of N Queens on N x N chessboard is  N! , given you are skipping row or column, already having a queen placed.
So average and worst case complexity of the solution is  O(N!).

### Dynamic Programming ###
On large datasets best solution is dynamic programming it can work efficiently with the large dataset it gives best cmplexity. After DP backtracking has an average complexity with the large dataset. Worst case complexity can be given by Brute force with the large datset.