export type EmojiCategory = string;
export type ShortName = string;
type ImageURL = string;

export type Unified = string;

export interface IEmojiJSON {
  added_in: string;
  au: string | null;
  category: string;
  docomo: string | null;
  google: string | null;
  has_img_apple: boolean;
  has_img_facebook: boolean;
  has_img_google: boolean;
  has_img_messenger: boolean;
  has_img_twitter: boolean;
  image: string;
  name: string | null;
  non_qualified: string | null;
  sheet_x: number;
  sheet_y: number;
  short_name: ShortName;
  short_names: ShortName[];
  softbank: string | null;
  sort_order: number;
  text: string | null;
  texts: string | null;
  unified: Unified;
}

export interface Categorized {
  activities: IEmojiJSON[];
  animals: IEmojiJSON[];
  flags: IEmojiJSON[];
  food: IEmojiJSON[];
  objects: IEmojiJSON[];
  skin: IEmojiJSON[];
  smileys: IEmojiJSON[];
  symbols: IEmojiJSON[];
  travel: IEmojiJSON[];
}

export interface ICategory {
  name: EmojiCategory;
  icon: {
    selected: ImageURL;
    base: ImageURL;
  };
  emoji?: IEmojiJSON[];
}

export type OnAddEmoji = (emoji: IEmojiJSON) => void;

export type SearchTerm = string;
