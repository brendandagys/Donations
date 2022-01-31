import { useState } from 'react'
import { useRouter } from 'next/router'
import {
  OneDonationQuery,
  useCreateDonationMutation,
  useUpdateDonationMutation,
  AllUsersSelectInputQuery,
} from '../generated'
import styles from '../styles/User.module.css'

type DonationFormProps = {
  donation?: OneDonationQuery['donation']
  selectOptions: AllUsersSelectInputQuery
}

const DonationForm = ({ donation, selectOptions }: DonationFormProps) => {
  const router = useRouter()

  const [amount, setAmount] = useState(donation ? donation.amount : 0)
  const [tip, setTip] = useState(donation ? donation.tip : 0)
  const [userId, setUserId] = useState(donation?.user?.id?.toString() || '1')

  const [createDonation, { loading: createLoading, error: createError }] =
    useCreateDonationMutation()

  const [updateDonation, { loading: updateLoading, error: updateError }] =
    useUpdateDonationMutation()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    donation
      ? updateDonation({
          variables: {
            id: donation.id,
            amount,
            tip,
            userId: parseInt(userId),
          },
        })
      : createDonation({
          variables: { amount, tip, userId: parseInt(userId) },
        })
    router.push('/donations')
  }

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
      <form onSubmit={handleSubmit}>
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
          {donation ? 'Update Donation' : 'Create Donation'}
        </button>
      </form>
    </div>
  )
}

export default DonationForm
