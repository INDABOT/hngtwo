import Logo from "../../assets/Frame 1618871078.svg";
import Button from "../Button";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.LogoCtn}>
        <img src={Logo} alt="" />
      </div>
      <ul className={styles.nav}>
        <li>Events</li>
        <li>My Ticket </li>
        <li>About Product</li>
      </ul>
      <Button/>
    </div>
  );
};

export default Header;
