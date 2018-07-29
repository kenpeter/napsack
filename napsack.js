// https://www.dyclassroom.com/dynamic-programming/0-1-knapsack-problem


main();


function main() {
	var val = [-1, 100, 20, 60, 40];
	var wt = [-1, 3, 2, 4, 1];

	var totalItem = 4;
	var totalWeight = 5;

	var M = napsack(totalItem, totalWeight, val, wt);
	var buf = getCombo(M, wt, totalItem, totalWeight);
	
	printItemVal(val, wt, buf);	
}


function printItemVal(val, wt, buf) {
	for(var i=0; i<buf.length; i++) {
		var index = buf[i];
		console.log('-----');
		console.log(index);
		console.log(val[index]);
		console.log(wt[index]);	
	}
}


// e.g. 4 item, 5 weight
function getCombo(M, wt, totalItem, totalWeight) {
	var row = totalItem;
	var col = totalWeight;
	var buf = [];

	while(row > 0 && col > 0) {
		// M vs 1 up
		if( M[row][col] == M[row-1][col] ) {
			row--;
		} else {
			buf.push(row);
			// wt is the weight of item
			// we are moving item
			col = col - wt[row];
			row--;
		}

	}	// end loop

	return buf;
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

	return M;
}







