import { useState, Dispatch, SetStateAction } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import DonationCard from './DonationChildCard'
import { User, useDeleteUserMutation } from '../generated'
import { USERS_QUERY_SELECT_INPUT } from '../graphql/queries/userQueries'
import styles from '../styles/Commons.module.css'

type UserCardProps = {
  user: User
  setError: Dispatch<SetStateAction<string>>
}

const UserCard = ({ user, setError }: UserCardProps) => {
  const { id, firstName, lastName, email, donations = [] } = user

  const [showDonations, setShowDonations] = useState(false)

  const router = useRouter()

  const refreshData = () => {
    router.replace(router.asPath)
  }

  const [deleteUser, { loading, error }] = useDeleteUserMutation({
    refetchQueries: [{ query: USERS_QUERY_SELECT_INPUT }],
  })

  const toggleDonations = () => {
    setShowDonations((prev) => !prev)
  }

  const handleDeleteUser = (userId: number) => {
    deleteUser({ variables: { id: userId } })
    refreshData()
  }

  const renderedDonations = donations.map(({ amount, tip }, index) => (
    <DonationCard
      donationNum={index + 1}
      amount={amount}
      tip={tip}
      key={index}
    />
  ))

  if (error) setError(`Delete error: ${error.message}`)
  if (loading) return <h3>Deleting...</h3>

  return (
    <div className='flexContainer' key={id}>
      <div className={`${styles.flexItem} flexContainer`}>
        <p className={styles.fullwidth}>
          <b>{`${firstName} ${lastName}`}</b>
        </p>

        <p className={styles.fullwidth}>
          <i>{email}</i>
        </p>
        <div>
          <button disabled={!(donations.length > 0)} onClick={toggleDonations}>
            View donations
          </button>
          <div>{showDonations && renderedDonations}</div>
        </div>
      </div>

      <div className={styles.userActionsDiv}>
        <Link
          href={{ pathname: '/users/[id]', query: { id } }}
          as={`/users/${id}`}
        >
          <button className={styles.edit}>Edit User</button>
        </Link>
        <button onClick={() => handleDeleteUser(id)} className={styles.delete}>
          Delete User
        </button>
      </div>
    </div>
  )
}

export default UserCard
