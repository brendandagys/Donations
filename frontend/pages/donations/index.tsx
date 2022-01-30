import { Fragment, useState } from 'react'
import Link from 'next/link'
import withApollo from '../../lib/withApollo'
import { Donation, useAllDonationsQuery } from '../../generated'
import { getDataFromTree } from '@apollo/client/react/ssr'
import { get } from 'lodash'
import DonationCard from '../../components/DonationCard'
import styles from '../../styles/Users.module.css'

export const DonationsPageNoApollo = () => {
  const { data } = useAllDonationsQuery()
  const donations = get(data, 'donations', []) as Donation[]
  const [error, setError] = useState('')
  return (
    <>
      <Link href='/'>
        <button className={styles.button}>Go Home</button>
      </Link>
      <Link
        href={{ pathname: '/donations/[id]', query: { id: 'create' } }}
        as='donations/create'
      >
        <button className={styles.create}>Create New Donation</button>
      </Link>
      <p>{error}</p>
      {donations.length > 0 ? (
        donations.map((donation) => (
          <Fragment key={donation.id}>
            <DonationCard donation={donation} setError={setError} />
            <hr className={styles.hr} />
          </Fragment>
        ))
      ) : (
        <h2>No donations in database!</h2>
      )}
    </>
  )
}

export default withApollo(DonationsPageNoApollo, { getDataFromTree })
