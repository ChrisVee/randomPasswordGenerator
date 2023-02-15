const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const passwordDisplays = document.getElementsByClassName('password-display')

// created a const variable that targets all elements with a specifc class name ex: password display
// why? before I had a different class name for each generated password 
// cool trick!
// I learned that elements can have an ID and class which can be maniupulated 

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

for (let i=0; i < passwordDisplays.length; i++) {
  // created a new FOR loop that loops over the new variable passwordDisplays
  // I set the text content of that new variable to the generate password function
  passwordDisplays[i].textContent = generateRandomPassword()
}
console.log(passwordDisplays)
});
