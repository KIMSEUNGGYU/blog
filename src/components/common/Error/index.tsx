import Image from 'next/image';

import * as S from './styles';

type Props = {
  message: string;
  description: string;
  buttonText: string;
  onClick: () => void;
};

export default function Error({ message, description, buttonText, onClick }: Props) {
  return (
    <S.Wrapper>
      <Image
        data-testid="error-page-main-image"
        src="/oops.svg" //
        alt="error-page-main-image"
        width={300}
        height={100}
      />
      <h1>{message}</h1>
      <p>{description}</p>
      <button onClick={onClick}>{buttonText}</button>
    </S.Wrapper>
  );
}
