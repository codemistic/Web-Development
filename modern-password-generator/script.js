const showGeneratedPassword = document.getElementById("showGeneratedPassword");
const passwordLength = document.getElementById("passwordLength");
const uppercaseCheckbox = document.getElementById("uppercaseCheckbox");
const lowercaseCheckbox = document.getElementById("lowercaseCheckbox");
const numbersCheckbox = document.getElementById("numbersCheckbox");
const symbolsCheckbox = document.getElementById("symbolsCheckbox");
const passwordGenerateBtn = document.getElementById("passwordGenerateBtn");
const copyToClipboardBtn = document.getElementById("copyToClipboardBtn");

// Generator functions
const getRandomLower = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getRandomUpper = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getRandomNumber = () => {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

const getRandomSymbol = () => {
  const symbols = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";
  return symbols[Math.floor(Math.random() * symbols.length)];
};

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

// Generate new password
const generatePassword = (lower, upper, number, symbol, length) => {
  let newPassword = "";
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  if (typesCount === 0 || length > 20) {
    return "";
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      newPassword += randomFunc[funcName]();
    });
  }

  const finalPassword = newPassword.slice(0, length);
  return finalPassword;
};

// Copy password to clipboard
copyToClipboardBtn.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = showGeneratedPassword.innerText;

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipboard!");
});

passwordGenerateBtn.addEventListener("click", () => {
  const length = parseInt(passwordLength.value);
  const hasLower = lowercaseCheckbox.checked;
  const hasUpper = uppercaseCheckbox.checked;
  const hasNumber = numbersCheckbox.checked;
  const hasSymbol = symbolsCheckbox.checked;

  showGeneratedPassword.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});
