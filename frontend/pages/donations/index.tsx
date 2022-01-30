import { useState, Fragment } from 'react'
import Link from 'next/link'
import withApollo from '../../lib/withApollo'
import { getDataFromTree } from '@apollo/client/react/ssr'
import { Donation, useAllDonationsQuery } from '../../generated'
import DonationCard from '../../components/DonationCard'
import { get } from 'lodash'
import styles from '../../styles/Commons.module.css'

export const DonationsPageNoApollo = () => {
  const { data, loading } = useAllDonationsQuery()
  const donations = get(data, 'donations', []) as Donation[]
  const [error, setError] = useState('')

  if (loading) return <h3>Loading donations...</h3>

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

      {error ? <p className={styles.errorText}>{error}</p> : null}

      {donations.length > 0 ? (
        donations.map((donation) => (
          <Fragment key={donation.id}>
            <DonationCard donation={donation} setError={setError} />
            <hr className={styles.hr} />
          </Fragment>
        ))
      ) : (
        <h2 className={styles.center}>No donations in database!</h2>
      )}
    </>
  )
}

export default withApollo(DonationsPageNoApollo, { getDataFromTree })
