import { Logo } from "components/Logo/Logo";
import { RegisterForm } from "components/RegisterForm/RegisterForm";
import mobile from "../../img/mobile1x.webp";
import { StyledSpan, Title, Wrapper, WrapperPicture } from "./RegisterPage.styled";

export default function RegisterPage() {
  return (
    <>
    <Wrapper>
        <Logo />
        <Title>Expand your mind,<br></br> reading <StyledSpan>a book</StyledSpan></Title>
          <RegisterForm />
          
      </Wrapper>
      <WrapperPicture>
        <img src={mobile} alt="mobile phone"/>
      </WrapperPicture>
      </>
  );
}
