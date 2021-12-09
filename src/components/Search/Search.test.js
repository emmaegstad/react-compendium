import { render, screen } from '@testing-library/react';
import Search from './search';

test('renders the Search component', () => {
  const container = render(
    <Search
      query="char"
      setQuery="char"
      setLoading="false"
      types={['fairy', 'dragon']}
      selectType="dragon"
      setSelectType="dragon"
      order="asc"
      setOrder="asc"
    />
  );
  expect(container).toMatchSnapshot();
});
