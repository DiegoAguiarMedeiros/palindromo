const isPalindromo = (text: string): boolean => {
  if (text === "") return false;
  let reverseText = text.split("");
  return (
    text.toLowerCase().trim() === reverseText.join("").toLowerCase().trim()
  );
};

export default isPalindromo;
