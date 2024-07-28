import { motion } from "framer-motion";
import styles from "./style.module.scss";
import Link from "./link";
import Curve from "./curve";
import Footer from "./footer";
import { useState } from "react";
import { usePathname } from "next/navigation";
const newItems = [
  {
    title: "Home ",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];
const Index = () => {
  const Pathname = usePathname();
  const [selectIndicator, setSelectindicator] = useState(Pathname);
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div className={styles.nav}>
          <div className={styles.header}>
            <p>Navigation</p>
            {newItems.map((data, index) => {
              return (
                <Link
                  data={{ ...data, index }}
                  key={index}
                  isActive={selectIndicator == data.href}
                  selectIndicator={setSelectindicator}
                ></Link>
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    </motion.div>
  );
};

export default Index;
