import { RegisterForm } from 'components/Forms/RegisterForm';
import mobile1x from '../../img/mobile1x.webp';
import mobile2x from '../../img/mobile2x.webp';
import desktop1x from '../../img/desktop1x.webp';
import desktop2x from '../../img/desktop2x.webp';
import {
  StyledImg,
  StyledSection,
  StyledSpan,
  Title,
  Wrapper,
  WrapperPicture,
} from './RegisterPage.styled';
import { LogoForm } from 'components/LogoForm/LogoForm';

export default function RegisterPage() {
  return (
    <StyledSection>
      <Wrapper>
        <LogoForm />
        <Title>Expand your mind, reading <StyledSpan>a book</StyledSpan>
        </Title>
        <RegisterForm />
      </Wrapper>
      <WrapperPicture>
        <picture>
          <source
            srcSet={`${mobile1x} 1x, ${mobile2x} 2x`}
            media="(min-width: 375px)"
          />
          <source
            srcSet={`${desktop1x} 1x, ${desktop2x} 2x`}
            media="(min-width: 1440px)"
          />
          <StyledImg src={desktop1x} alt="mobile phone" />
        </picture>
      </WrapperPicture>
    </StyledSection>
  );
}
