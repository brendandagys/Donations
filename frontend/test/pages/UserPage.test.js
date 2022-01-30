import { render, screen, waitFor } from '../test-utils'
import { UserPageNoApollo } from '../../pages/users/[id]'
import userEvent from '@testing-library/user-event'

jest.mock('next/link', () => 'a')

const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const router = { push: jest.fn() }
useRouter.mockReturnValue(router)

describe('User Page', () => {
  test('Renders user form', async () => {
    render(<UserPageNoApollo query={{ id: 2 }} />)
    await waitFor(() => new Promise((resolve) => setTimeout(resolve, 0)))

    const updateUserButton = screen.getByRole('button', { name: 'Update User' })

    expect(updateUserButton).toBeInTheDocument()
  })

  test('Can navigate to users page', async () => {
    render(<UserPageNoApollo query={{ id: 2 }} />)
    await waitFor(() => new Promise((resolve) => setTimeout(resolve, 0)))
    const viewAllUsersButton = screen.getByRole('button', {
      name: 'View All Users',
    })
    expect(viewAllUsersButton.closest('a')).toHaveAttribute('href', '/users')
  })

  test('Can create user', async () => {
    render(<UserPageNoApollo query={{ id: 'create' }} />)
    await waitFor(() => new Promise((resolve) => setTimeout(resolve, 0)))
    const firstNameInput = screen.getByLabelText('First Name')
    userEvent.type(firstNameInput, 'Harold')
    const lastNameInput = screen.getByLabelText('Last Name')
    userEvent.type(lastNameInput, 'Abulla')
    const emailInput = screen.getByLabelText('Email')
    userEvent.type(emailInput, 'haroldabulla@example.com')

    const createUserButton = screen.getByRole('button', { name: 'Create User' })
    userEvent.click(createUserButton)

    await waitFor(() => new Promise((resolve) => setTimeout(resolve, 0)))

    expect(router.push).toHaveBeenCalledWith('/users')
  })

  test('Can update user', async () => {
    render(<UserPageNoApollo query={{ id: 2 }} />)
    await waitFor(() => new Promise((resolve) => setTimeout(resolve, 0)))
    const firstNameInput = screen.getByLabelText('First Name')
    userEvent.clear(firstNameInput)
    userEvent.type(firstNameInput, 'Harold')
    const lastNameInput = screen.getByLabelText('Last Name')
    userEvent.clear(lastNameInput)
    userEvent.type(lastNameInput, 'Abullam')
    const emailInput = screen.getByLabelText('Email')
    userEvent.clear(emailInput)
    userEvent.type(emailInput, 'haroldabullam@example.com')

    const updateUserButton = screen.getByRole('button', { name: 'Update User' })
    userEvent.click(updateUserButton)

    await waitFor(() => new Promise((resolve) => setTimeout(resolve, 0)))

    expect(screen.queryByText('Submission error!', { exact: false })).toBeNull()
  })
})
