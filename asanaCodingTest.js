Write a function that takes a matrix and examines each item in a spiral order, printing each item as it comes to it.

For example, given a matrix like this as input:

[
	[11, 12, 13, 14, 15],
	[21, 22, 23, 24, 25],
	[31, 32, 33, 34, 35],
	[41, 42, 43, 44, 45]
]
Your program must print:

11 12 13 14 15 25 35 45 44 43 42 41 31 21 22 23 24 34 33 32

function printMatrixInSpiral (matrix) {
	var spiralOrder = [];
	var startingRowIndex = 0;
	var startingColIndex = 0;
	var endingRowIndex = matrix.length - 1;
	var endingColIndex = matrix[0].length - 1;

	while (startingRowIndex <= endingRowIndex && startingColIndex <= endingColIndex) {

		// Traverse left to right
		for (var i = startingColIndex; i <= endingColIndex; i++) {
			spiralOrder.push(matrix[startingRowIndex][i]);
		}
		// Get rid of that row
		startingRowIndex++;

		// Traverse Top to Bottom
		for (var i = startingRowIndex; i <= endingRowIndex; i++) {
			spiralOrder.push(matrix[i][endingColIndex]);
		}
		// Get rid of that column
		endingColIndex--;

		// Traverse Right to Left if Needed
		if (startingRowIndex <= endingRowIndex) {
			for (var i = endingColIndex; i >= startingColIndex; i--) {
				spiralOrder.push(matrix[endingRowIndex][i]);
			}
		}
		// Get rid of that row
		endingRowIndex--;

		// Traverse Bottom to Top if Needed
		if (startingColIndex <= endingColIndex) {
			for (var i = endingRowIndex; i >= startingRowIndex; i--) {
				spiralOrder.push(matrix[i][startingColIndex]);
			}
		}
		// Get rid of that column
		startingColIndex++;
	}

	// Print the result
	for (var i = 0; i < spiralOrder.length - 1; i++) {
		console.log(spiralOrder[i]);
	}

};