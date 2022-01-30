import React, { useState } from 'react'
import { useRouter } from 'next/router'
import {
  OneUserQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
} from '../generated'
import { USERS_QUERY } from '../graphql/queries/userQueries'
import { DONATIONS_QUERY } from '../graphql/queries/donationQueries'
import styles from '../styles/User.module.css'

type UserFormProps = {
  user?: OneUserQuery['user']
}

const UserForm = ({ user }: UserFormProps) => {
  const router = useRouter()

  const [firstName, setFirstName] = useState(user ? user.firstName : '')
  const [lastName, setLastName] = useState(user ? user.lastName : '')
  const [email, setEmail] = useState(user ? user.email : '')

  const [createUser, { loading: createLoading, error: createError }] =
    useCreateUserMutation({
      refetchQueries: [{ query: USERS_QUERY }, { query: DONATIONS_QUERY }],
    })

  const [updateUser, { loading: updateLoading, error: updateError }] =
    useUpdateUserMutation({
      refetchQueries: [{ query: USERS_QUERY }, { query: DONATIONS_QUERY }],
    })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!user) {
      createUser({ variables: { firstName, lastName, email } })
      router.push('/users')
    } else {
      updateUser({
        variables: { id: user.id, firstName, lastName, email },
      })
    }
  }

  if (createLoading || updateLoading) return <h3>Submitting...</h3>
  if (createError || updateError)
    return <h3>{`Submission error! ${{ createError, updateError }}`}</h3>

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <label>
          First Name
          <input
            type='text'
            value={firstName}
            placeholder='First name...'
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>

        <label>
          Last Name
          <input
            type='text'
            value={lastName}
            placeholder='Last name...'
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>

        <label>
          Email
          <input
            type='email'
            value={email}
            placeholder='Email...'
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <button type='submit'>{user ? 'Update User' : 'Create User'}</button>
      </form>
    </div>
  )
}

export default UserForm
