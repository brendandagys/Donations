import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import cors from 'cors'

import dotenv from 'dotenv'
dotenv.config()

import schema from './schema'

const PORT = process.env.PORT ?? 5000

const app = express()
app.use(cors())

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    // rootValue: root,
    graphiql: true,
  })
)

app.get('*', (req, res) => {
  res.send(
    `API server for Donations App is running in ${process.env.NODE_ENV} on port ${PORT}...`
  )
})

app.listen(PORT, () =>
  console.log(
    `API server for Donations App is running in ${process.env.NODE_ENV} on port ${PORT}...`
  )
)
