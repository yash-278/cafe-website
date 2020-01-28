function validateName() {
  var name = document.getElementById("name").value;
  if (name.length == 0) {
    alert("Name can't be blank");
    return false;
  }
  if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
    alert("Please enter your correct name"); //Validation Message
    return false;
  }
  return true;
}

function validateMessage() {
  var message = document.getElementById("message").value;
  if (message.length == 0) {
    alert("message can't be blank"); //Validation Message
    return false;
  }

  return true;
}

function validateForm() {
  if (!validateName() || !validateMessage()) {
    alert("Form not submitted"); //Validation Message
    return false;
  } else {
    submitted = true;
    return true;
  }
}
