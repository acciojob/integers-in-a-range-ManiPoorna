// write your code here
function range(start,end) {
	let ans = [];
	while (start <= end) {
		ans.push(start);
		start++
	}
	return ans;
}

// do not change the code below.
let start = parseInt(prompt("Enter Start of the Range."));
let end = parseInt(prompt("Enter End Of the Range."));
alert(range(parseFloat(start), parseFloat(end)));

