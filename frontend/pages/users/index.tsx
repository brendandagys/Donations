import { useState, Fragment } from 'react'
import Link from 'next/link'
import withApollo, { initApolloClient } from '../../lib/withApollo'
import { User } from '../../generated'
import { USERS_QUERY } from '../../graphql/queries/userQueries'
import UserCard from '../../components/UserCard'
import { get } from 'lodash'
import styles from '../../styles/Commons.module.css'

export const UsersPageNoApollo = ({ data, loading }) => {
  const users = get(data, 'users', []) as User[]
  const [error, setError] = useState('')

  if (loading) return <h3>Loading users...</h3>

  return (
    <>
      <Link href='/'>
        <button className={styles.button}>Go Home</button>
      </Link>

      <Link
        href={{ pathname: '/users/[id]', query: { id: 'create' } }}
        as='users/create'
      >
        <button className={styles.create}>Create New User</button>
      </Link>

      {error ? <p className={styles.errorText}>{error}</p> : null}

      {users.length > 0 ? (
        users.map((user) => (
          <Fragment key={user.id}>
            <UserCard user={user} setError={setError} />
            <hr className={styles.hr} />
          </Fragment>
        ))
      ) : (
        <h2 className={styles.center}>No users in database!</h2>
      )}
    </>
  )
}

export async function getServerSideProps() {
  const apolloClient = initApolloClient()

  const { data, loading } = await apolloClient.query({
    query: USERS_QUERY,
  })

  return { props: { data, loading } }
}

export default withApollo(UsersPageNoApollo)
