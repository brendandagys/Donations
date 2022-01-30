import { render, screen } from '../test-utils'
import HomePage from '../../pages'

describe('Home Page', () => {
  test('Donations link renders', async () => {
    render(<HomePage />)
    const pageLink = screen
      .getByText('our list of donations.', {
        exact: false,
      })
      .closest('a')

    expect(pageLink).toBeInTheDocument()
  })
})
