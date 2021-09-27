//kata: https://www.codewars.com/kata/60a1aac7d5a5fc0046c89651

const maxCharCode = 122; // unicode z
const minCharCode = 97; // unicode a

const lastSurvivors = (str) => {
  let next = str;

  while (true) {
    if (next) str = next;

    let char = null;

    next = str.replace(/(\w)(?=.*\1)/, (match) => {
      char = match;

      let code = match.charCodeAt(0);

      if (code === maxCharCode) code = minCharCode;
      else code += 1;

      return String.fromCharCode(code);
    });

    if (!char) break;

    next = next.replace(char, "");
  }

  return str;
};

module.exports = lastSurvivors;
