var phoneNumber = prompt("What is your phone number? Please use this format: xxx-xxx-xxxx");

if (phoneNumber.charAt(3) !== "-" || phoneNumber.charAt(7) !== "-") {
	alert("Please follow the xxx-xxx-xxxx format when entering your phone number");
} else {
	alert("Thank you");
}

var birthDate = prompt("What is your birthday? please use this format: mm/dd/yy");

if (birthDate.charAt(2) !== "/" || birthDate.charAt(5) !== "/") {
	alert("Please use the format: mm/dd/yy")
} else {
	alert("Thank you")
}

var postalCode = prompt("What is your zip code? (xxxxx or xxxxx-xxxx)");

if (postalCode.length > 5 && postalCode.charAt(5) !== "-") {
	alert("Please enter your postal code again")
} else if (postalCode.length > 10 || postalCode.length < 5) {
	alert("Please follow the correct format (xxxxx or xxxxx-xxxx")
} else {
	alert("Thank you")
}

var stateAbv = prompt("What state are you from? Example: NY");

if (stateAbv.length !== 2) {
	alert("Please follow the correct format.")
} else {
	alert("Thank you")
}

var married = prompt("Are you married? Please answer 'yes' or 'no.'");

if (married.toLowerCase() !== "yes" || married.toLowerCase() !== "no") {
	alert("Please answer the question 'yes' or 'no'")
} else {
	alert("Thank you")
}