import { render, screen } from '@testing-library/react';
import Main from './Main';

test('should render the Main component', () => {
  const container = render(
    <Main pokemon={['charizard', 'pikachu']} setLoading="false" setCurrentPage="1" />
  );
  expect(container).toMatchSnapshot();
});
