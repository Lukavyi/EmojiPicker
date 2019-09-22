import React from "react";
import Emoji from "../Emoji";
import { EmojiCategory, IEmojiJSON, OnAddEmoji } from "../../../types";

import styles from "./Category.module.scss";

interface Props {
  categoryName?: EmojiCategory;
  emojiArray: IEmojiJSON[];
  onAddEmoji: OnAddEmoji;
}

const Category: React.FC<Props> = ({ categoryName = "", emojiArray = [], onAddEmoji }) => (
  <div>
    {categoryName && <div className={styles.categoryName}>{categoryName}</div>}
    <div className={styles.emojiList}>
      {emojiArray.map(emoji => (
        <Emoji key={emoji.short_name} onAddEmoji={onAddEmoji} emoji={emoji} />
      ))}
    </div>
  </div>
);

export default React.memo(Category);
