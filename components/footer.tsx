import { NextPage } from "next";
import { Container, Row, Col } from "react-bootstrap";
import EmailAddress from "./email-address";
import styles from "./social-media-links.module.css";

const Footer: NextPage = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.footerChild} />
        <div className={styles.socialMediaFrame}>
          <b className={styles.socialMedia}>Social Media</b>
          <div className={styles.discordLink}>
            <div className={styles.discordIcon}>
              <img
                className={styles.skillIconsDiscord11}
                loading="lazy"
                alt=""
                src="/skilliconsdiscord-1-1@2x.png"
              />
              <div className={styles.socialMediaIcons}>
                <div className={styles.discord}>Discord</div>
              </div>
            </div>
            <div className={styles.vectorXInstagram1}>
              <div className={styles.emailAddressForm}>
                <img
                  className={styles.discordLogoIcon}
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
                <div className={styles.instagramLogo}>
                  <div className={styles.x}>X</div>
                </div>
              </div>
              <div className={styles.emailAddressForm1}>
                <img className={styles.vectorIcon} alt="" src="/vector-1.svg" />
                <div className={styles.instagramWrapper}>
                  <div className={styles.instagram}>Instagram</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.supportFrame}>
          <b className={styles.support}>Support</b>
          <div className={styles.contactUsFrame1}>
            <div className={styles.helpCenter}>Help center</div>
            <div className={styles.contactUs1}>Contact us</div>
            <div className={styles.aboutUs}>About us</div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
