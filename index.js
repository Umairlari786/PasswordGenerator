// const uperLang = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const lowerLang = "abcdefghijklmnopqrstuvwxyz";
// const numSet = "1234567890";
// const symbolSet = "!@#$%^&*()_+/?<>[}{]\/";


// const passBox = document.getElementById("pass-box");
// const totalChar = document.getElementById("total-char");
// const upperInput = document.getElementById("upper-case");
// const lowerInput = document.getElementById("lower-case");
// const numberInput = document.getElementById("numbers");
// const symbolInput = document.getElementById("symbols");

// const getRandomData = (dataSet) => {
//     return dataSet[Math.floor(Math.random() * dataSet.length)];
// }


// const generatePassword = ( )=>{
//     let password = " ";

//     if (upperInput.checked){
//         password += getRandomData(uperLang);
//     }
//     if(lowerInput.checked){
//         password += getRandomData(lowerLang);
//     }
//     if(numberInput.checked){
//         password += getRandomData(numSet);
//     }
//     if (symbolInput.checked) {
//         password += getRandomData(symbolSet)
//     }
//     while(password.length === totalChar.value){
//         return generatePassword(password)
//     }
//    // console.log(password);
//     passBox.innerText = truncateString(password, totalChar.value);
// }

// const changeColor =() =>{
//     const getRandomNum = Math.floor(Math.random() * 16777215);
//     const randomCode = "#" + getRandomNum.toString(16);
//     document.body.style.backgroundColor = randomCode;
// }

// generatePassword();
// changeColor();


// document.getElementById("btn").addEventListener(
//     "click",
//     function(){
//         generatePassword();
//         changeColor();
//     }
    
// );

// function truncateString(str, num) {
//     if (str.length === num) {
//         let subStr = str.substring(0, num);
//         return subStr;
//     } else {
//         return str;
//     }
// }


const uperLang = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLang = "abcdefghijklmnopqrstuvwxyz";
const numSet = "1234567890";
const symbolSet = "!@#$%^&*()_+/?<>[}{]\/";

//const passBox = document.getElementById("pass-box");
const totalChar = document.getElementById("total-char");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");

const getRandomData = (dataSet) => {
  return dataSet[Math.floor(Math.random() * dataSet.length)];
}

const generatePassword = () => {
  let password = "";
  while (password.length < totalChar.value) {
    if (upperInput.checked) {
      password += getRandomData(uperLang);
    }
    if (lowerInput.checked) {
      password += getRandomData(lowerLang);
    }
    if (numberInput.checked) {
      password += getRandomData(numSet);
    }
    if (symbolInput.checked) {
      password += getRandomData(symbolSet);
    }
  }
  console.log(password);
  document.getElementById("pass-box").innerText = truncateString(password, totalChar.value);
}

const changeColor = () => {
  const getRandomNum = Math.floor(Math.random() * 16777215);
  const randomCode = "#" + getRandomNum.toString(16);
  document.body.style.backgroundColor = randomCode;
}

generatePassword();
changeColor();

document.getElementById("btn").addEventListener("click", () => {
  generatePassword();
  changeColor();
});

function truncateString(str, num) {
  if (str.length > num) {
    let subStr = str.substring(0, num);
    return subStr;
  } else {
    return str;
  }
}
