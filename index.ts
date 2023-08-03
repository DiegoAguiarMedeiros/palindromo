const isPalindromo = (text: string): boolean => {
  if (text === "") return false;
  let reverseText = text.split("").reverse();

  let textLowerCaseTrimmed = text.replaceAll(" ", "").replace(/[^a-zA-Z]/g, '').toLowerCase();
  let reverseTextLowerCaseTrimmed = reverseText.join("").replaceAll(" ", "").replace(/[^a-zA-Z]/g, '').toLowerCase();

  return (
    textLowerCaseTrimmed ===
    reverseTextLowerCaseTrimmed
  );
};

export default isPalindromo;
