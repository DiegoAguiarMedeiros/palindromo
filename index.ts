const isPalindromo = (text: string): boolean => {
  if (text === "") return false;
  let reverseText = text.split("");
  return text.toLowerCase() === reverseText.join("").toLowerCase();
};

export default isPalindromo;
