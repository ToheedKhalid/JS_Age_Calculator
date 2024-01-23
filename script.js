
// Get the date input element
var dateInput = document.getElementById('date');

// Set the maximum date to today
var today = new Date().toISOString().split('T')[0];
dateInput.setAttribute('max', today);

function calculateAge() {
var selectedDate = new Date(dateInput.value);
var today = new Date();

var ageYears = today.getFullYear() - selectedDate.getFullYear();
var ageMonths = today.getMonth() - selectedDate.getMonth();

// Check if birthday has occurred this year
if (today.getDate() < selectedDate.getDate()) {
ageMonths--;
}

if (ageMonths < 0) {
ageYears--;
ageMonths += 12;
}

alert("Your age is: " + ageYears + " years and " + ageMonths + " months");
}