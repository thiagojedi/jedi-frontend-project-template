import { render } from '@testing-library/preact';
import HeaderText from './header-text';

describe('<HeaderText/>', () => {
  it('should show text', () => {
    const { getByText } = render(<HeaderText text={'test'} />);

    expect(getByText('test')).not.toBe(null);
  });
});
