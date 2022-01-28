import Link from 'next/link'
import withApollo from '../lib/withApollo'
import { AllUsersQuery, useAllUsersQuery } from '../generated'
import { getDataFromTree } from '@apollo/client/react/ssr'
import { get } from 'lodash'

const Home = () => {
  const { data } = useAllUsersQuery()

  const users = get(data, 'users', []) as AllUsersQuery['users']

  return (
    <div>
      {users.map(({ id, firstName, lastName, email }) => (
        <div key={id}>
          <Link href='/users/[id]' as={`/users/${id}`}>
            <p>{`${firstName} ${lastName}`}</p>
          </Link>
          <p>{email}</p>
        </div>
      ))}
    </div>
  )
}

export default withApollo(Home, { getDataFromTree })
