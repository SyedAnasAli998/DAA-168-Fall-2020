var taSol1, taSol2, taSol3;
var btnRun;

window.onload = function() {
	console.log("Hooray! Its working");
	taSol1 = document.getElementById('ta_sol1');
	taSol2 = document.getElementById('ta_sol2');
	taSol3 = document.getElementById('ta_sol3');
	btnRun = document.getElementById('btnRun');
} //end window.onload

function runEmAll(){
	console.log("All Possible Solution: ")
	taSol1.value = ""; 	taSol2.value = ""; 	taSol3.value = "";
	var start;
	var end;
	var n=4;
	for (var k = 4; k <= 16; k++) {
		console.log("In Forloop: Line 18, k = "+k+"\n");
		start = performance.now(); //measures in microsecond for every iteration
		sol1(n);
		end = performance.now();
		taSol1.value+= ""+ n +", "+ (end-start)*1000+"\n";
		
		start = performance.now();
		sol2(n);
		end = performance.now();
		taSol2.value+= ""+ n +", "+ (end-start)*1000+"\n";
		
		start = performance.now();
		sol3(n);
		end = performance.now();
		taSol3.value+= ""+ n +", "+ (end-start)*1000+"\n";
		n = n * 2;
		}//end for
}//end runEmAll

function sol1(n){
	//Implement your brute-force solution here

	//--This is garbage code: Remove this--//
	for (var i = 1; i <= n; i++) {
		for (var j = 1; j <= n ; j=j*2) {
			for(var k=0;k<50;k++);
		}//end for j
	}//end for i
	//-- End of garbage code --//

	//Mention reference where you got the solution
	//Ref: http://
	//Ref: If you found any paper
}//end sol1

/////////backtracking code/////////////////////

function sol2(n){
	let board = new Array(N).fill(0).map(() => new Array(N).fill(0));
	nQueen(N);
	function isAttack(i, j) {
		let k, l;
		//for rows and columns
		for (k = 0; k < N; k++) {
			if ((board[i][k] == 1) || (board[k][j] == 1))
				return true;
		}
		//for diagonals
		for (k = 0; k < N; k++) {
			for (l = 0; l < N; l++) {
				if (((k + l) == (i + j)) || ((k - l) == (i - j))) {
					if (board[k][l] == 1)
						return true;
				}
			}
		}
		return false;
	}
	function nQueen(n) {
		let i, j;
			if (n == 0)
			return true;//solved
		for (i = 0; i < N; i++) {
			for (j = 0; j < N; j++) {
				//visited placed or queen is already here 
				if ((!isAttack(i, j)) && (board[i][j] != 1)) {
					board[i][j] = 1;
					//commbinations for next move
					if (nQueen(n - 1) == true) {
						return true;
					}
					board[i][j] = 0;
				}
			}
		}
		return false;
	}


	
    var Counts = 0
    var borad = new Borad({ n, n });
    if (n === 2 || n === 3) {
        return Counts;

    }
    var solver = function (row) {
        if (row === n) {
            Counts++;
            return;

        }
        for (var i = 0; i < n; i++) {
            borad.togglePiece(row, i);
            if (!borad.hasAnyQueensConflicts()) {
                solver(row, i);

            }
            borad.togglePiece(row,i);
        }
    };
    solver(0);

	////Mention reference where you got the solution
    ////Ref: http://
    ////Ref: If you found any paper



}//end sol2

function sol3(n){
	//Implement your dynammic programming solution here

	//--This is garbage code: Remove this--//
	for (var i = 1; i <= n; i++) {
		for(var k=0;k<50;k++);
	}
}//end sol3
