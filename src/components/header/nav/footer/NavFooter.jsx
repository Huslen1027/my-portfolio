import styles from "./style.module.scss";
import { useRouter } from "next/navigation";
const NavFooter = () => {
  const router = useRouter();
  return (
    <div className={styles.footer}>
      <a>Awwwards</a>
      <a
        onClick={() =>
          router.push("https://www.instagram.com/husle_1/", "_blank")
        }
      >
        Instagram
      </a>
      <a
        onClick={() =>
          router.push(
            "https://www.facebook.com/profile.php?id=100083827608649",
            "_blank"
          )
        }
      >
        facebook
      </a>
    </div>
  );
};

export default NavFooter;
