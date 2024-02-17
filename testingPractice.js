export function capitalize(inputString) {
  if (typeof inputString !== "string") {
    return null;
  }
  const lowerCaseString = inputString.toLowerCase();
  let returnString = lowerCaseString.charAt(0).toUpperCase();
  for (let i = 1; i < lowerCaseString.length; i++) {
    returnString += lowerCaseString.charAt(i);
  }

  return returnString;
}

export function reverseString(inputString) {
  if (typeof inputString !== "string") {
    return null;
  }
  let returnString = inputString.charAt(inputString.length - 1);

  for (let i = inputString.length - 2; i >= 0; i--) {
    returnString += inputString.charAt(i);
  }

  return returnString;
}
