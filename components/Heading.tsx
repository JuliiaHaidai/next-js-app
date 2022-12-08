import { FC } from "react";
import styles from "../styles/main.module.scss";

type HeadingProps = {
  tag?: keyof JSX.IntrinsicElements;
  text: string;
};

const Heading: FC<HeadingProps> = ({ tag, text }) => {
  const Tag = tag || "h1";
  return (
    <Tag className={styles.title}>{text}</Tag>
  );
};

export default Heading;
