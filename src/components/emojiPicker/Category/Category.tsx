import React from "react";
import Emoji from "../Emoji";
import { EmojiCategory, IEmojiJSON, OnAddEmoji } from "../../../types";

import styles from "./Category.module.scss";

interface Props {
  categoryName?: EmojiCategory;
  emojiArray?: IEmojiJSON[];
  onAddEmoji: OnAddEmoji;
}

const Category: React.FC<Props> = ({ categoryName = "", emojiArray = [], onAddEmoji }) => {
  if (emojiArray.length === 0) {
    return null;
  }

  return (
    <div>
      {categoryName && <div className={styles.categoryName}>{categoryName}</div>}
      <div className={styles.emojiList}>
        {emojiArray.map(emoji => (
          <Emoji key={emoji.short_name} onClick={() => onAddEmoji(emoji)} emoji={emoji} />
        ))}
      </div>
    </div>
  );
};

export default Category;
