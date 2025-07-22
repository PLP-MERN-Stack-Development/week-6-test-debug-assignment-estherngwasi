import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../../App';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const bugs = [];
const server = setupServer(
  rest.get('/api/bugs', (req, res, ctx) => res(ctx.json(bugs))),
  rest.post('/api/bugs', (req, res, ctx) => {
    bugs.push({ _id: '1', ...req.body, status: 'open' });
    return res(ctx.status(201), ctx.json(bugs[bugs.length - 1]));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('User can report a bug and see it in the list', async () => {
  render(<App />);
  fireEvent.change(screen.getByPlaceholderText('Title'), { target: { value: 'Bug' } });
  fireEvent.change(screen.getByPlaceholderText('Description'), { target: { value: 'Desc' } });
  fireEvent.click(screen.getByText('Report Bug'));
  await waitFor(() => screen.getByText('Bug'));
  expect(screen.getByText('Bug')).toBeInTheDocument();
}); 