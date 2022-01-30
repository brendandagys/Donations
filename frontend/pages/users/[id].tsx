import Link from 'next/link'
import withApollo from '../../lib/withApollo'
import { getDataFromTree } from '@apollo/client/react/ssr'
import { useOneUserQuery } from '../../generated'
import UserForm from '../../components/UserForm'
import { get } from 'lodash'

type UserPageProps = {
  query: {
    id: string
  }
}

export const UserPageNoApollo = ({ query }: UserPageProps) => {
  const userId = get(query, 'id')

  if (userId !== 'create') {
    const { data, loading, error } = useOneUserQuery({
      variables: { id: parseInt(userId) },
    })

    if (loading) return <h3>Loading...</h3>
    if (error) return <h3>{`Error! ${{ error }}`}</h3>
    else
      return (
        <>
          <Link href='/users'>
            <button>View All Users</button>
          </Link>
          <UserForm user={data.user} />
        </>
      )
  } else {
    return (
      <>
        <Link href='/users'>
          <button>View All Users</button>
        </Link>
        <UserForm />
      </>
    )
  }
}

export default withApollo(UserPageNoApollo, { getDataFromTree })
