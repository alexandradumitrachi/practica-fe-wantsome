const username = document.getElementById("usernamee");
const email = document.getElementById("theMail");
const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const fname = document.querySelector("#fName");
const lname = document.querySelector("#lName");
const phone = document.querySelector("#phone");
const letters = /^[A-Z][-'a-zA-Z]+$/;
const lettersFirst = /^[A-Za-z]+((\s)?((\'|\-|\.)?([A-Za-z])+))*$/;
const form = document.querySelector("#form");
const submitBtn = document.querySelector("#btn");

const paragraphAlert = document.createElement("p");
paragraphAlert.textContent = "Please enter a username.";
document.querySelector("#prepend1").prepend(paragraphAlert);
paragraphAlert.classList.add("faulty");

const emailAlert = document.createElement("p");
emailAlert.textContent = "Please enter a valid email address.";
document.querySelector("#prepend2").prepend(emailAlert);
emailAlert.classList.add("faulty");

const fNameAlert = document.createElement("p");
fNameAlert.textContent = "Please enter a First Name.";
document.querySelector("#prepend3").prepend(fNameAlert);
fNameAlert.classList.add("faulty");

const lNameAlert = document.createElement("p");
lNameAlert.textContent = "Please enter a Last Name.";
document.querySelector("#prepend4").prepend(lNameAlert);
lNameAlert.classList.add("faulty");

const phoneAlert = document.createElement("p");
phoneAlert.textContent = "Please enter a phone.";
document.querySelector("#prepend5").prepend(phoneAlert);
phoneAlert.classList.add("faulty");

const faultyUsername = () => {
  if (username.value.length < 4) {
    return (paragraphAlert.style.display = "block");
  } else if (username.value.length > 4) {
    faultyUsername.preventDefault();
  }
  return (paragraphAlert.style.display = "none");
};

username.addEventListener("input", faultyUsername);

const faultyPassword = () => {
  if (emailFormat.test(email.value) === false) {
    return (emailAlert.style.display = "block");
  } else {
    return (emailAlert.style.display = "none");
  }
};

email.addEventListener("input", faultyPassword);

const faultyFName = () => {
  if (lettersFirst.test(fname.value) === false) {
    return (fNameAlert.style.display = "block");
  } else {
    return (fNameAlert.style.display = "none");
  }
};

fname.addEventListener("input", faultyFName);

const faultyLName = () => {
  if (letters.test(lname.value) === false) {
    return (lNameAlert.style.display = "block");
  } else {
    return (lNameAlert.style.display = "none");
  }
};

lname.addEventListener("input", faultyLName);

const faultyPhone = () => {
  if (phone.value.length < 10) {
    return (phoneAlert.style.display = "block");
  } else if (phone.value.length > 10) {
    return (phoneAlert.style.display = "none");
  }
};

phone.addEventListener("input", faultyPhone);

submitBtn.addEventListener("click", function (e) {
  if (username.value.length < 4) {
    e.preventDefault();
  } else if (phone.value.length < 10) {
    e.preventDefault();
  } else if (lettersFirst.test(fname.value) === false) {
    e.preventDefault();
  } else if (letters.test(lname.value) === false) {
    e.preventDefault();
  } else if (emailFormat.test(email.value) === false) {
    e.preventDefault();
  }
});
