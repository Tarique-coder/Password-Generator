const lowerAlphabets = "abcdefghijklmnopqrstuvwxyz";
const upperAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

//selecting each element
let passInput = document.querySelector("#password");
let copyBtn = document.querySelector("#copy-btn");
let length = document.querySelector("#length");
let lowerCase = document.querySelector("#lowercase");
let upperCase = document.querySelector("#uppercase");
let numb = document.querySelector("#numbers");
let symb = document.querySelector("#symbols");
let genBtn = document.querySelector("#generate-btn");

//creating function to generate the password
function gnrtPass() {
  let lengthValue = parseInt(length.value);
  if (lengthValue < 6) lengthValue = 6;
  if (lengthValue > 20) lengthValue = 20;

  //building a character pool
  let chars = "";
  if (lowerCase.checked) chars += lowerAlphabets;
  if (upperCase.checked) chars += upperAlphabets;
  if (numb.checked) chars += numbers;
  if (symb.checked) chars += symbols;
  if (chars === "") {
    chars = lowerAlphabets;
  }
  //loop to iterate
  let password = "";
  for (let i = 0; i < lengthValue; i++) {
    let randIdx = Math.floor(Math.random() * chars.length);
    password += chars[randIdx];
  }
  return password;
}

//adding eventListener

genBtn.addEventListener("click", function () {
  let password = gnrtPass();
  passInput.value = password;
});

copyBtn.addEventListener("click", function () {
  console.log("copy button was clicked");
  if (passInput.value == "" || passInput.value == "Click Generate") {
    alert("Generate a Password first!");
  }
  navigator.clipboard
    .writeText(passInput.value)
    .then(() => {
      alert("Password copied to clipboard");
    })
    .catch((err) => {
      alert("Failed to copy the password: " + err);
    });
});
