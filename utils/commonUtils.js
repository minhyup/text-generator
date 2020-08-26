export const codeTransfer = (type, code) => {
  switch (type) {
    case "EXETYPE":
      if (code === "1") {
        return "자체경기";
      } else if (code === "2") {
        return "2파전";
      } else if (code === "3") {
        return "3파전";
      } else if (code === "4") {
        return "4파전";
      }
      break;
    default:
      break;
  }
};

export const delHtmlTag = (str) => {
  return str.replace(/(<([^>]+)>)/gi, "");
};
export const stringToBr = (str) => {
  return delHtmlTag(str).replace(/(?:\r\n|\r|\n)/g, "<br />");
};
