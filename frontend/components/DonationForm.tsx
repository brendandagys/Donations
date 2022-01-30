import { useState } from 'react'
import { useRouter } from 'next/router'
import {
  OneDonationQuery,
  useCreateDonationMutation,
  useUpdateDonationMutation,
  AllUsersSelectInputQuery,
} from '../generated'
import { USERS_QUERY } from '../graphql/queries/userQueries'
import styles from '../styles/User.module.css'
import { DONATIONS_QUERY } from '../graphql/queries/donationQueries'

type DonationFormProps = {
  donation?: OneDonationQuery['donation']
  selectOptions: AllUsersSelectInputQuery
}

const DonationForm = ({ donation, selectOptions }: DonationFormProps) => {
  const router = useRouter()

  const [amount, setAmount] = useState(donation ? donation.amount : 0)
  const [tip, setTip] = useState(donation ? donation.tip : 0)
  const [userId, setUserId] = useState(
    donation ? donation.user.id.toString() : '1'
  )

  const [
    createDonation,
    { data: createData, loading: createLoading, error: createError },
  ] = useCreateDonationMutation({
    refetchQueries: [{ query: USERS_QUERY }, { query: DONATIONS_QUERY }],
  })
  const [
    updateDonation,
    { data: updateData, loading: updateLoading, error: updateError },
  ] = useUpdateDonationMutation({
    refetchQueries: [{ query: USERS_QUERY }, { query: DONATIONS_QUERY }],
  })

  const renderedSelectOptions = selectOptions?.users.map(
    ({ id, firstName, lastName }) => (
      <option key={id} value={id}>{`${firstName} ${lastName}`}</option>
    )
  )

  if (createLoading || updateLoading) return <h3>Submitting...</h3>
  if (createError || updateError)
    return <h3>{`Submission error! ${{ createError, updateError }}`}</h3>

  return (
    <div className={styles.form}>
      <form
        onSubmit={(e) => {
          e.preventDefault()

          if (!donation) {
            createDonation({
              variables: { amount, tip, userId: parseInt(userId) },
            })
            router.push('/donations')
          } else {
            updateDonation({
              variables: {
                id: donation.id,
                amount,
                tip,
                userId: parseInt(userId),
              },
            })
          }
        }}
      >
        <label>
          User
          <select
            className={styles.select}
            value={userId}
            placeholder='User...'
            onChange={(e) => setUserId(e.target.value)}
          >
            {renderedSelectOptions}
          </select>
        </label>
        <label>
          Amount
          <input
            type='number'
            value={amount.toString()}
            placeholder='Amount...'
            onChange={(e) => setAmount(parseFloat(e.target.value))}
          />
        </label>
        <label>
          Tip
          <input
            type='number'
            value={tip.toString()}
            placeholder='Tip...'
            onChange={(e) => setTip(parseFloat(e.target.value))}
          />
        </label>

        <button type='submit'>
          {!donation ? 'Create Donation' : 'Update Donation'}
        </button>
      </form>
    </div>
  )
}

export default DonationForm
