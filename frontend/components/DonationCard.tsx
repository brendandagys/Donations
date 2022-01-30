import Link from 'next/link'
import styles from '../styles/Users.module.css'
import { Donation, useDeleteDonationMutation } from '../generated'
import { Dispatch, SetStateAction } from 'react'
import { USERS_QUERY } from '../graphql/queries/userQueries'

type DonationCardProps = {
  donation: Donation
  setError: Dispatch<SetStateAction<string>>
}

const DonationCard = ({ donation, setError }: DonationCardProps) => {
  const { id, user, amount, tip } = donation

  const [deleteDonation, { data, loading, error }] = useDeleteDonationMutation({
    refetchQueries: [{ query: USERS_QUERY }, 'AllDonations'],
  })

  const handleDeleteDonation = (donationId: number) =>
    deleteDonation({ variables: { id: donationId } })

  const renderedDonor = (
    <div className={styles.donationBox}>
      {user ? (
        <>
          <p>
            <small>
              <b>Donor:</b> {`${user.firstName} ${user.lastName}`}
            </small>
          </p>
          <p>
            <small>
              <b>Email:</b> {`${user.email}`}
            </small>
          </p>{' '}
        </>
      ) : (
        <h3>This user is no longer registered</h3>
      )}
    </div>
  )

  if (error) setError(error.message)
  // if (loading) return <h3>Deleting...</h3>

  return (
    <div className='flexContainer' key={id}>
      <div className={`${styles.flexItem} flexContainer`}>
        <div style={{ width: '100%' }}>
          <b>
            <p>Amount</p>
          </b>
          <p>{`$${amount.toLocaleString()}`}</p>
        </div>
        <div style={{ width: '100%' }}>
          <b>
            <p>Tip</p>
          </b>
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
