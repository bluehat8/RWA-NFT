import type { NextPage } from "next";
import GroupComponent from "../components/group-component";
import RisksMitigationFrame from "../components/risks-mitigation-frame";
import FooterFrame from "../components/footer-frame";
import BuildSystematizeRectangles from "../components/build-systematize-rectangles";
import SocialMediaLinks from "../components/social-media-links";
import styles from "./index.module.css";

const RWAdrops: NextPage = () => {
  return (
    <div className={styles.rwadrops}>
      <section className={styles.headerFrame}>
        <div className={styles.logoFrame}>
          <div className={styles.logoFrameChild} />
          <GroupComponent />
          <RisksMitigationFrame />
        </div>
      </section>
      <FooterFrame />
      <section className={styles.riskMitigationRectangle}>
        <div className={styles.mitigateRisksToSecurityAndWrapper}>
          <h1 className={styles.mitigateRisksToContainer}>
            <span>
              <span className={styles.m}>m</span>
            </span>
            <span className={styles.itigateRisksToSecurityAnd}>
              <span>{`itigate risks to security and compliance with `}</span>
              <span className={styles.rwadrops1}>RWAdrops</span>
              <span>, the blockchain purpose-built for real-world assets</span>
            </span>
          </h1>
        </div>
        <img
          className={styles.whyChooseUsFrame}
          loading="lazy"
          alt=""
          src="/rectangle-63@2x.png"
        />
      </section>
      <section className={styles.footerFrame}>
        <div className={styles.realworldAssetsInfoParent}>
          <div className={styles.realworldAssetsInfo}>
            <h2 className={styles.whyChooseUs}>Why choose us</h2>
          </div>
          <div className={styles.contactForm}>
            <BuildSystematizeRectangles
              wE="WE:"
              buildRWABasedFinancialEng="Build RWA based financial engines and systematize them for growth"
            />
            <BuildSystematizeRectangles
              wE="YOU:"
              buildRWABasedFinancialEng="Hold  RWA-NFTs, get recurring income, and help bring in the metaverse of finance"
            />
          </div>
        </div>
      </section>
      <SocialMediaLinks />
    </div>
  );
};

export default RWAdrops;
