import React, { useCallback, useState } from "react";
import EmojiPicker from "../emojiPicker/EmojiPicker";

import styles from "./App.module.scss";

const App = () => {
  const [inputValue, setInputValue]: [string, (string) => void] = useState("");

  const appendEmoji = useCallback((emoji: string) => setInputValue(inputValue => inputValue + emoji), []);

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Openland test</h1>
      <input
        className={styles.input}
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder="emoji will appear here"
      />
      <EmojiPicker isOpen onAddEmoji={appendEmoji} />
    </div>
  );
};

export default App;
