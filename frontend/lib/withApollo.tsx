import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'
import { useRouter } from 'next/router'
import nextWithApollo from 'next-with-apollo'

const PORT = process.env.PORT ?? 5555

const withApollo = nextWithApollo(
  ({ initialState, headers }) => {
    return new ApolloClient({
      ssrMode: typeof window === 'undefined',
      link: new HttpLink({
        uri: `http://localhost:${PORT}/graphql`,
      }),
      headers: {
        ...(headers as Record<string, string>),
      },
      cache: new InMemoryCache().restore(initialState || {}),
    })
  },
  {
    render: ({ Page, props }) => {
      const router = useRouter()

      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} {...router} />
        </ApolloProvider>
      )
    },
  }
)

export const initApolloClient = (initialState: NormalizedCacheObject = {}) => {
  const url = `http://localhost:${PORT}`
  const cache = new InMemoryCache().restore(initialState)
  const link = new HttpLink({
    uri: `${url}/graphql`,
    fetch,
  })
  const ssrMode = typeof window === 'undefined'
  const client = new ApolloClient({
    ssrMode,
    link,
    cache,
  })
  return client
}

export default withApollo
