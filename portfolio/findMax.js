var testArray = [45, 78, 65, 878, 4741, 24, 255, 34, 95, 58];

function findMax(testArray)
{
	var arrLen = testArray.length;
	
	// initialize maxNum
	var maxNum = 0;	
	var currElm;
	for(var arrPos = 0; arrPos < arrLen; arrPos++)
	{
		currElm = testArray[arrPos];
		//console.log("The Max Number now is: " + maxNum + " and the currentNumber evaluated against is: "+ currElm);
		if(maxNum < currElm)
		{
			maxNum = currElm; 
		}
		
	}
	return maxNum;
	//console.log("The Maximum Number of all elements in the Array ["+ testArray +"] is : " + maxNum );
}

console.log(findMax(testArray));
