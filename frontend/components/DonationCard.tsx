import { Dispatch, SetStateAction } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Donation, useDeleteDonationMutation } from '../generated'
import styles from '../styles/Commons.module.css'

type DonationCardProps = {
  donation: Donation
  setError: Dispatch<SetStateAction<string>>
}

const DonationCard = ({ donation, setError }: DonationCardProps) => {
  const { id, user, amount, tip } = donation

  const router = useRouter()

  const refreshData = () => {
    router.replace(router.asPath)
  }

  const [deleteDonation, { loading, error }] = useDeleteDonationMutation()

  const handleDeleteDonation = (donationId: number) => {
    deleteDonation({ variables: { id: donationId } })
    refreshData()
  }

  const renderedDonor = (
    <div className={styles.donationBox}>
      {user ? (
        <>
          <p>
            <b>Donor:</b> {`${user.firstName} ${user.lastName}`}
          </p>

          <p>
            <b>Email:</b> {`${user.email}`}
          </p>
        </>
      ) : (
        <h3>This user is no longer registered</h3>
      )}
    </div>
  )

  if (error) setError(error.message)
  if (loading) return <h3>Deleting...</h3>

  return (
    <div className='flexContainer' key={id}>
      <div className={`${styles.flexItem} flexContainer`}>
        <div className={styles.fullwidth}>
          <p>
            <span>
              <b>Donation ID:</b> {`${id}`}
            </span>
          </p>
        </div>

        <div className={styles.fullwidth}>
          <p>
            <b>Amount</b>
          </p>
          <p>{`$${amount.toLocaleString()}`}</p>
        </div>

        <div className={styles.fullwidth}>
          <p>
            <b>Tip</b>
          </p>
          <p>{`$${tip.toLocaleString()}`}</p>
        </div>

        {renderedDonor}
      </div>
      <div className={styles.userActionsDiv}>
        <Link
          href={{ pathname: '/donations/[id]', query: { id } }}
          as={`/donations/${id}`}
        >
          <button className={styles.edit}>Edit Donation</button>
        </Link>

        <button
          onClick={() => handleDeleteDonation(id)}
          className={styles.delete}
        >
          Delete Donation
        </button>
      </div>
    </div>
  )
}

export default DonationCard
