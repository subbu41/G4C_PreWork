// In this exercise, we have an array of numbers
var testArray = [17, 42, 311, 5, 9, 10, 28, 7, 6];

var arrLen = testArray.length;
var sumArr = 0;

for(var arrPos=0; arrPos<arrLen; arrPos++)
{
	// We'll use the unary addition operator 
    // to add the current element's value to the rolling sum
	sumArr += testArray[arrPos];

}
console.log("The Sum of the elements in the Array ["+ testArray + "] is: "+ sumArr);