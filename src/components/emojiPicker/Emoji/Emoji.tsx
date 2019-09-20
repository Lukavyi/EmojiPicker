import React from "react";

import styles from "./Emoji.module.scss";
import { IEmojiJSON } from "../../../types";

interface Props {
  onClick: () => void;
  emoji: IEmojiJSON;
}

const Emoji: React.FC<Props> = ({ emoji, onClick }) => (
  <div className={styles.emoji} onClick={onClick}>
    <img
      src={`http://unpkg.com/emoji-datasource-apple@4.1.0/img/apple/64/${emoji.image}`}
      alt={emoji.short_name}
      className={styles.icon}
    />
  </div>
);

export default Emoji;
