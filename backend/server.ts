import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

import { graphqlHTTP } from 'express-graphql'
import schema from './schema'

const NODE_ENV = process.env.NODE_ENV ?? 'development'
const PORT = process.env.PORT ?? 5555

const app = express()
app.use(cors())

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
)

app.get('*', (req, res) => {
  res.send(
    `GraphQL server for Donations App is running in ${NODE_ENV} on port ${PORT}...`
  )
})

app.listen(PORT, () =>
  console.log(
    `GraphQL server for Donations App is running in ${NODE_ENV} on port ${PORT}...`
  )
)
