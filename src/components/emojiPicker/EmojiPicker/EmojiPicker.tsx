import React, { useState } from "react";
import cx from "classnames";
import { CATEGORIES, emojiList } from "../../../constants/emoji";
import { getFrequentlyUsed, updateFrequentlyUsed } from "../../../utils/frequentlyUsed";
import { search } from "../../../utils/search";
import Category from "../Category";
import CategoryPicker from "../CategoryPicker";
import Search from "../Search";
import { IEmojiJSON } from "../../../types";

import styles from "./EmojiPicker.module.scss";
import transformUnicodeToEmoji from "../../../utils/transformUnicodeToEmoji";

interface Props {
  isOpen: boolean;
  onAddEmoji: (string) => void;
}

const EmojiPicker: React.FC<Props> = ({ isOpen, onAddEmoji }) => {
  const [searchTerm, setSearchTerm]: [string, (string) => void] = useState("");
  const [frequentlyUsed, setFrequentlyUsed] = useState(getFrequentlyUsed());
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  if (!isOpen) {
    return null;
  }

  const addEmoji = (emoji: IEmojiJSON) => {
    updateFrequentlyUsed(emoji);
    setFrequentlyUsed(getFrequentlyUsed());

    onAddEmoji(transformUnicodeToEmoji(emoji.unified));
  };

  return (
    <div className={styles.container}>
      <div className={styles.heading}>Emoji</div>
      <div className={cx(styles.scroll, searchTerm && styles.scrollTall)}>
        <div className={styles.search}>
          <Search onChange={setSearchTerm} value={searchTerm} />
        </div>
        {searchTerm ? (
          <div className={styles.scrollSearch}>
            <Category emojiArray={search(emojiList, searchTerm)} onAddEmoji={onAddEmoji} />
          </div>
        ) : (
          <>
            <Category categoryName="Frequently used" emojiArray={frequentlyUsed} onAddEmoji={addEmoji} />
            {CATEGORIES.map(category => (
              <Category
                key={category.name}
                categoryName={category.name}
                emojiArray={category.emoji}
                onAddEmoji={addEmoji}
              />
            ))}
          </>
        )}
      </div>
      {!searchTerm && (
        <CategoryPicker
          categories={CATEGORIES}
          selectedCategoryIndex={selectedCategoryIndex}
          setSelectedCategoryIndex={setSelectedCategoryIndex}
        />
      )}
    </div>
  );
};

export default EmojiPicker;
