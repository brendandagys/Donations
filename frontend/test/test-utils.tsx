import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import { mocks } from './mocks'

const wrapper = ({ children }) => (
  <MockedProvider mocks={mocks} addTypename={false}>
    {children}
  </MockedProvider>
)

const customRender = (ui: ReactElement, options: RenderOptions) => {
  render(ui, { wrapper, ...options })
}

// Re-export everything
export * from '@testing-library/react'

// Over-ride render method
export { customRender as render }
