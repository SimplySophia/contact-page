import styles from './Navigation.module.css';

const Navbar = () => {
  console.log(styles);
  
  return (
    <nav className={`${styles.navigation} container`}>
      <div className='logo'>
        <img src='/images/image 2.png' alt='logo' />
      </div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar;
