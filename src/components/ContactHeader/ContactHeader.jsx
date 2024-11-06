import styles from './ContactHeader.module.css';

const ContactHeader = () => {
    console.log(styles);
    
  return (
    <div className={`container ${styles.contact}`}>
      <h1>Contact Us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Perferendis sint explicabo necessitatibus quae nulla odit 
        natus debitis consectetur iure veniam.
      </p>
    </div>
  )
}

export default ContactHeader;
