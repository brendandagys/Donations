import { ReactNode } from 'react'
import Head from 'next/head'
import Header from './Header'
import NavBar from './NavBar'
import styles from '../styles/Layout.module.css'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Donations App' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <NavBar />
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        {children}
      </main>
    </div>
    <footer className={styles.footer}>
      <hr />
      <span>Thanks for visiting! &nbsp;&nbsp;&copy; 2022</span>
    </footer>
  </div>
)

export default Layout
