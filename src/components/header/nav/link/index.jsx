import styles from "./style.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

const Index = ({ data, isActive, setSelectIndicator }) => {
  const { title, href, index } = data;
  return (
    <motion.div
      className={styles.link}
      onMouseEnter={() => {
        setSelectIndicator(href);
      }}
      custom={index}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        animate={isActive ? "open" : "closed"}
        className={styles.indicator}
      ></motion.div>
      <Link href={href}>{title}</Link>
    </motion.div>
  );
};

export default Index;
