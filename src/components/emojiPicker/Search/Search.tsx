import React from "react";
import searchIcon from "../../../images/search.svg";
import clearIcon from "../../../images/ic-close-16.svg";
import { SearchTerm } from "../../../types";

import styles from "./Search.module.scss";

type Props = {
  onChange: (value: string) => void;
  value: SearchTerm;
};

const Search: React.FC<Props> = ({ onChange, value }) => (
  <div className={styles.searchContainer}>
    <img src={searchIcon} alt="search icon" className={styles.searchIcon} />
    <input
      className={styles.searchInput}
      type="text"
      placeholder="Search"
      value={value}
      onChange={e => onChange(e.target.value)}
    />
    {value && (
      <button className={styles.clearButton} onClick={() => onChange("")}>
        <img src={clearIcon} alt="search icon" />
      </button>
    )}
  </div>
);

export default Search;
