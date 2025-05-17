function answers()
{
	var q1 = document.getElementById("q1").value;
	var q2 = document.getElementById("q2").value;
	var q3 = document.getElementById("q3").value;
	var q4 = document.getElementById("q4").value;
	var q5 = document.getElementById("q5").value;
	var score = 0;
	var t;
	
	if (q1 == 'D' || q1 == 'd')
	{
		score = score + 1;
		document.getElementById("demo1").innerHTML = "Q1: D is correct!\n";
	}
	else
	{
		document.getElementById("demo2").innerHTML = "Q1: " + q1 + " is incorrect, but D is correct\n";
	}
	if (q2 == 'C' || q2 == 'c')
	{
		score = score + 1;
		document.getElementById("demo3").innerHTML = "Q2: C is correct!\n";
	}
	else
	{
		document.getElementById("demo4").innerHTML = "Q2: " + q2 + " is incorrect, but C is correct.\n";
	}
	if (q3 == 'D' || q3 == 'd')
	{
		score = score + 1;
		document.getElementById("demo5").innerHTML = "Q3: C is correct!\n";
	}
	else
	{
		document.getElementById("demo6").innerHTML = "Q3: " + q3 + " is incorrect, but D is correct.\n";
	}
	if (q4 == 'C' || q4 == 'c')
	{
		score = score + 1;
		document.getElementById("demo7").innerHTML = "Q4: C is correct!\n";
	}
	else
	{
		document.getElementById("demo8").innerHTML = "Q4: " + q4 + " is incorrect, but C is correct.\n";
	}
	if (q5 == 'B' || q5 == 'b')
	{
		score = score + 1;
		document.getElementById("demo9").innerHTML = "Q5: B is correct!\n";
	}
	else
	{
		document.getElementById("demo10").innerHTML = "Q5: " + q5 + " is incorrect, but B is correct.\n";
	}
	document.getElementById("demo11").innerHTML = "Score: " + score + " / 5";
	return false;
}
