// script.js

// Add event listener for form submission
document.getElementById('ageForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the value of the date input
    const dobInput = document.getElementById('dob').value;
    // Create a Date object from the input value
    const dob = new Date(dobInput);
    // Get the current date
    const today = new Date();

    // Check if the date input is empty
    if (!dobInput) {
        document.getElementById('result').innerText = 'Please enter a valid date.';
        return;
    }

    // Calculate the age
    let age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();
    // Adjust age if the current date is before the birthday this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    // Display the result
    document.getElementById('result').innerText = `You are ${age} years old.`;
});
