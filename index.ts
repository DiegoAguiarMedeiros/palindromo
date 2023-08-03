const isPalindromo = (text: string): boolean => {
  if (text === "") return false;
  let reverseText = text.split("").reverse();

  let textLowerCaseTrimmed = text.replaceAll(" ", "").replace(/[^a-zA-Z]/g, '');
  let reverseTextLowerCaseTrimmed = reverseText.join("").replaceAll(" ", "").replace(/[^a-zA-Z]/g, '');

  return (
    textLowerCaseTrimmed.toLowerCase() ===
    reverseTextLowerCaseTrimmed.toLowerCase()
  );
};

export default isPalindromo;
