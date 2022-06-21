import { render, screen, fireEvent } from '@/src/test-utils/test-utils';

import Error from '.';

describe('Error', () => {
  const handleClick = jest.fn();

  function renderComponent() {
    return render(
      <Error
        message={'message'} //
        description={'description'}
        buttonText={'buttonText'}
        onClick={handleClick}
      />,
    );
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('렌더 테스트', () => {
    it('특정 이미지와 버튼, 에러 메시지 등이 렌더링 된다.', () => {
      renderComponent();

      expect(screen.getByTestId('error-page-main-image')).toBeInTheDocument();
      expect(screen.getByText('message')).toBeInTheDocument();
      expect(screen.getByText('description')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'buttonText' })).toBeInTheDocument();
    });
  });

  describe('버튼을 클릭하면', () => {
    it('onClick 이 호출된다.', () => {
      renderComponent();

      fireEvent.click(screen.getByRole('button', { name: 'buttonText' }));

      expect(handleClick).toBeCalled();
    });
  });
});
