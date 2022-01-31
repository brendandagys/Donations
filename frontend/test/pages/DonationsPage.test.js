import { render, screen } from '../test-utils'
import {
  DonationsPageNoApollo,
  getServerSideProps,
} from '../../pages/donations'
import userEvent from '@testing-library/user-event'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const router = { push: jest.fn(), replace: jest.fn() }
useRouter.mockReturnValue(router)

jest.mock('next/link', () => 'a')

describe('Donations Page', () => {
  test('Renders list of donations', async () => {
    render(<DonationsPageNoApollo />)

    const createDonationButton = screen.getByRole('button', {
      name: 'Create New Donation',
    })

    expect(createDonationButton).toBeInTheDocument()
  })

  test('Can navigate home', async () => {
    render(<DonationsPageNoApollo />)

    const homeButton = screen.getByRole('button', { name: 'Go Home' })

    expect(homeButton.closest('a')).toHaveAttribute('href', '/')
  })

  test('Can navigate to create donation form', async () => {
    render(<DonationsPageNoApollo />)

    const createDonationButton = screen.getByRole('button', {
      name: 'Create New Donation',
    })

    expect(createDonationButton.closest('a')).toHaveAttribute(
      'as',
      'donations/create'
    )
  })
  test('Can navigate to edit donation form', async () => {
    const {
      props: { data, loading },
    } = await getServerSideProps()

    render(<DonationsPageNoApollo data={data} loading={loading} />)

    const editDonationButtons = screen.getAllByRole('button', {
      name: 'Edit Donation',
    })

    expect(editDonationButtons[0].closest('a')).toHaveAttribute(
      'as',
      '/donations/1'
    )
  })

  test('Can delete donation', async () => {
    const {
      props: { data, loading },
    } = await getServerSideProps()

    render(<DonationsPageNoApollo data={data} loading={loading} />)

    const deleteDonationButtons = screen.getAllByRole('button', {
      name: 'Delete Donation',
    })

    userEvent.click(deleteDonationButtons[0])

    const deleteError = screen.queryByText('Delete error', { exact: false })

    expect(deleteError).toBeNull()
  })
})
