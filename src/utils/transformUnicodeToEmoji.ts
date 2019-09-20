import { Unified } from "../types";

const transformUnicodeToEmoji = (unicode: Unified): string => {
  const sym = unicode.split("-");
  return String.fromCodePoint(...sym.map(el => +`0x${el}`));
};

export default transformUnicodeToEmoji;
