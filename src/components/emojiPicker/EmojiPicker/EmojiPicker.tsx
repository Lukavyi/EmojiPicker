import React, { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";
import { debounce, throttle } from "lodash";
import { CATEGORIES, emojiList } from "../../../constants/emoji";
import { getFrequentlyUsed, updateFrequentlyUsed } from "../../../utils/frequentlyUsed";
import { search } from "../../../utils/search";
import Category from "../Category";
import CategoryPicker from "../CategoryPicker";
import Search from "../Search";
import { ICategory, IEmojiJSON } from "../../../types";

import styles from "./EmojiPicker.module.scss";
import transformUnicodeToEmoji from "../../../utils/transformUnicodeToEmoji";

interface Props {
  isOpen: boolean;
  onAddEmoji: (string) => void;
}

type RefCurrent = HTMLDivElement | null;

const throttleInterval = 150;

const EmojiPicker: React.FC<Props> = ({ isOpen, onAddEmoji }) => {
  const [searchTerm, setSearchTerm]: [string, (string) => void] = useState("");
  const [frequentlyUsed, setFrequentlyUsed] = useState(getFrequentlyUsed());
  const [selectedCategoryIndex, setSelectedCategoryIndex]: [number, (number) => void] = useState(0);
  const scrollContainerRef = useRef<RefCurrent>(null);
  const itemsRef = useRef<RefCurrent[]>([]);
  const searchRef = useRef<RefCurrent>(null);

  const getCategoryTop = categoryEl => {
    const searchHeight = searchRef.current ? searchRef.current.offsetHeight : 0;
    return categoryEl.offsetTop - searchHeight;
  };

  useLayoutEffect(() => {
    const updateCategoryPickerOnScroll = throttle(() => {
      if (!searchTerm) {
        const isItemsRefEmpty = itemsRef.current && itemsRef.current.filter(item => item).length === 0;
        if (itemsRef.current && scrollContainerRef.current && !isItemsRefEmpty) {
          const containerScrollTop = scrollContainerRef.current.scrollTop;
          const firstVisibleElement = itemsRef.current.findIndex(
            item => getCategoryTop(item) + item!.offsetHeight > containerScrollTop,
          );
          if (selectedCategoryIndex !== firstVisibleElement) {
            setSelectedCategoryIndex(firstVisibleElement);
          }
        }
      }
    }, throttleInterval);

    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener("scroll", updateCategoryPickerOnScroll);
    }

    return () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener("scroll", updateCategoryPickerOnScroll);
      }
    };
  });

  const setCategoryIndex = (index: number) => {
    setSelectedCategoryIndex(index);
    if (itemsRef.current[index] && scrollContainerRef.current) {
      // didn't use 'scrollIntoView' because of weird Edge behaviour
      scrollContainerRef.current.scrollTop = getCategoryTop(itemsRef.current[index]);
    }
  };

  const debouncedSearch = useCallback(debounce(setSearchTerm, 150), []);

  const addEmoji = useCallback(
    (emoji: IEmojiJSON) => {
      updateFrequentlyUsed(emoji);
      setFrequentlyUsed(getFrequentlyUsed());
      onAddEmoji(transformUnicodeToEmoji(emoji.unified));
    },
    [onAddEmoji],
  );

  const categories: ICategory[] = useMemo(() => {
    const result = [...CATEGORIES];
    result[0] = { ...result[0], emoji: frequentlyUsed };
    return result.filter(category => category.emoji.length > 0);
  }, [frequentlyUsed]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.heading}>Emoji</div>
      <div className={styles.scroll} ref={scrollContainerRef}>
        <div className={styles.search} ref={searchRef}>
          <Search onChange={debouncedSearch} />
        </div>
        {searchTerm ? (
          <div className={styles.searchResults}>
            <Category emojiArray={search(emojiList, searchTerm)} onAddEmoji={addEmoji} />
          </div>
        ) : (
          <div className={styles.paddingBottom}>
            {categories.map((category, index) => (
              <div
                key={category.name}
                ref={el => {
                  if (itemsRef.current) {
                    itemsRef.current[index] = el;
                  }
                }}
              >
                <Category categoryName={category.name} emojiArray={category.emoji} onAddEmoji={addEmoji} />
              </div>
            ))}
          </div>
        )}
      </div>
      {!searchTerm && (
        <CategoryPicker
          categories={categories}
          selectedCategoryIndex={selectedCategoryIndex}
          setSelectedCategoryIndex={setCategoryIndex}
        />
      )}
    </div>
  );
};

export default React.memo(EmojiPicker);
