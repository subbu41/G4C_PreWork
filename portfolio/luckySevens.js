function rollDice(minNum, maxNum)
{
	var ranNum = Math.random()*(1+ maxNum - minNum)
	return Math.ceil(ranNum);
}

function clearErrors()
{
	var eLen= document.forms["luckySevens"].elements.length;
	for(var loopCounter=0; loopCounter< eLen; loopCounter++)
	{
		if(document.forms["luckySevens"].elements[loopCounter].parentElement.className.indexOf("has-") != -1)
		{
			document.forms["luckySevens"].elements[loopCounter].parentElement.className = "form-group";
		}
	}
}


function validatePlay()
{
	clearErrors();
	var startBetAmount = Number(document.forms["luckySevens"]["betAmount"].value);
	var gameMoney = startBetAmount;
	var diceRoll1, diceRoll2, totDiceRoll;
	var rollCounter = 0;
	var highAmount, rollAtHighAmount;
	
	if(gameMoney == "" || isNaN(gameMoney) || (gameMoney < 0))
	{
		alert("Starting Bet must be a number greater than 0.");
		document.forms["luckySevens"]["betAmount"].parentElement.className = "form-group has error";
		document.forms["luckySevens"]["betAmount"].focus();
		return false;
	}
	highAmount = gameMoney;
	rollAtHighAmount = 0;
	
	while (gameMoney > 0)
	{
		rollCounter++;
		diceRoll1 = rollDice(1,6);
		diceRoll2 = rollDice(1,6);
		totDiceRoll = diceRoll1 + diceRoll2;
		if(totDiceRoll == 7)
		{
			gameMoney = gameMoney + 4
		}
		else
		{
			gameMoney = gameMoney - 1
		}
		if(gameMoney > highAmount)
		{
			highAmount = gameMoney;
			rollAtHighAmount = rollCounter;
		}
	}
	document.getElementById("results").style.display = "block";
	document.getElementById("submitBet").innerText = "Play Again";
	document.getElementById("startingBet").innerText = startBetAmount;
	document.getElementById("totalRolls").innerText = rollCounter;
	document.getElementById("highestAmountWon").innerText = highAmount;
	document.getElementById("rollCountAtHighest").innerText = rollAtHighAmount;

	return false;
}