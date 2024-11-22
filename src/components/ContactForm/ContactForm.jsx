import styles from './ContactForm.module.css';
import Button from '../Button/Button';
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from 'react';



const ContactForm = () => {
  const [name, setName] = useState("Sophire");
  const [email, setEmail] = useState("sophire@gmail.com")
  const [text, setText] = useState("I am Beautiful")


  const onSubmit = (e) => {
    e.preventDefault();

   setName(e.target[0].value);
   setEmail(e.target[1].value);
   setText(e.target[2].value);

   
  };
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
      <div className={styles.top_btn}>
      <Button 
        text="VIA SUPPORT CHAT" 
        icon={<MdMessage/>} />
      <Button 
        text="VIA CALL" 
        icon={<FaPhoneAlt/>} />
      </div>
      <Button 
        isOutline={true} 
        text="VIA EMAIL FORM" 
        icon={<MdEmail />} 
      />
        <form onSubmit={onSubmit}>
          <div className={styles.form_container}>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' />
          </div>
          <div className={styles.form_container}>
          <label htmlFor='email'>Email</label>
          <input type='text' name='email' />
          </div>
          <div className={styles.form_container}>
          <label htmlFor='name'>Text</label>
          <textarea name="textarea" rows={5} />
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'end',
          }}>
          <Button text="SUBMIT BUTTON" />
          </div>
          <div>{name + " " + email + " " + text}</div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src='/images/contact-image.png' alt='contact image' />
      </div>
    </section>
  )
}

export default ContactForm;
