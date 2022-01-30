import styles from '../styles/Users.module.css'

const DonationCard = ({ donationNum, amount, tip }) => (
  <div className={styles.donationBox}>
    <p>
      <u>Donation {donationNum}</u>
    </p>
    <p>
      <b>Amount</b>: {`$${amount.toLocaleString()}`}
    </p>
    <p>
      <b>Tip</b>: {`$${tip.toLocaleString()}`}
    </p>
  </div>
)

export default DonationCard
