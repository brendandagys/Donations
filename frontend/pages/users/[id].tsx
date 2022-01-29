import Link from 'next/link'
import { get } from 'lodash'
import { getDataFromTree } from '@apollo/client/react/ssr'
import withApollo from '../../lib/withApollo'
import { useOneUserQuery } from '../../generated'
import UserForm from '../../components/UserForm'

const UserPage = ({ query }) => {
  // const mode = get(query, 'mode') as 'create' | 'update'
  const userId = get(query, 'id')
  if (userId !== 'create') {
    console.log({ userId })
    const { data, loading, error } = useOneUserQuery({
      variables: { id: parseInt(userId) },
    })
    console.log(data)
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

export default withApollo(UserPage, { getDataFromTree })
