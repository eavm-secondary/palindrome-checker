function cleanInput(str) {
  return str.toLowerCase().replace(/[^a-z0-9]/gi, '');
}

function isPalindrome(str) {
  const cleaned = cleanInput(str);
  return cleaned === cleaned.split('').reverse().join('');
}

document.getElementById("check-btn").addEventListener("click", () => {
  const input = document.getElementById("text-input").value;
  const result = document.getElementById("result");

  if (!input) {
    alert("Please input a value");
    return;
  }

  if (isPalindrome(input)) {
    result.textContent = `${input} is a palindrome.`;
  } else {
    result.textContent = `${input} is not a palindrome.`;
  }
});
