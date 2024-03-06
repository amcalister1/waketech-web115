// JavaScript code for form validation

document.getElementById('myForm').addEventListener('submit', function (event) {
  // Retrieve the input field value
  let inputElement = document.getElementById('inputField');
  let inputValue = inputElement.value;
  // Regular expression pattern for alphanumeric input
  let regex = /^[a-zA-Z0-9]*$/;
  if (!regex.test(inputValue) || inputValue == "") {
    event.preventDefault();
    alert('Invalid format! Input is not alphanumeric.');
  }
  // Valid input: display confirmation and submit the form
  else {
    alert('Input confirmed! Format is valid');
  }
});
