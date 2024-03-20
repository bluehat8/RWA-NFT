import type { NextPage } from "next";
import EmailAddress from "./email-address";
import styles from "./social-media-links.module.css";
import { useState } from "react";

const SocialMediaLinks: NextPage = () => {
  const [message, setMessage] = useState('')
  const handleSubmit = async(event) =>{
    event.preventDefoult()
    const data = new FormData(event.target)
    const response = await fetch(event.target.action,{
      method: 'POST',
      body: data,
      headers:{
        Accept: 'application\json'
      }
    })
    const result = await Response.json()
    if(!Response.ok){
      setMessage(result.error.map(error => error.message).join(', '))
      return false
    }
  }
  return (
    <section className={styles.socialMediaLinks}>
      <div className={styles.socialMediaLinksChild} />
      <div className={styles.helpCenterFrame}>
        <img
          className={styles.helpCenterFrameChild}
          loading="lazy"
          alt=""
          src="/group-81.svg"
        />
        <div className={styles.contactUsFrame}>
          <div className={styles.submitButton}>
            <div className={styles.riskMitigation}>
              <h1 className={styles.contactUs}>Contact us</h1>
              <div className={styles.useTheForm}>
                Use the form below to contact us. Please be as detailed and
                precise as possible.
              </div>
            </div>
            
            <form action="https://formspree.io/f/mlevjnkn" method="POST" onSubmit={handleSubmit}>
              <label className="name">Name</label>
              <input placeholder="Your Name" type="text" id="name" name="name" className={styles.input}/>
              <label className="Email">Email address</label>
              <input placeholder="Your E-mail" type="email" id="email" name="email" className={styles.input}/>
              <label className="Message">Message</label>
              <textarea placeholder="Your Message" type="text" id="Message" name="Message" className={`${styles.input} ${styles.textarea}`} />
              <button className={styles.button}>Submit</button>
            </form>
            
          </div>
        </div>
      </div>
      {/* <footer className={styles.footer}>
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
      </footer> */}
    </section>
  );
};

export default SocialMediaLinks;
