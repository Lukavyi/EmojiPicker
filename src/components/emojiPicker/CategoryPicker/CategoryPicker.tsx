import React from "react";
import { ICategory } from "../../../types";

import styles from "./CategoryPicker.module.scss";

interface Props {
  categories: ICategory[];
  selectedCategoryIndex: number;
  setSelectedCategoryIndex: (number) => void;
}

const CategoryPicker: React.FC<Props> = ({ categories, selectedCategoryIndex, setSelectedCategoryIndex }) => {
  const iconWidth = 100 / categories.length;

  return (
    <div className={styles.categories}>
      <div className={styles.categoriesList}>
        <div
          className={styles.selected}
          style={{ left: `${selectedCategoryIndex * iconWidth}%`, width: `${iconWidth}%` }}
        />
        {categories.map((category, index) => (
          <div className={styles.category} key={category.name} onClick={() => setSelectedCategoryIndex(index)}>
            <img
              className={styles.icon}
              src={selectedCategoryIndex === index ? category.icon.selected : category.icon.base}
              alt={category.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPicker;
