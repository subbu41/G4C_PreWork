

var testArray =[0,1,1,"1",3,"311"];
// for each element in the array
// since we are comparing ahead to the last element, we need to stop with 1 element before
arrLen = testArray.length;
lastInd = arrLen -1;


var arrPos, currElem, nextElem;
for(arrPos = 0; arrPos < lastInd; arrPos++)
{
	// getting the current and the next element to compare
	currElem = testArray[arrPos];
	nextElem = testArray[arrPos+1];
	
	// Testing if Current Element is greater than next Element
	console.log("Testing "+ currElem + " and " + nextElem + " (greater than): " + (currElem > nextElem));
		
		
	// Testing if current Element is less or equal to the next element
	console.log("Testing "+ currElem + " and "+ nextElem + " (less than or equal to): " + (currElem <= nextElem));
	
	// Are they equal to each other
	if(currElem == nextElem)
	{
		console.log("Testing "+ currElem + " and "+ nextElem + " (Equal to): TRUE");
		
		console.log("Testing "+ currElem + " and "+ nextElem + " (Strictly Equal to): " + (currElem === nextElem));
	
		if(currElem !== nextElem)
		{
			console.log(currElem + " is of type " + typeof(currElem));
			console.log(nextElem + " is of type " + typeof(nextElem));
		}

	}
	else
	{
		console.log("Testing "+ currElem + " and "+ nextElem + " (Equal to): FALSE");
	}

	
}


