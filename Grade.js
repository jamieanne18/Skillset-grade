var x = prompt("What is your grade?")
var grade = parseInt(x)

if (grade <= 50)
{
	document.write("Wala ka nang pag-asa")
}
else if (grade > 50 && grade <= 60)
{
	document.write("May chance ka pa!")
}
else if (grade <= 70 && grade > 60)
{
	document.write("Congrats! Nairaos mo!")
}
else if (grade <= 80 && grade > 70)
{
	document.write("Yehess! Umeffort!")
}
else if (grade <= 90 && grade > 80)
{
	document.write("Konti na lang at mararating mo rin ang rurok!")
}
else if (grade <= 100 && grade > 90)
{
	document.write("You've reached the Apex!")
}
else
{
	document.write("Invalid input!")
}