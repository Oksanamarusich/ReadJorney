import { LoginForm } from "components/Forms/LoginForm";
import { Logo } from "components/Logo/Logo";
import { StyledImg, StyledSpan, Title, Wrapper, WrapperPicture } from "pages/RegisterPage/RegisterPage.styled";
import mobile1x from '../../img/mobile1x.webp';
import mobile2x from '../../img/mobile2x.webp';
import desktop1x from '../../img/desktop1x.webp';
import desktop2x from '../../img/desktop2x.webp';

export default function LoginPage() {
    return (<>
     
      <Wrapper>
        <Logo />
        <Title>
          Expand your mind, reading <StyledSpan>a book</StyledSpan>
        </Title>
        <LoginForm />
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
    
    </>)
 }