import { useState } from 'react'
import Link from 'next/link'
import withApollo from '../../lib/withApollo'
import { User, useAllUsersQuery } from '../../generated'
import { getDataFromTree } from '@apollo/client/react/ssr'
import { get } from 'lodash'
import UserCard from '../../components/UserCard'
import styles from '../../styles/Users.module.css'

// export type Mode = 'create' | 'update'

const UsersPage = () => {
  const { data } = useAllUsersQuery()
  const users = get(data, 'users', []) as User[]

  return (
    <>
      <Link href='/'>
        <button className={styles.button}>Go Home</button>
      </Link>
      <Link
        href={{ pathname: '/users/new', query: { mode: undefined } }}
        as={`/users/create`}
      >
        <button className={styles.create}>Create New User</button>
      </Link>
      {users.map((user) => (
        <>
          <UserCard key={user.id} user={user} />
          <hr className={styles.hr} />
        </>
      ))}
    </>
  )
}

export default withApollo(UsersPage, { getDataFromTree })
