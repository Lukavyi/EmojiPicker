import React from "react";

import styles from "./Emoji.module.scss";
import { IEmojiJSON } from "../../../types";

interface Props {
  onAddEmoji: (IEmojiJSON) => void;
  emoji: IEmojiJSON;
}

const Emoji: React.FC<Props> = ({ emoji, onAddEmoji }) => (
  <div className={styles.emoji} onClick={() => onAddEmoji(emoji)}>
    <img
      src={`http://unpkg.com/emoji-datasource-apple@4.1.0/img/apple/64/${emoji.image}`}
      alt={emoji.short_name}
      className={styles.icon}
    />
  </div>
);

export default Emoji;
