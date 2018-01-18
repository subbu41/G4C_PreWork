function countingCharacters(strToCount)
{
	console.log(strToCount + " has " + strToCount.length + " characters.");
}

function countingCharacters2(stringToCount, characterToFind)
{
	//let's count the number of times a character appears in a string 
	// We will look at each character one-by-one with the help of a for loop
	
	characterCount =- 0;
	for(var charPos=0; charPos<stringToCount.length; charPos++)
	{
		if(stringToCount[charPos] == characterToFind)
		{
			characterCount++;
		}
		
	}
	console.log("String to search in: "+ stringToCount);
	console.log("Character to find: " + characterToFind);
	console.log("Number of times the character appears: "+ characterCount); 	
}
function countingCharacters3(strToCount, searchString)
{
	var i, ss;
	var sl = searchString.length;
	var l = strToCount.length;
	var lastIndex = l-sl;
	var strCounter =0;
	for(i=0;i<=lastIndex;i++)
	{
		ss=strToCount.substr(i,sl);
		if(ss == searchString)
		{
			strCounter++;
		}		
	}
	/* console.log("String to search in: "+ strToCount);
	console.log("String to search: "+ searchString);
	console.log("Number of times the Search String appear: "+ strCounter); */
	return strCounter;
}
function rollDice(minNum, maxNum)
{
	var ranNum = Math.random()*(1+ maxNum - minNum)
	return Math.ceil(ranNum);
}