// https://www.dyclassroom.com/dynamic-programming/0-1-knapsack-problem


main();


function main() {
	var val = [-1, 100, 20, 60, 40];
	var wt = [-1, 3, 2, 4, 1];

	var totalItem = 4;
	var totalWeight = 5;

	napsack(totalItem, totalWeight, val, wt);
		
}


function napsack(totalItem, totalWeight, val, wt) {
	var value = 0;
	// M = [[], []];
	var M = [...Array(totalItem+1)].map(e => Array(totalWeight+1).fill(value));  

	// get 1st row, then 1 by 1
	for(var i=0; i<=totalWeight; i++) {
		M[0][i] = 0;	
	}

	// idea is get row, then col, arr is ref 
	for(var i=0; i<=totalItem; i++) {
		M[i][0] = 0;	
	}	

	for(var i=1; i<=totalItem; i++) {
		// we travel in total weight
		for(var k=1; k<=totalWeight; k++) {

			// We have many weight on row
			if(wt[i] <= k) {
				var oneUpVal = M[i-1][k];
				
				var left = k - wt[i];
				var leftVal = M[i-1][left];		
	 			var comboVal = val[i] + leftVal;		

				M[i][k] = Math.max(oneUpVal, comboVal);  
			} else {
				// 1 up
				M[i][k] = M[i-1][k];
			}

		}	

	}

	console.log(M);
}







