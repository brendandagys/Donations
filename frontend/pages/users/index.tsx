import { Fragment, useState } from 'react'
import Link from 'next/link'
import withApollo from '../../lib/withApollo'
import { User, useAllUsersQuery } from '../../generated'
import { getDataFromTree } from '@apollo/client/react/ssr'
import { get } from 'lodash'
import UserCard from '../../components/UserCard'
import styles from '../../styles/Users.module.css'

export const UsersPageNoApollo = () => {
  const { data, loading } = useAllUsersQuery()
  const users = get(data, 'users', []) as User[]
  const [error, setError] = useState('')

  if (loading) return <h3>Loading...</h3>

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
      <p>{error}</p>
      {users.length > 0 ? (
        users.map((user) => (
          <Fragment key={user.id}>
            <UserCard user={user} setError={setError} />
            <hr className={styles.hr} />
          </Fragment>
        ))
      ) : (
        <h2>No users in database!</h2>
      )}
    </>
  )
}

export default withApollo(UsersPageNoApollo, { getDataFromTree })
