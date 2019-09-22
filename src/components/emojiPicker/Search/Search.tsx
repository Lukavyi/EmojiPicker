import React, { useState } from "react";
import searchIcon from "../../../images/search.svg";
import clearIcon from "../../../images/ic-close-16.svg";

import styles from "./Search.module.scss";

type Props = {
  onChange: (value: string) => void;
};

const Search: React.FC<Props> = ({ onChange }) => {
  const [value, setValue] = useState("");

  const handleChange = value => {
    setValue(value);
    onChange(value);
  };

  return (
    <div className={styles.searchContainer}>
      <img src={searchIcon} alt="search icon" className={styles.searchIcon} />
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search"
        value={value}
        onChange={e => handleChange(e.target.value)}
      />
      {value && (
        <button className={styles.clearButton} onClick={() => handleChange("")}>
          <img src={clearIcon} alt="search icon" />
        </button>
      )}
    </div>
  );
};

export default Search;
