import { IEmojiJSON, SearchTerm } from "../types";

const prepareString = (string: string): string => string.trim().toLowerCase();

export const search = (arrayToSearch: IEmojiJSON[], searchTerm: SearchTerm = ""): IEmojiJSON[] => {
  const preparedSearchTerm = prepareString(searchTerm);
  if (preparedSearchTerm === "") {
    return arrayToSearch;
  }

  return arrayToSearch.filter((item: IEmojiJSON) => {
    if (item.short_name) {
      return prepareString(item.short_name).includes(preparedSearchTerm);
    }
    if (item.name) {
      return prepareString(item.name).includes(preparedSearchTerm);
    }
    return false;
  });
};
