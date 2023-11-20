import styles from "./Header.module.css";

import logo from "../assets/logo.png";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <img src={logo} alt="Logo Todo" />
      </div>
    </header>
  );
}
