import { Categorized, IEmojiJSON } from "../types";

export const mapEmojiByCategories = (emojiData: IEmojiJSON[]): Categorized => {
  const categoriesMap = emojiData.reduce(
    (acc: Categorized, el: IEmojiJSON) => {
      if (!el.has_img_apple) {
        return acc;
      }
      const categoryName = el.category.split(" ")[0].toLowerCase();
      acc[categoryName][el.sort_order] = el;
      return acc;
    },
    {
      activities: [],
      animals: [],
      flags: [],
      food: [],
      objects: [],
      skin: [],
      smileys: [],
      symbols: [],
      travel: [],
    },
  );

  const withoutEmptyElements = Object.assign(
    {},
    ...Object.entries(categoriesMap).map(([k, v]) => ({ [k]: v.filter(el => el) })),
  );

  return withoutEmptyElements;
};
