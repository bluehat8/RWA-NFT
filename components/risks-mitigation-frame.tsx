import type { NextPage } from "next";
import styles from "./risks-mitigation-frame.module.css";

const RisksMitigationFrame: NextPage = () => {
  return (
    <div className={styles.risksMitigationFrame}>
      <div className={styles.whyChooseUsFrame}>
        <div className={styles.realworldAssetsFrame}>
          <div className={styles.subtractaiFrame}>
            <div className={styles.rWAFungibleFrame}>
              <h2 className={styles.buildRwaBased}>
                Build RWA based financial engines and systemitize them for
                growth
              </h2>
              <b className={styles.acquireAndHold}>
                Acquire and hold NFTs of financial assets linked to real-world
                goods to receive automatic dividends from their growth
              </b>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <b className={styles.getStarted}>get started</b>
            </div>
          </div>
        </div>
        <div className={styles.bimouseFrame}>
          <div className={styles.bimouseContainer}>
            <img className={styles.logo1Icon} alt="" src="/logo-1-1@2x.png" />
          </div>
          <img
            className={styles.bimouseIcon}
            loading="lazy"
            alt=""
            src="/bimouse.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default RisksMitigationFrame;
