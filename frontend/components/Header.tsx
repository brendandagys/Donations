import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <header>
      <h1 className={styles.title}>
        <span>Donations</span> App
      </h1>

      <p className={styles.description}>View our donations and users!</p>
    </header>
  )
}

export default Header
