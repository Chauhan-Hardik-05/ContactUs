import styles from "./navigation.module.css";
const Navigation = () => {
  return (
    <nav className="container">
      <div>
        <img className={styles.logo} src="./images/shiv.png" alt="logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navigation;
