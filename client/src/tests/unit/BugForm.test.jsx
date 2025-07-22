import { render, screen, fireEvent } from '@testing-library/react';
import BugForm from '../../components/BugForm';

test('BugForm submits title and description', () => {
  const handleSubmit = jest.fn();
  render(<BugForm onSubmit={handleSubmit} />);
  fireEvent.change(screen.getByPlaceholderText('Title'), { target: { value: 'Bug' } });
  fireEvent.change(screen.getByPlaceholderText('Description'), { target: { value: 'Desc' } });
  fireEvent.click(screen.getByText('Report Bug'));
  expect(handleSubmit).toHaveBeenCalledWith({ title: 'Bug', description: 'Desc' });
}); 