export function masked(value: string, mask: string, maskSymbol = "#") {
  const maskArray = mask.split("");
  const valueArray = value.split("");

  const result: string[] = [];

  while (valueArray.length > 0) {
    const maskChar = maskArray.shift();

    if (maskChar === maskSymbol) {
      const valueChar = valueArray.shift();
      if (!valueChar) {
        break;
      }
      result.push(valueChar);
    } else if (maskChar) {
      result.push(maskChar);
    } else {
      break;
    }
  }

  return result.join("");
}
