const isPalindromo = (text: string): boolean => {
  if (text === "") return false;
  let reverseText = text.split("").reverse();

  let textLowerCaseTrimmed = text.replaceAll(" ", "");
  let reverseTextLowerCaseTrimmed = reverseText.join("").replaceAll(" ", "");

  return (
    textLowerCaseTrimmed.toLowerCase() ===
    reverseTextLowerCaseTrimmed.toLowerCase()
  );
};

export default isPalindromo;
