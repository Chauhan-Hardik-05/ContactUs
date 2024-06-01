import Button from "./Button";
import styles from "./cotactForm.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const ContactForm = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contactForm}>
        <div className={styles.topBtn}>
          <Button
            icon={<MdMessage fontSize="24px" />}
            text="VIA SUPPORT CHAT"
          />
          <Button icon={<FaPhoneAlt fontSize="24px" />} text="VIA CALL" />
        </div>
        <Button
          icon={<HiMail fontSize="24px" />}
          text="VIA EMAIL FORM"
          isOutline="true"
        />

        <form>
          <div className={styles.formControl}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="text">Text</label>
            <textarea type="text" rows="10" name="text" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT" />
          </div>
        </form>
      </div>
      <div className={styles.contactImg}>
        <img src="./images/service.svg" alt="service" />
      </div>
    </section>
  );
};

export default ContactForm;
