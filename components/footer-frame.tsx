import type { NextPage } from "next";
import styles from "./footer-frame.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';


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
        {/* <div className={styles.rWAAwarenessFrame}>
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
        </div> */}
<div className={`container ${styles.container}`}>
  <div className="row">
    <div className="col-lg-6 mb-4">
      <div className="card h-100 border-0">
        <div className="card-body">
          <p className={`card-text ${styles.fontsize}`}>
            Real-world assets (RWAs) are tokens representing traditional financial assets on the blockchain. They can represent tangible assets like real estate or intangible assets like government bonds and carbon credits.
          </p>

          <p className="card-text text-left">
            Real-world asset tokenization is the process of bringing these assets on-chain as security tokens to take advantage of blockchain technology. Any asset of value can be tokenized and utilized on-chain in transactions.
          </p>

          <p className="card-text">
            Security tokens can be issued to represent real-world assets that exist and are managed off-chain by custodians, or security tokens can be issued to serve as real-world assets themselves.
          </p>

          <p className="card-text">
            For example, a bond can be issued directly on-chain as a token, or it can be issued and held off-chain.
          </p>
        </div>
        <div className="text-center w-100">
          <button className={`btn btn-primary ${styles.customWidth85}`}>Read more</button>
        </div>
      </div>
    </div>

    <div className="col-lg-6 mb-4 mt-5">
      <div className="row">
        <div className="col-12 text-center">
          <img
            className="undrawCityGirlCcpd1Icon img-fluid"
            loading="lazy"
            alt=""
            src="/undraw-city-girl-ccpd-1.svg"
          />
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default FooterFrame;
