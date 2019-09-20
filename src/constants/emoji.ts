import emojiDataset from "emoji-datasource/emoji.json";

import recentBase from "../images/ic-recent-24.svg";
import recentSelected from "../images/ic-recent-filled-24.svg";
import flagBase from "../images/ic-symbol-24.svg";
import flagSelected from "../images/ic-symbol-filled-24.svg";
import objectBase from "../images/ic-object-24.svg";
import objectSelected from "../images/ic-object-filled-24.svg";
import natureBase from "../images/ic-animal-24.svg";
import natureSelected from "../images/ic-animal-filled-24.svg";
import foodBase from "../images/ic-food-24.svg";
import foodSelected from "../images/ic-food-filled-24.svg";
import peopleBase from "../images/ic-smile-24.svg";
import peopleSelected from "../images/ic-smile-filled-24.svg";
import transportBase from "../images/ic-transport-24.svg";
import transportSelected from "../images/ic-transport-filled-24.svg";
import activityBase from "../images/ic-sport-24.svg";
import activitySelected from "../images/ic-sport-filled-24.svg";

import { ICategory, IEmojiJSON } from "../types";
import { mapEmojiByCategories } from "../utils/mapEmojiByCategories";

const emojiList: IEmojiJSON[] = emojiDataset;
const EMOJI_BY_CATEGORIES = mapEmojiByCategories(emojiList);

export const CATEGORIES: ICategory[] = [
  {
    name: "recent",
    icon: {
      selected: recentSelected,
      base: recentBase,
    },
  },
  {
    name: "people",
    icon: {
      selected: peopleSelected,
      base: peopleBase,
    },
    emoji: EMOJI_BY_CATEGORIES.smileys,
  },
  {
    name: "nature",
    icon: {
      selected: natureSelected,
      base: natureBase,
    },
    emoji: EMOJI_BY_CATEGORIES.animals,
  },
  {
    name: "food",
    icon: {
      selected: foodSelected,
      base: foodBase,
    },
    emoji: EMOJI_BY_CATEGORIES.food,
  },
  {
    name: "activity",
    icon: {
      selected: activitySelected,
      base: activityBase,
    },
    emoji: EMOJI_BY_CATEGORIES.activities,
  },
  {
    name: "travel",
    icon: {
      selected: transportSelected,
      base: transportBase,
    },
    emoji: EMOJI_BY_CATEGORIES.travel,
  },
  {
    name: "objects",
    icon: {
      selected: objectSelected,
      base: objectBase,
    },
    emoji: EMOJI_BY_CATEGORIES.objects,
  },
  {
    name: "flags",
    icon: {
      selected: flagSelected,
      base: flagBase,
    },
    emoji: EMOJI_BY_CATEGORIES.flags,
  },
];

export { emojiList };
