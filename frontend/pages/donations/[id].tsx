import Link from 'next/link'
import { get } from 'lodash'
import { getDataFromTree } from '@apollo/client/react/ssr'
import withApollo from '../../lib/withApollo'
import {
  useOneDonationQuery,
  useAllUsersSelectInputQuery,
} from '../../generated'
import DonationForm from '../../components/DonationForm'

type DonationPageProps = {
  query: {
    id: string
  }
}

export const DonationPageNoApollo = ({ query }: DonationPageProps) => {
  const userId = get(query, 'id')

  const { data: selectOptions } = useAllUsersSelectInputQuery()

  if (userId !== 'create') {
    const { data, loading, error } = useOneDonationQuery({
      variables: { id: parseInt(userId) },
    })
    if (loading) return <h3>Loading...</h3>
    if (error) return <h3>{`Error! ${{ error }}`}</h3>
    else
      return (
        <>
          <Link href='/donations'>
            <button>View All Donations</button>
          </Link>
          <DonationForm
            donation={data.donation}
            selectOptions={selectOptions}
          />
        </>
      )
  } else {
    return (
      <>
        <Link href='/donations'>
          <button>View All Donations</button>
        </Link>
        <DonationForm selectOptions={selectOptions} />
      </>
    )
  }
}

export default withApollo(DonationPageNoApollo, { getDataFromTree })
