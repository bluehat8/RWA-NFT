import type { NextPage } from "next";
import styles from "./group-component.module.css";

const GroupComponent: NextPage = () => {
  return (
    <header className={styles.fRAMEHomeParent}>
      <div className={styles.fRAMEHome} />
      <img
        className={styles.logo1Icon}
        loading="lazy"
        alt=""
        src="/logo-1@2x.png"
      />
      <div className={styles.contactusFrame}>
        <div className={styles.wALLETFrame}>
          <div className={styles.groupHomeAboutusContactus}>
            <div className={styles.wallet}>WALLET</div>
          </div>
          <div className={styles.home}>Home</div>
          <div className={styles.aboutUs}>About</div>
          <div className={styles.contactUs}>Contact us</div>
        </div>
      </div>
    </header>
  );
};

export default GroupComponent;
