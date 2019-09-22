import React from "react";
import { ICategory } from "../../../types";

import styles from "./CategoryPicker.module.scss";

interface Props {
  categories: ICategory[];
  selectedCategoryIndex: number;
  setSelectedCategoryIndex: (number) => void;
}

const containerPadding = parseInt(styles.containerPadding);

const CategoryPicker: React.FC<Props> = ({ categories, selectedCategoryIndex, setSelectedCategoryIndex }) => {
  const selectedWidth = 320 / categories.length;
  return (
    <div className={styles.categories}>
      <div
        className={styles.selected}
        style={{ left: containerPadding + selectedCategoryIndex * selectedWidth, width: selectedWidth }}
      />
      {categories.map((category, index) => (
        <div className={styles.categoryName} key={category.name} onClick={() => setSelectedCategoryIndex(index)}>
          <img
            className={styles.icon}
            src={selectedCategoryIndex === index ? category.icon.selected : category.icon.base}
            alt={category.name}
          />
        </div>
      ))}
    </div>
  );
};

export default CategoryPicker;
