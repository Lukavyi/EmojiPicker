import { IEmojiJSON } from "../types";

interface FrequentlyUsed {
  [key: string]: {
    count: number;
    element: IEmojiJSON;
  };
}

const frequentlyUsedLocalStorage = localStorage.getItem("frequentlyUsed") || "{}";
const frequentlyUsed: FrequentlyUsed = JSON.parse(frequentlyUsedLocalStorage);

export const getFrequentlyUsed = (limit = 16) =>
  Object.entries(frequentlyUsed)
    .sort((a, b) => b[1].count - a[1].count)
    .slice(0, limit)
    .map(el => el[1].element);

export const updateFrequentlyUsed = (emoji: IEmojiJSON) => {
  frequentlyUsed[emoji.short_name] = frequentlyUsed[emoji.short_name] || {};
  frequentlyUsed[emoji.short_name] = {
    count: frequentlyUsed[emoji.short_name].count + 1 || 1,
    element: emoji,
  };
  localStorage.setItem("frequentlyUsed", JSON.stringify(frequentlyUsed));
};
