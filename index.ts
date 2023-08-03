const isPalindromo = (text: string): boolean => {
  if (text === "") return false;
  let reverseText = text.split("").reverse();

  let textLowerCaseTrimmed = text.trim();
  let reverseTextLowerCaseTrimmed = reverseText.join("").trim();

  return (
    textLowerCaseTrimmed.toLowerCase() ===
    reverseTextLowerCaseTrimmed.toLowerCase()
  );
};

export default isPalindromo;
