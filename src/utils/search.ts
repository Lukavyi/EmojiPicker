import { IEmojiJSON, SearchTerm } from "../types";

export const search = (arrayToSearch: IEmojiJSON[], searchTerm: SearchTerm = ""): IEmojiJSON[] => {
  if (searchTerm === "") {
    return arrayToSearch;
  }

  return arrayToSearch.filter((item: IEmojiJSON) =>
    item.short_name.toLowerCase().includes(searchTerm.trim().toLowerCase()),
  );
};
