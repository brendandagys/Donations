import Link from 'next/link'
import styles from '../styles/Users.module.css'
import { useState } from 'react'
import DonationCard from './DonationCard'
import { useDeleteUserMutation, User } from '../generated'

type UserCardProps = {
  user: User
}

const UserCard = ({ user }: UserCardProps) => {
  const { id, firstName, lastName, email, donations = [] } = user

  const [showDonations, setShowDonations] = useState(false)

  const [deleteUser, { data, loading, error }] = useDeleteUserMutation({
    refetchQueries: ['AllUsers'],
  })

  const toggleDonations = () => {
    setShowDonations((prev) => !prev)
  }

  const handleDeleteUser = (userId: number) =>
    deleteUser({ variables: { id: userId } })

  const renderedDonations = donations.map(({ amount, tip }, index) => (
    <DonationCard
      donationNum={index + 1}
      amount={amount}
      tip={tip}
      key={index}
    />
  ))

  return (
    <div className='flexContainer' key={id}>
      <div className={`${styles.flexItem} flexContainer`}>
        <b>
          <p>{`${firstName} ${lastName}`}</p>
        </b>

        <i>
          <p>{email}</p>
        </i>
        <div>
          <button onClick={toggleDonations}>View donations</button>
          <div>{showDonations && renderedDonations}</div>
        </div>
      </div>
      <div className={styles.userActionsDiv}>
        <Link
          href={{ pathname: '/users/[id]', query: { id } }}
          as={`/users/${id}`}
        >
          <button
            // onClick={() => handleToggleForm('update')}
            className={styles.edit}
          >
            Edit User
          </button>
        </Link>
        <button onClick={() => handleDeleteUser(id)} className={styles.delete}>
          Delete User
        </button>
      </div>
    </div>
  )
}

export default UserCard
