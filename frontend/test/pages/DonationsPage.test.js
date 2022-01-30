import { render, screen, waitFor } from '../test-utils'
import { DonationsPageNoApollo } from '../../pages/donations'
import userEvent from '@testing-library/user-event'

jest.mock('next/link', () => 'a')

describe('Donations Page', () => {
  test('Renders list of donations', async () => {
    render(<DonationsPageNoApollo />)
    await waitFor(() => new Promise((resolve) => setTimeout(resolve, 0)))

    const createDonationButton = screen.getByRole('button', {
      name: 'Create New Donation',
    })

    expect(createDonationButton).toBeInTheDocument()
  })

  test('Can navigate home', async () => {
    render(<DonationsPageNoApollo />)
    await waitFor(() => new Promise((resolve) => setTimeout(resolve, 0)))
    const homeButton = screen.getByRole('button', { name: 'Go Home' })
    expect(homeButton.closest('a')).toHaveAttribute('href', '/')
  })

  test('Can navigate to create donation form', async () => {
    render(<DonationsPageNoApollo />)
    await waitFor(() => new Promise((resolve) => setTimeout(resolve, 0)))
    const createDonationButton = screen.getByRole('button', {
      name: 'Create New Donation',
    })
    expect(createDonationButton.closest('a')).toHaveAttribute(
      'as',
      'donations/create'
    )
  })
  test('Can navigate to edit donation form', async () => {
    render(<DonationsPageNoApollo />)
    await waitFor(() => new Promise((resolve) => setTimeout(resolve, 0)))
    const editDonationButtons = screen.getAllByRole('button', {
      name: 'Edit Donation',
    })
    expect(editDonationButtons[0].closest('a')).toHaveAttribute(
      'as',
      '/donations/1'
    )
  })

  test('Can delete donation', async () => {
    render(<DonationsPageNoApollo />)
    await waitFor(() => new Promise((resolve) => setTimeout(resolve, 0)))
    const deleteDonationButtons = screen.getAllByRole('button', {
      name: 'Delete Donation',
    })
    userEvent.click(deleteDonationButtons[0])
    await waitFor(() => new Promise((resolve) => setTimeout(resolve, 0)))
    const deleteError = screen.queryByText('Delete error', { exact: false })
    expect(deleteError).toBeNull()
  })
})
