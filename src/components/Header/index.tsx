import styles from './styles.module.scss';
import { SignInButton } from '../SingInButton';

export default function Header() {
  return (
    <header className={styles.headeContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="Logo ig.news" />
        <nav>
          <a href="#" className={styles.active} >Home</a>
          <a href="#">Posts</a>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
