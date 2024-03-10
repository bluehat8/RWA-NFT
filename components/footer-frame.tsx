import type { NextPage } from "next";
import styles from "./footer-frame.module.css";

const FooterFrame: NextPage = () => {
  return (
    <section className={styles.footerFrame}>
      <div className={styles.assetsFrame}>
        <div className={styles.assetsFrameInner}>
          <div className={styles.whatAreRealWorldAssetsRwParent}>
            <h1 className={styles.whatAreRealWorldContainer}>
              <span>{`What are real-world assets `}</span>
              <span className={styles.rwas}>(RWAs)</span>
              <span>?</span>
            </h1>
            <div className={styles.frameWrapper}>
              <div className={styles.subtractParent}>
                <img
                  className={styles.subtractIcon}
                  alt=""
                  src="/subtract.svg"
                />
                <img
                  className={styles.ai4Icon}
                  loading="lazy"
                  alt=""
                  src="/6763ai-4@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rWAAwarenessFrame}>
          <div className={styles.realWorldAssetsRwasAreFParent}>
            <div className={styles.realWorldAssetsRwasContainer}>
              <span>
                <p className={styles.realWorldAssetsRwas}>
                  Real-world assets (RWAs) are fungible or non-fungible tokens
                  that represent traditional financial assets on the blockchain.
                  RWAs can represent tangible assets such as real estate or
                  intangible assets such as government bonds and carbon credits.
                </p>
                <p className={styles.p}>‍</p>
                <p className={styles.realWorldAssetTokenization}>
                  Real-world asset tokenization is the process of bringing these
                  assets on-chain as security tokens to take advantage of
                  blockchain technology. Any asset of value can be tokenized and
                  utilized on-chain in transactions.
                </p>
                <p className={styles.p1}>‍</p>
                <p
                  className={styles.securityTokensCan}
                >{`Security tokens can be issued to represent real-world assets that exist and are managed off-chain by custodians, or security tokens can be issued to serve as real-world assets themselves. `}</p>
              </span>
            </div>
            <div className={styles.exampleAssetFrame}>
              <div className={styles.forExampleAContainer}>
                <p className={styles.forExampleA}>
                  For example, a bond can be issued directly on-chain as a
                  token, or it can be issued and held off-chain.
                </p>
              </div>
              <div className={styles.readMoreGroup}>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameChild} />
                  <b className={styles.readMore}>Read more</b>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contactUsGroup}>
            <img
              className={styles.undrawCityGirlCcpd1Icon}
              loading="lazy"
              alt=""
              src="/undraw-city-girl-ccpd-1.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterFrame;
