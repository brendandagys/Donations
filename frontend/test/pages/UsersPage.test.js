import { render, screen, waitFor } from '../test-utils'
import userEvent from '@testing-library/user-event'
import { UsersPageNoApollo } from '../../pages/users'

jest.mock('next/link', () => 'a')

describe('Users Page', () => {
  test('Renders list of users', async () => {
    render(<UsersPageNoApollo />)
    await waitFor(() => new Promise((resolve) => setTimeout(resolve, 0)))

    const userDonationsButtons = screen.getAllByRole('button', {
      name: 'View donations',
    })

    expect(userDonationsButtons[0]).toBeInTheDocument()
  })

  test('Can navigate home', async () => {
    render(<UsersPageNoApollo />)
    await waitFor(() => new Promise((resolve) => setTimeout(resolve, 0)))
    const homeButton = screen.getByRole('button', { name: 'Go Home' })
    expect(homeButton.closest('a')).toHaveAttribute('href', '/')
  })

  test('Can navigate to create user form', async () => {
    render(<UsersPageNoApollo />)
    await waitFor(() => new Promise((resolve) => setTimeout(resolve, 0)))
    const createUserButton = screen.getByRole('button', {
      name: 'Create New User',
    })
    expect(createUserButton.closest('a')).toHaveAttribute('as', 'users/create')
  })

  test('Can navigate to edit user form', async () => {
    render(<UsersPageNoApollo />)
    await waitFor(() => new Promise((resolve) => setTimeout(resolve, 0)))
    const editUserButtons = screen.getAllByRole('button', {
      name: 'Edit User',
    })
    expect(editUserButtons[0].closest('a')).toHaveAttribute('as', '/users/1')
  })

  test('Can delete user', async () => {
    render(<UsersPageNoApollo />)
    await waitFor(() => new Promise((resolve) => setTimeout(resolve, 0)))
    const deleteUserButtons = screen.getAllByRole('button', {
      name: 'Delete User',
    })
    userEvent.click(deleteUserButtons[0])
    await waitFor(() => new Promise((resolve) => setTimeout(resolve, 0)))
    const deleteError = screen.queryByText('Delete error', { exact: false })
    expect(deleteError).toBeNull()
  })

  test("Can view a user's donations", async () => {
    render(<UsersPageNoApollo />)
    await waitFor(() => new Promise((resolve) => setTimeout(resolve, 0)))
    const viewDonationsButtons = screen.getAllByRole('button', {
      name: 'View donations',
    })
    userEvent.click(viewDonationsButtons[0])
    expect(screen.getByText('$40,000', { exact: false })).toBeInTheDocument()
  })
})
