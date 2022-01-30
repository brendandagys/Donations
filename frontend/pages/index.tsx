import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home = () => (
  <div>
    <div className='flexContainer'>
      <Link href='/donations'>
        <div className={`${styles.flexItem} flexContainer`}>
          <a>Click to view and update our list of donations.</a>
        </div>
      </Link>
      <Link href='/users'>
        <div className={`${styles.flexItem} flexContainer`}>
          <a>Click to view and update our list of users.</a>
        </div>
      </Link>
    </div>
  </div>
)

export default Home
