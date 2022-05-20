import { render, screen, fireEvent } from "@testing-library/react"
import '@testing-library/jest-dom'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { Home } from "./index"

const response = {speaker: 'Speaker', quote: 'test quote'}

const server = setupServer(
    rest.get('http://127.0.0.1:5000', (req, res, ctx) => {
        return res(ctx.json(response))
    })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('renders a button and naruto image', () => {
    render(<Home />)
  
    const buttonEl = screen.getByRole('button')
    const imageEl = screen.getByRole('img')

    expect(buttonEl).toBeInTheDocument()
    expect(imageEl).toBeInTheDocument()
});

test('calls api on button click and update its text', async () => {
    render(<Home />)

    const buttonEl = screen.getByRole('button')

    fireEvent.click(buttonEl)

    const quoteEl = await screen.findByText(response.quote)

    expect(quoteEl).toBeInTheDocument()
});



