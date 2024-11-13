import styles from './ContactHeader.module.css';

const ContactHeader = () => {
    console.log(styles);
    
  return (
    <div className={`${styles.contact}`}>
      <h1>Contact Us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Tempore nesciunt eius asperiores at ullam, quae doloremque. 
        Repellat illum iusto quis eius tempore impedit explicabo 
        quisquam aut reprehenderit quidem deleniti beatae maiores, 
        autem, temporibus porro voluptas libero. Ratione veritatis 
        qui nisi aut vero ipsa laboriosam. {" "}
      </p>
    </div>
  )
}

export default ContactHeader;
