import { render, screen, waitFor } from '../test-utils'
import { DonationPageNoApollo } from '../../pages/donations/[id]'
import userEvent from '@testing-library/user-event'

jest.mock('next/link', () => 'a')

const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const router = { push: jest.fn() }
useRouter.mockReturnValue(router)

describe('Donation Page', () => {
  test('Renders form', async () => {
    render(<DonationPageNoApollo query={{ id: 'create' }} />)

    const formLabel = screen.getByLabelText('Tip')

    expect(formLabel).toBeInTheDocument()
  })

  test('Can navigate to donations page', async () => {
    render(<DonationPageNoApollo query={{ id: 2 }} />)

    await waitFor(() => new Promise((resolve) => setTimeout(resolve, 0)))

    const viewAllDonationsButton = screen.getByRole('button', {
      name: 'View All Donations',
    })

    expect(viewAllDonationsButton.closest('a')).toHaveAttribute(
      'href',
      '/donations'
    )
  })
  test('Can create donation', async () => {
    render(<DonationPageNoApollo query={{ id: 'create' }} />)

    const amountInput = screen.getByLabelText('Amount')
    userEvent.type(amountInput, '400')
    const tipInput = screen.getByLabelText('Tip')
    userEvent.type(tipInput, '50')

    const createDonationButton = screen.getByRole('button', {
      name: 'Create Donation',
    })
    userEvent.click(createDonationButton)

    expect(router.push).toHaveBeenCalledWith('/donations')
  })

  test('Can update donation', async () => {
    render(<DonationPageNoApollo query={{ id: 2 }} />)

    await waitFor(() => new Promise((resolve) => setTimeout(resolve, 0)))

    const amountInput = screen.getByLabelText('Amount')
    userEvent.clear(amountInput)
    userEvent.type(amountInput, '401')

    const tipInput = screen.getByLabelText('Tip')
    userEvent.clear(tipInput)
    userEvent.type(tipInput, '51')

    const updateDonationButton = screen.getByRole('button', {
      name: 'Update Donation',
    })
    userEvent.click(updateDonationButton)

    expect(screen.queryByText('Submission error!', { exact: false })).toBeNull()
  })
})
