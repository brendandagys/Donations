import Link from 'next/link'
import styles from '../styles/NavBar.module.css'

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>

        <li>
          <Link href='/users'>Users</Link>
        </li>

        <li>
          <Link href='/donations'>Donations</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
