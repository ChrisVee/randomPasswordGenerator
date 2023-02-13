const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let passwordLength = 15;

function getRandomChar() {
  let randomChar = Math.floor(Math.random() * characters.length);
  return characters[randomChar];
}

function generateRandomPassword() {
  let randomPassword = "";
  for (let i = 0; i < passwordLength; i++) {
    randomPassword += getRandomChar();
  }
  return randomPassword;
}

let passwordOne = document.getElementById("passwordOne");
passwordOne.textContent = "Password One";

let passwordTwo = document.getElementById("passwordTwo");
passwordTwo.textContent = "Password Two";

const generateButton = document.getElementById("generateButton");
generateButton.addEventListener("click", function() {
  const generatedPasswordOne = generateRandomPassword();
  passwordOne.textContent = generatedPasswordOne;
  
  const generatedPasswordTwo = generateRandomPassword();
  passwordTwo.textContent = generatedPasswordTwo;
  
  console.log("Here are two random passwords: ", generatedPasswordOne, generatedPasswordTwo);
});
