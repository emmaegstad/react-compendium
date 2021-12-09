import { render, screen } from '@testing-library/react';
import Card from './Card';

test('renders the Card component', () => {
  const container = render(<Card defense="" hp="" name="" image="" type1="" />);
  expect(container).toMatchSnapshot();
});
