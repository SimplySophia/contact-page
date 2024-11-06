import { MdMessage } from "react-icons/md";
import styles from './Button.module.css';
const Button = () => {
  return (
    <button className={styles.primary}>
      <MdMessage />
      VIA SUPPORT CHAT
    </button>
  )
}

export default Button
